import React, { useEffect, useState } from 'react';
import { Text, View, Dimensions, SafeAreaView, Modal, Pressable, StyleSheet } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';

const Header = (props) => {
  const [modal, setModal] = useState(true);

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
        <Pressable onPress={onPressModalOpen}>
          <MaterialCommunityIcons name="bell-outline" size={25} color="#269B00" style={{ marginLeft: 15 }} />
        </Pressable>
      </View>
      <View>
        <Modal animationType="slide" visible={modal} transparent={true}>
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
});
export default Header;
