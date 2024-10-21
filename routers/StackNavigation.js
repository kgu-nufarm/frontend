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
import AlarmModal from '../src/AlarmModal';
import ProductInfoScreen from '../Screen/ProductInfoScreen';
import StoreScreen from '../Screen/StoreScreen';

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
    <Stack.Navigator screenOptions={({ route }) => ({ headerShown: false })}>
      <Stack.Screen name="Home" component={MainTabNavigation} />
      <Stack.Screen name="Monitor" component={TabNavigation} />
      <Stack.Screen name="Growth_Detail" component={GrowthDeatil} />
      <Stack.Screen name="Store" component={StoreScreen} />
      <Stack.Screen name="ProductInfo" component={ProductInfoScreen} />
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
