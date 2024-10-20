import { View, Text, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';
import { useSelector } from 'react-redux'; // useSelector import
import { useState, useEffect } from 'react'; // useState, useEffect import
const HumidityGraph = () => {
  // Redux에서 accessToken 가져오기
  // const accessToken = useSelector((state) => state.auth.accessToken);

  // 응답 데이터를 저장할 상태
  const [sensorData, setSensorData] = useState([
    22, 21, 22, 22, 25, 24, 22, 21, 21, 24, 23, 23, 21, 25, 21, 25, 23, 25, 24, 24, 24, 24, 25, 23,
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

  const data = sensorData.map((sensor, index) => ({
    value: sensor,
    label: index + 1,
  }));
  return (
    <View style={styles.container}>
      <LineChart
        data={data}
        width={300} // 차트의 너비
        height={200} // 차트의 높이
        color="#269B00" // 선 색상
        isAnimated // 애니메이션 활성화
        hideDataPoints
        yAxisOffset={0}
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

export default HumidityGraph;
