import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MonitoringScreen from '../Screen/MonitoringScreen';
import HomeScreen from '../Screen/HomeScreen';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Text, View, Modal, Pressable, StyleSheet, SafeAreaView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabNavigation from './TabNavigation';
import GrowthDeatil from '../src/GrowthDetail';
import MainTabNavigation from './MainTabNavigation';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AntDesign from '@expo/vector-icons/AntDesign';

const Stack = createStackNavigator();

const StackNavigation = () => {
  const [modal, setModal] = useState(true);

  const onPressModalOpen = () => {
    console.log('팝업을 여는 중입니다.');
    setModal(true);
  };

  const onPressModalClose = () => {
    setModal(false);
  };
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={MainTabNavigation}
        options={{
          headerTitleAlign: 'center',
          headerStyle: {
            height: 100, // 헤더 높이를 원하는 값으로 조정
          },
          headerLeft: () => (
            <View>
              <View>
                <Pressable onPress={onPressModalOpen}>
                  <MaterialCommunityIcons name="bell-outline" size={25} color="#269B00" style={{ marginLeft: 15 }} />
                </Pressable>
              </View>

              <View>
                <Modal animationType="slide" visible={modal} transparent={true}>
                  <View style={styles.modalView}>
                    <Pressable>
                      <Text style={styles.modalTextStyle}>상추 물주기를 완료했어요.</Text>
                    </Pressable>
                  </View>
                  <Pressable style={{ alignItems: 'center' }} onPress={onPressModalClose}>
                    <AntDesign name="closecircle" size={24} color="#269B00" />
                  </Pressable>
                </Modal>
              </View>
            </View>
          ),
          headerTitle: () => (
            <View>
              <Text style={{ fontSize: 26, fontWeight: 'bold', color: '#269B00' }}>nufarm</Text>
            </View>
          ),
          headerRight: () => (
            <View>
              <Ionicons
                name="reorder-three-outline"
                size={25}
                color="#269B00"
                style={{ marginTop: 5, marginRight: 15 }}
              />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="Monitor"
        component={TabNavigation}
        options={({ navigation }) => ({
          headerLeft: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Ionicons
                name="arrow-back-outline"
                size={25}
                color="#269B00"
                style={{ marginLeft: 15 }}
                onPress={() => navigation.goBack()} // 뒤로가기 동작
              />
            </View>
          ),
          headerRight: () => (
            <View>
              <Ionicons
                name="reorder-three-outline"
                size={25}
                color="#269B00"
                style={{ marginTop: 5, marginRight: 20 }}
              />
            </View>
          ),
        })}
      />
      <Stack.Screen name="Growth_Detail" component={GrowthDeatil} />
    </Stack.Navigator>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#17191c',
  },
  /**
   * 모달 화면 영역
   */
  modalView: {
    marginTop: 70,
    margin: 30,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 300,
  },
  modalTextStyle: {
    color: '#17191c',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
