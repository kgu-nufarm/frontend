import React, { useEffect, useState } from 'react';
import { Text, View, Modal, Pressable, StyleSheet } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import axios from 'axios';

const Header = (props) => {
  const [modal, setModal] = useState(false);
  const [isDetected, setIsDetected] = useState(false);
  const [error, setError] = useState(null);

  const goToMonitor = (e) => {
    props.navigation.navigate('Monitor');
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
  //         const response = await axios.get('http://172.20.10.2:5000/status'); // Flask 서버 IP로 변경하세요.

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

  // // reset_status API 호출하는 함수
  // const handleStopUpdates = async () => {
  //   try {
  //     const response = await axios.post('http://172.20.10.2:5000/reset_status'); // Flask 서버 IP로 변경하세요.
  //     if (response.data.status === false) {
  //       setIsDetected(false); // status가 false로 변경되면 isDetected를 false로 설정
  //       console.log('Status reset:', response.data.status);
  //     }
  //   } catch (error) {
  //     setError('Error resetting status');
  //     console.error('Error resetting status:', error);
  //     setIsDetected(false); // 에러 발생 시 상태를 false로 설정
  //   }
  // };

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
            // handleStopUpdates();
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
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Pressable
                onPress={() => {
                  goToMonitor();
                  onPressModalClose();
                }}
              >
                <Text style={styles.modalTextStyle}>상추 물주기를 완료했어요.</Text>
                <Text>(팝업 누르면 모니터링 화면으로 이동)</Text>
              </Pressable>
            </View>
            <Pressable style={{ alignItems: 'center' }} onPress={onPressModalClose}>
              <AntDesign name="closecircle" size={24} color="#269B00" />
            </Pressable>
          </View>
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
    marginTop: 230,
    margin: 30,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTextStyle: {
    color: '#17191c',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 50,
  },
  centeredView: {
    flex: 1,
    alignContent: 'center',
    textAlignVertical: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
});

export default Header;
