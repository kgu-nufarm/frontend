import { View, Text, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';
import { useSelector } from 'react-redux'; // useSelector import
import { useState, useEffect } from 'react'; // useState, useEffect import
import axios from 'axios';
const TempGraph = () => {
  // Redux에서 accessToken 가져오기
  // const accessToken = useSelector((state) => state.auth.accessToken);

  // 응답 데이터를 저장할 상태
  const [sensorData, setSensorData] = useState([
    23, 45, 56, 32, 44, 50, 60, 72, 38, 40, 52, 55, 34, 47, 49, 59, 63, 66, 30, 42, 51, 58, 35, 39,
  ]);
  // const [error, setError] = useState(null);

  // // API 호출 함수
  // const fetchSensorData = async () => {
  //   try {
  //     const response = await axios.get('http://192.168.137.237:8123/api/sensor/co2/1', {
  //       params: { date: '2024-10-14' },
  //       headers: {
  //         Authorization: `Bearer ${accessToken}`,
  //         accept: 'application/json;charset=UTF-8',
  //       },
  //     });

  //     // 응답에서 data 리스트를 가져와 저장
  //     if (response.data && response.data.data) {
  //       setSensorData(response.data.data);
  //       console.log(response.data.data);
  //     }
  //   } catch (err) {
  //     setError('Error fetching sensor data');
  //     if (err.response) {
  //       console.error('Server responded with status', err.response.status, 'and message:', err.response.data);
  //     } else if (err.request) {
  //       console.error('No response received:', err.request);
  //     } else {
  //       console.error('Error setting up request:', err.message);
  //     }
  //   }
  // };

  // // 컴포넌트가 마운트될 때 API 호출
  // useEffect(() => {
  //   if (accessToken) {
  //     fetchSensorData();
  //   }
  // }, [accessToken]);

  const data = sensorData.map((sensor, index) => ({ value: sensor, label: index + 1 }));

  return (
    <View style={styles.container}>
      <LineChart
        data={data}
        width={300} // 차트의 너비
        height={200} // 차트의 높이
        color="#00bfff" // 선 색상
        isAnimated // 애니메이션 활성화
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

export default TempGraph;
