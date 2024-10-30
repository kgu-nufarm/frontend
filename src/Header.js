import React, { useEffect, useState } from 'react';
import { Text, View, Modal, Pressable, StyleSheet, ScrollView } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useSelector } from 'react-redux';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import axios from 'axios';
import Margin from './Margin';

const Header = (props) => {
  // Redux에서 accessToken 가져오기
  const accessToken = useSelector((state) => state.auth.accessToken);

  const [modal, setModal] = useState(false);
  const [isDetected, setIsDetected] = useState(false);
  const [error, setError] = useState(null);
  const [alaram, setAlarm] = useState([]);
  const [message, setMessage] = useState([]);
  const [date, setDate] = useState([]);
  const goToMonitor = (e) => {
    props.navigation.navigate('Monitor');
  };

  // API 호출 함수
  const fetchSensorData = async () => {
    try {
      const response = await axios.get('http://3.34.153.235:8080/api/notification/get', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          accept: 'application/json;charset=UTF-8',
        },
      });

      // 응답에서 data 리스트를 가져와 저장
      if (response.data && response.data.data) {
        const data = response.data.data;

        const formatDateToKST = (dateString) => {
          const date = new Date(dateString);
          // 한국 시간대 UTC+9로 변환
          const kstDate = new Date(date.getTime() + 9 * 60 * 60 * 1000);
          const year = kstDate.getFullYear();
          const month = String(kstDate.getMonth() + 1).padStart(2, '0');
          const day = String(kstDate.getDate()).padStart(2, '0');
          const hours = kstDate.getHours();
          const minutes = String(kstDate.getMinutes()).padStart(2, '0');
          const ampm = hours >= 12 ? 'PM' : 'AM';
          const formattedHour = hours % 12 || 12;

          return `${year}.${month}.${day} ${ampm} ${String(formattedHour).padStart(2, '0')}:${minutes}`;
        };

        setMessage(data.map((item) => item.message));
        setDate(data.map((item) => formatDateToKST(item.time)));
        setAlarm(data.map((item) => item.id));
      }
    } catch (err) {
      setError('Error fetching sensor data');
      if (err.response) {
        console.error('Server responded with status', err.response.status, 'and message:', err.response.data);
      } else if (err.request) {
        console.error('No response received:', err.request);
      } else {
        console.error('Error setting up request:', err.message);
      }
    }
  };

  const onPressModalOpen = () => {
    console.log('팝업을 여는 중입니다.');
    setModal(true);
  };

  const onPressModalClose = () => {
    setModal(false);
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const checkDetectionStatus = async () => {
  //       try {
  //         const response = await axios.get('http://192.168.137.14:5000/status'); // Flask 서버 IP로 변경하세요.

  //         if (response.data.status === true) {
  //           // status가 true이면 isDetected를 true로 설정
  //           setIsDetected(true);
  //           console.log('Detection active:', response.data.status);
  //         } else {
  //           // status가 false이면 isDetected를 false로 설정
  //           setIsDetected(false);
  //           console.log('Detection inactive:', response.data.status);
  //         }
  //       } catch (error) {
  //         setError('Error fetching detection status');
  //         console.error('Error fetching detection status:', error);
  //         setIsDetected(false); // 에러 발생 시 isDetected를 false로 설정
  //       }
  //     };

  //     checkDetectionStatus();
  //   }, 1000); // 1초마다 API 호출

  //   return () => clearInterval(interval); // 컴포넌트 언마운트 시 인터벌 클리어
  // }, []);

  // reset_status API 호출하는 함수
  const handleStopUpdates = async () => {
    try {
      const response = await axios.post('http://172.20.10.2:5000/reset_status'); // Flask 서버 IP로 변경하세요.
      if (response.data.status === false) {
        setIsDetected(false); // status가 false로 변경되면 isDetected를 false로 설정
        console.log('Status reset:', response.data.status);
      }
    } catch (error) {
      setError('Error resetting status');
      console.error('Error resetting status:', error);
      setIsDetected(false); // 에러 발생 시 상태를 false로 설정
    }
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 5,
        width: '100%',
        textAlign: 'center',
      }}
    >
      <View>
        <Pressable
          onPress={() => {
            onPressModalOpen();
            setIsDetected(false);
            handleStopUpdates();
            fetchSensorData();
          }}
        >
          <MaterialCommunityIcons
            name={isDetected ? 'bell-badge-outline' : 'bell-outline'}
            size={25}
            color="#269B00"
            style={{ marginLeft: 15 }}
          />
        </Pressable>
      </View>
      <View>
        <Modal animationType="slide" visible={modal} transparent={true}>
          <ScrollView style={styles.centeredView}>
            <Margin height={60} />
            {alaram.map((item, index) => (
              <View key={index} style={styles.modalView}>
                <Pressable
                  onPress={() => {
                    goToMonitor();
                    onPressModalClose();
                  }}
                >
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginRight: 5 }}>상추</Text>
                        <Text style={{ fontSize: 6, marginRight: 5, marginTop: 5 }}> ● </Text>
                        <Text style={{ fontSize: 15, marginTop: 5 }}>{date[index]}</Text>
                      </View>
                      <Text style={{ marginRight: 17, marginTop: 3, fontSize: 15 }}>{message[index]}</Text>
                    </View>
                    <View>
                      <AntDesign
                        name="arrowright"
                        size={25}
                        color="lightgray"
                        style={{ marginTop: 30, marginLeft: 90, marginBottom: 30 }}
                      />
                    </View>
                  </View>
                </Pressable>
              </View>
            ))}
            <View style={styles.modalView}>
              <Pressable
                onPress={() => {
                  goToMonitor();
                  onPressModalClose();
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <View
                    style={{
                      flexDirection: 'column',
                      alignItems: 'center',
                      marginRight: 10,
                    }}
                  >
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 40 }}>
                      <Text style={{ fontSize: 20, fontWeight: 'bold', marginRight: 5 }}>상추</Text>
                      <Text style={{ fontSize: 6, marginRight: 5, marginTop: 5 }}> ● </Text>
                      <Text style={{ fontSize: 15, marginTop: 5 }}>2024.10.28 PM 09:34</Text>
                    </View>
                    <Text style={{ marginTop: 3, fontSize: 15, marginRight: 15 }}>
                      온도가 적정 수준으로 조절되었습니다.
                    </Text>
                  </View>
                  <View style={{ marginLeft: 40 }}>
                    <AntDesign
                      name="arrowright"
                      size={25}
                      color="lightgray"
                      style={{ marginTop: 30, marginBottom: 30 }}
                    />
                  </View>
                </View>
              </Pressable>
            </View>
            <Pressable style={{ alignItems: 'center', marginTop: 10 }} onPress={onPressModalClose}>
              <AntDesign name="closecircle" size={24} color="#269B00" />
            </Pressable>
            <Margin height={30} />
          </ScrollView>
        </Modal>
      </View>
      <Text
        style={{
          fontSize: 26,
          fontWeight: 'bold',
          color: '#269B00',
          textAlign: 'center',
          flex: 1,
        }}
      >
        nufarm
      </Text>
      <Ionicons name="reorder-three-outline" size={25} color="#269B00" style={{ marginTop: 5, marginRight: 15 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  modalView: {
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  centeredView: {
    flex: 1,
    alignContent: 'center',
    textAlignVertical: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
});

export default Header;
