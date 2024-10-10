import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import SensorTable from './SensorTable';
import Margin from './Margin';
import GrowthManagement from './GrowthManagement';
import AnomalyDectection from './AnomalyDectection';
import { useState } from 'react';

const MonitorDetail = (props) => {
  const [sensor, setSensor] = useState(1);
  const [growth, setGrowth] = useState(0);
  const [anomaly, setAnomaly] = useState(0);
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          // paddingVertical: 3,
          // backgroundColor: 'yellow',
          width: '80%',
        }}
      >
        <TouchableOpacity
          onPress={() => {
            setGrowth(0);
            setSensor(1);
            setAnomaly(0);
          }}
          style={[styles.button, { backgroundColor: sensor === 1 ? '#269B00' : 'white' }]}
        >
          <Text style={{ color: sensor === 1 ? 'white' : '#269B00' }}>센서수치</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setGrowth(1);
            setSensor(0);
            setAnomaly(0);
          }}
          style={[styles.button, { backgroundColor: growth === 1 ? '#269B00' : 'white' }]}
        >
          <Text style={{ color: growth === 1 ? 'white' : '#269B00' }}>성장관리</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setGrowth(0);
            setSensor(0);
            setAnomaly(1);
          }}
          style={[styles.button, { backgroundColor: anomaly === 1 ? '#269B00' : 'white' }]}
        >
          <Text style={{ color: anomaly === 1 ? 'white' : '#269B00' }}>이상감지</Text>
        </TouchableOpacity>
      </View>
      <Margin height={5} />
      {sensor == 1 ? <SensorTable /> : null}
      {growth == 1 ? <GrowthManagement navigation={props.navigation} /> : null}
      {anomaly == 1 ? <AnomalyDectection /> : null}
      {/* <SensorTable /> */}
      {/* <GrowthManagement /> */}
      {/* <AnomalyDectection /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 40, // 높이 설정
    borderRadius: 25, // 테두리 둥글기
    borderColor: '#269B00', // 테두리 색깔
    borderWidth: 2, // 테두리 두께
    width: 110, // 너비 설정
    alignItems: 'center',
    justifyContent: 'center',
    margin: 12,
    // backgroundColor: 'blue',
  },
  text: {
    color: '#269B00',
  },
});

export default MonitorDetail;
