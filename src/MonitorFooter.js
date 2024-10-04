import { View, Text } from 'react-native';

const MonitorFooter = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'yellow',
        paddingVertical: 15,
        width: '80 %',
      }}
    >
      <Text>실시간 모니터링</Text>
      <Text>통계서비스</Text>
    </View>
  );
};

export default MonitorFooter;
