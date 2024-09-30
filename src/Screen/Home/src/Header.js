import React from 'react';
import { Text, View, Dimensions, SafeAreaView } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';

const Header = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 5,
        // backgroundColor: 'yellow',
        width: '100%',
      }}
    >
      <MaterialCommunityIcons name="bell-outline" size={25} color="#269B00" style={{ marginLeft: 15 }} />
      <Text style={{ fontSize: 26, fontWeight: 'bold', color: '#269B00' }}>nufarm</Text>
      <Ionicons name="reorder-three-outline" size={25} color="#269B00" style={{ marginTop: 5, marginRight: 15 }} />
    </View>
  );
};
export default Header;
