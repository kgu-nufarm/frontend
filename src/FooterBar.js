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
      }}
    >
      <MaterialCommunityIcons name="shopping-outline" size={25} color="#269B00" style={{ marginHorizontal: 50 }} />
      <Ionicons name="home-outline" size={25} style={{ color: '#269B00', marginHorizontal: 50 }} />
      {/* <FontAwesome5 name="user" size={23} color="#269B00" style={{ marginHorizontal: 30 }} /> */}
    </View>
  );
};
export default FooterBar;
