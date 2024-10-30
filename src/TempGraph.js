import { View, Text, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import axios from 'axios';

const TempGraph = ({ userDate }) => {
  const accessToken = useSelector((state) => state.auth.accessToken);
  const [sensorData, setSensorData] = useState([]);
  const [error, setError] = useState(null);

  const formatUserDateToISO = (date) => {
    // 입력 형식이 YYYYMMDD일 경우 처리
    if (date.length === 8) {
      const year = date.slice(0, 4);
      const month = date.slice(4, 6);
      const day = date.slice(6, 8);
      return `${year}-${month}-${day}`;
    }

    // 이미 YYYY-MM-DD 형식이면 그대로 반환
    const parsedDate = new Date(date);
    return parsedDate.toISOString().split('T')[0]; // YYYY-MM-DD 형식으로 반환
  };

  const fetchSensorData = async () => {
    try {
      const formattedDate = formatUserDateToISO(userDate);

      const response = await axios.get(`http://3.34.153.235:8080/api/sensor/temperature/1`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          accept: 'application/json;charset=UTF-8',
        },
        params: {
          date: formattedDate,
        },
      });

      if (response.data && response.data.data) {
        // 처음 10개 데이터만 설정
        setSensorData(response.data.data.slice(1, 25));
      }
    } catch (err) {
      console.error('Error fetching sensor data:', err);
      setError('데이터를 불러오는 중 오류가 발생했습니다.');
    }
  };

  useEffect(() => {
    if (userDate) {
      fetchSensorData();
    }
  }, [userDate]);

  const data = sensorData.map((item, index) => ({
    value: item,
    label: index + 1, // 1부터 24까지의 레이블 설정
  }));

  return (
    <View style={styles.container}>
      {error ? (
        <Text style={{ color: 'red' }}>{error}</Text>
      ) : (
        <LineChart
          data={data}
          width={300} // 차트의 너비
          height={300} // 차트의 높이
          color="#269B00" // 선 색상
          hideDataPoints={false} // 데이터 포인트 보이기
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    paddingRight: 40,
    backgroundColor: 'lightgray',
    borderWidth: 10,
    borderRadius: 10,
    borderColor: 'lightgray',
  },
});

export default TempGraph;
