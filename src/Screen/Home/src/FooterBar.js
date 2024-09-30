import React from 'react';
import { Text, View, Dimensions, SafeAreaView } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const FooterBar = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        // backgroundColor: 'yellow',
      }}
    >
      <MaterialCommunityIcons name="shopping-outline" size={25} color="#269B00" />
      <Ionicons name="home-outline" size={25} style={{ color: '#269B00', paddingHorizontal: 120 }} />
      <FontAwesome5 name="user" size={23} color="#269B00" />
    </View>
  );
};
export default FooterBar;