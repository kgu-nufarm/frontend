import React, { useEffect, useState } from 'react';
import { Text, View, Dimensions, SafeAreaView, Modal, Pressable, StyleSheet, ScrollView } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import axios from 'axios';

const Header = (props) => {
  const [modal, setModal] = useState(false);

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

  const [isDetected, setIsDetected] = useState(false);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     axios
  //       .get('http://172.20.10.2:5000/status') // Flask 서버 IP로 변경하세요.
  //       .then((response) => {
  //         setIsDetected(response.data.should_notify);
  //         console.log(response.data);
  //       })
  //       .catch((error) => {
  //         console.error('Error fetching detection status:', error);
  //       });
  //   }, 1000); // 1초마다 상태 확인

  //   // 컴포넌트가 언마운트될 때 인터벌 정리
  //   return () => clearInterval(interval);
  // }, []);
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 5,
        // backgroundColor: 'yellow',
        width: '100%',
        textAlign: 'center',
      }}
    >
      <View>
        <Pressable
          onPress={() => {
            onPressModalOpen();
            setIsDetected(false);
          }}
        >
          <MaterialCommunityIcons
            name={isDetected == true ? 'bell-badge-outline' : 'bell-outline'}
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
                <Text> (팝업 누르면 모니터링 화면으로 이동)</Text>
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
          // backgroundColor: 'blue',
          alignItems: 'center',
          textAlign: 'center',
          flex: 1,
          // marginRight: 100,
        }}
      >
        nufarm
      </Text>
      <Ionicons name="reorder-three-outline" size={25} color="#269B00" style={{ marginTop: 5, marginRight: 15 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '50%',
    backgroundColor: '#17191c',
  },
  /**
   * 모달 화면 영역
   */
  modalView: {
    marginTop: 230,
    margin: 30,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
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
