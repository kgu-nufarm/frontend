import { View, Text } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

const MonitorHeader = (props) => {
  const goToHome = (e) => {
    props.navigation.navigate('Home');
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
      }}
    >
      <Ionicons name="arrow-back-outline" size={30} color="#269B00" style={{ marginLeft: 20 }} onPress={goToHome} />
      <Text style={{ marginRight: 290, fontSize: 27 }}>상추</Text>
      {/* <Ionicons name="reorder-three-outline" size={25} color="#269B00" style={{ marginTop: 5, marginRight: 20 }} /> */}
    </View>
  );
};

export default MonitorHeader;
