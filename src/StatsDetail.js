import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Margin from './Margin';
import TempGraph from './TempGraph';
import GasGraph from './GasGraph';
import HumidityGraph from './HumidityGraph';
import IlluminanceGraph from './IlluminanceGraph';
import { useState } from 'react';

const StatsDetail = () => {
  const [tempGraph, setTempGraph] = useState(1);
  const [humidityGraph, setHumidityGraph] = useState(0);
  const [illuminanceGraph, setIlluminanceGraph] = useState(0);
  const [gasGraph, setGasGraph] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => {
            setTempGraph(1);
            setHumidityGraph(0);
            setIlluminanceGraph(0);
            setGasGraph(0);
          }}
          style={[styles.button, { backgroundColor: tempGraph === 1 ? '#269B00' : 'white' }]}
        >
          <Text style={{ color: tempGraph === 1 ? 'white' : '#269B00' }}>온도</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setTempGraph(0);
            setHumidityGraph(1);
            setIlluminanceGraph(0);
            setGasGraph(0);
          }}
          style={[styles.button, { backgroundColor: humidityGraph === 1 ? '#269B00' : 'white' }]}
        >
          <Text style={{ color: humidityGraph === 1 ? 'white' : '#269B00' }}>습도</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setTempGraph(0);
            setHumidityGraph(0);
            setIlluminanceGraph(1);
            setGasGraph(0);
          }}
          style={[styles.button, { backgroundColor: illuminanceGraph === 1 ? '#269B00' : 'white' }]}
        >
          <Text style={{ color: illuminanceGraph === 1 ? 'white' : '#269B00' }}>조도</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setTempGraph(0);
            setHumidityGraph(0);
            setIlluminanceGraph(0);
            setGasGraph(1);
          }}
          style={[styles.button, { backgroundColor: gasGraph === 1 ? '#269B00' : 'white' }]}
        >
          <Text style={{ color: gasGraph === 1 ? 'white' : '#269B00' }}>가스</Text>
        </TouchableOpacity>
      </View>
      <Margin height={10} />
      {tempGraph == 1 ? <TempGraph /> : null}
      {humidityGraph == 1 ? <HumidityGraph /> : null}
      {illuminanceGraph == 1 ? <IlluminanceGraph /> : null}
      {gasGraph == 1 ? <GasGraph /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column', // 세로로 나열
    alignItems: 'center', // 중앙 정렬
  },
  buttonContainer: {
    flexDirection: 'row', // 버튼을 가로로 나열
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    height: 40, // 높이 설정
    borderRadius: 25, // 테두리 둥글기
    borderColor: '#269B00', // 테두리 색깔
    borderWidth: 2, // 테두리 두께
    width: 85, // 너비 설정
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  text: {
    color: '#269B00',
  },
});

export default StatsDetail;
