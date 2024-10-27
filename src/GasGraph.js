import { View, Text, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';
import { useSelector } from 'react-redux'; // useSelector import
import { useState, useEffect } from 'react'; // useState, useEffect import
import axios from 'axios';
const GasGraph = ({ userDate }) => {
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

      const response = await axios.get(`http://3.34.153.235:8080/api/sensor/co2/1`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          accept: 'application/json;charset=UTF-8',
        },
        params: {
          date: formattedDate,
        },
      });

      if (response.data && response.data.data) {
        setSensorData(response.data.data.slice(1, 24));
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
      <LineChart
        data={data}
        width={300} // 차트의 너비
        height={300} // 차트의 높이
        color="#269B00" // 선 색상
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start', // 왼쪽 정렬
    paddingRight: 40, // 필요시 왼쪽 여백 추가
    backgroundColor: 'lightgray',
    borderWidth: 10,
    borderRadius: 10,
    borderColor: 'lightgray',
  },
});

export default GasGraph;
