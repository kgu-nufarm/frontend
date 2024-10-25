import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import SensorTable from './SensorTable';
import Margin from './Margin';
import GrowthManagement from './GrowthManagement';
import AnomalyDectection from './AnomalyDectection';
import { useState } from 'react';

const MonitorDetail = ({ navigation, sensor, setSensor, growth, setGrowth, anomaly, setAnomaly }) => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          // paddingVertical: 3,
          // backgroundColor: 'yellow',
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
          <Text style={{ color: sensor === 1 ? 'white' : '#269B00', fontSize: 18 }}>환경정보</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setGrowth(1);
            setSensor(0);
            setAnomaly(0);
          }}
          style={[styles.button, { backgroundColor: growth === 1 ? '#269B00' : 'white' }]}
        >
          <Text style={{ color: growth === 1 ? 'white' : '#269B00', fontSize: 18 }}>성장관리</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setGrowth(0);
            setSensor(0);
            setAnomaly(1);
          }}
          style={[styles.button, { backgroundColor: anomaly === 1 ? '#269B00' : 'white' }]}
        >
          <Text style={{ color: anomaly === 1 ? 'white' : '#269B00', fontSize: 18 }}>이상감지</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Margin height={20} />
        {sensor == 1 ? (
          <View>
            <SensorTable />
            <Margin height={15} />
          </View>
        ) : null}
        {growth == 1 ? (
          <View>
            <GrowthManagement navigation={navigation} />
          </View>
        ) : null}
        {anomaly == 1 ? (
          <View>
            <AnomalyDectection navigation={navigation} />
            <Margin height={145} />
          </View>
        ) : null}
        {/* <SensorTable /> */}
        {/* <GrowthManagement /> */}
        {/* <AnomalyDectection /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 50, // 높이 설정
    borderRadius: 25, // 테두리 둥글기
    borderColor: '#269B00', // 테두리 색깔
    borderWidth: 2, // 테두리 두께
    width: 110, // 너비 설정
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10, // 버튼 사이의 수평 간격 조정
    // margin: 12,
    // backgroundColor: 'blue',
  },
  text: {
    color: '#269B00',
  },
});

export default MonitorDetail;
