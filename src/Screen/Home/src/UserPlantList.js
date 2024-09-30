import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import UserPlant from './UserPlant';

const UserPlantList = () => {
  return (
    <ScrollView>
      <UserPlant />
      <UserPlant />
      <UserPlant />
      <UserPlant />
      <UserPlant />
    </ScrollView>
  );
};
export default UserPlantList;
