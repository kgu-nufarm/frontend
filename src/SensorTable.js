import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import axios from 'axios';

const SensorTable = () => {
  const [temp, setTemp] = useState('');
  const [humidity, setHumidity] = useState('');
  const [illuminance, setIlluminance] = useState('');
  const [soilMoisture, setSoilMoisture] = useState('');
  const [co2, setCo2] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://192.168.137.96:5000/sensor'); // 라즈베리파이의 IP 및 엔드포인트에 맞게 수정
        const data = response.data;
        setTemp(data.temp);
        setHumidity(data.humidity);
        setIlluminance(data.illuminance);
        setSoilMoisture(data.soil_moisture);
        setCo2(data.co2);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // 초기 데이터 로드

    // const intervalId = setInterval(fetchData, 200); // 0.2초마다 데이터 갱신

    // return () => clearInterval(intervalId); // 컴포넌트 언마운트 시 interval 정리
  }, []);
  return (
    <View style={styles.wrapper}>
      {/* Table container */}
      <View style={styles.table}>
        {/* Table Header */}
        <View style={styles.table_first}>
          {/* Table row */}
          <View
            style={[
              styles.text_style,
              {
                borderRightWidth: 2, // 왼쪽 테두리 두께
                borderRightColor: 'white', // 왼쪽 테두리 색깔
                borderStyle: 'dotted', // 왼쪽 테두리 스타일: 점선
              },
            ]}
          >
            <Text>온도</Text>
          </View>

          <View style={styles.text_style}>
            <Text>{temp}</Text>
          </View>
        </View>

        <View style={styles.table_second}>
          {/* Table row */}
          <View
            style={[
              styles.text_style,
              {
                borderRightWidth: 2, // 왼쪽 테두리 두께
                borderRightColor: 'white', // 왼쪽 테두리 색깔
                borderStyle: 'dotted', // 왼쪽 테두리 스타일: 점선
              },
            ]}
          >
            <Text>습도</Text>
          </View>

          <View style={styles.text_style}>
            <Text>{humidity}</Text>
          </View>
        </View>

        <View style={styles.table_third}>
          {/* Table row */}
          <View
            style={[
              styles.text_style,
              {
                borderRightWidth: 2, // 왼쪽 테두리 두께
                borderRightColor: 'white', // 왼쪽 테두리 색깔
                borderStyle: 'dotted', // 왼쪽 테두리 스타일: 점선
              },
            ]}
          >
            <Text>조도</Text>
          </View>

          <View style={styles.text_style}>
            <Text>{illuminance}</Text>
          </View>
        </View>

        <View style={styles.table_fourth}>
          {/* Table row */}
          <View
            style={[
              styles.text_style,
              {
                borderRightWidth: 2, // 왼쪽 테두리 두께
                borderRightColor: 'white', // 왼쪽 테두리 색깔
                borderStyle: 'dotted', // 왼쪽 테두리 스타일: 점선
              },
            ]}
          >
            <Text>가스</Text>
          </View>

          <View style={styles.text_style}>
            <Text>23</Text>
          </View>
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
  table: {
    width: '90%',
    backgroundColor: '#E0E0E0',
    borderColor: '#269B00', // 테두리 색깔
    borderWidth: 2, // 테두리 두께
  },
  table_first: {
    width: '100%',
    height: 90,
    // backgroundColor: 'yellow',
    flexDirection: 'row',
    borderBottomWidth: 2, // 하단 테두리 두께
    borderBottomColor: 'white', // 하단 테두리 색깔
    borderStyle: 'dotted', // 하단 테두리 스타일: 점선
  },
  table_second: {
    flexDirection: 'row',
    width: '100%',
    height: 90,
    // backgroundColor: 'blue',
    borderBottomWidth: 2, // 하단 테두리 두께
    borderBottomColor: 'white', // 하단 테두리 색깔
    borderStyle: 'dotted', // 하단 테두리 스타일: 점선
  },
  table_third: {
    flexDirection: 'row',
    width: '100%',
    height: 90,
    // backgroundColor: 'green',
    borderBottomWidth: 2, // 하단 테두리 두께
    borderBottomColor: 'white', // 하단 테두리 색깔
    borderStyle: 'dotted', // 하단 테두리 스타일: 점선
  },
  table_fourth: {
    flexDirection: 'row',
    width: '100%',
    height: 90,
    // backgroundColor: 'skyblue',
  },
  text_style: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    height: '100%',
  },
});

export default SensorTable;
