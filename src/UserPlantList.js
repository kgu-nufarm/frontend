import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import UserPlant from './UserPlant';

const UserPlantList = (props) => {
  return (
    <ScrollView>
      <UserPlant navigation={props.navigation} />
    </ScrollView>
  );
};
export default UserPlantList;
