import { View, Text } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

const MonitorHeader = () => {
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
      <Ionicons name="arrow-back-outline" size={24} color="#269B00" style={{ marginLeft: 20 }} />
      <Text style={{ marginRight: 250 }}>상추</Text>
      <Ionicons name="reorder-three-outline" size={25} color="#269B00" style={{ marginTop: 5, marginRight: 20 }} />
    </View>
  );
};

export default MonitorHeader;
