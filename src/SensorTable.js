import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import axios from 'axios';

const SensorTable = () => {
  const [temp, setTemp] = useState('');
  const [humidity, setHumidity] = useState('');
  const [illuminance, setIlluminance] = useState('');
  const [soilMoisture, setSoilMoisture] = useState('');
  const [co2, setCo2] = useState('');

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('http://192.168.137.96:5000/sensor'); // 라즈베리파이의 IP 및 엔드포인트에 맞게 수정
  //       const data = response.data;
  //       setTemp(data.temp);
  //       setHumidity(data.humidity);
  //       setIlluminance(data.illuminance);
  //       setSoilMoisture(data.soil_moisture);
  //       setCo2(data.co2);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData(); // 초기 데이터 로드

  //   const intervalId = setInterval(fetchData, 200); // 0.2초마다 데이터 갱신

  //   return () => clearInterval(intervalId); // 컴포넌트 언마운트 시 interval 정리
  // }, []);
  return (
    <View style={styles.wrapper}>
      <View style={styles.box_style}>
        <View style={styles.textWrapper}>
          <Text style={styles.label}>온도</Text>
        </View>
        <View style={styles.numWrapper}>
          <Text style={styles.num_label}>19°C</Text>
        </View>
      </View>
      <View style={styles.box_style}>
        <View style={styles.textWrapper}>
          <Text style={styles.label}>습도</Text>
        </View>
        <View style={styles.numWrapper}>
          <Text style={styles.num_label}>86%</Text>
        </View>
      </View>
      <View style={styles.box_style}>
        <View style={styles.textWrapper}>
          <Text style={styles.label}>조도</Text>
        </View>
        <View style={styles.numWrapper}>
          <Text style={styles.num_label}>3023lx</Text>
        </View>
      </View>
      <View style={styles.box_style}>
        <View style={styles.textWrapper}>
          <Text style={styles.label}>가스</Text>
        </View>
        <View style={styles.numWrapper}>
          <Text style={styles.num_label}>32%</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  box_style: {
    height: 90, // 높이 설정
    borderRadius: 10, // 테두리 둥글기
    width: '95%', // 너비 설정
    backgroundColor: '#E0E0E0',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    position: 'relative', // 텍스트 위치를 제어하기 위해 position 추가
  },
  textWrapper: {
    position: 'absolute', // 텍스트를 박스 안에서 배치할 수 있게 설정
    top: 15, // 위쪽으로부터 10px 위치
    left: 20, // 왼쪽으로부터 10px 위치
  },
  numWrapper: {
    position: 'absolute', // 텍스트를 박스 안에서 배치할 수 있게 설정
    top: 40, // 위쪽으로부터 10px 위치
    right: 20, // 왼쪽으로부터 10px 위치
  },
  label: {
    fontSize: 15, // 글자 크기
    fontWeight: 'bold', // 글자 두께 설정
  },
  num_label: {
    fontSize: 30, // 글자 크기
    fontWeight: 'bold', // 글자 두께 설정
  },
});

export default SensorTable;
