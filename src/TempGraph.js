import { View, Text, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react'; // useState, useEffect import
import axios from 'axios';

const TempGraph = ({ userDate }) => {
  // Redux에서 accessToken 가져오기
  const accessToken = useSelector((state) => state.auth.accessToken);

  // 응답 데이터를 저장할 상태
  const [sensorData, setSensorData] = useState([]);
  const [error, setError] = useState(null);

  // userDate를 YYYY-MM-DD 형식으로 변환하는 함수
  // const formatUserDateToISO = (userDate) => {
  //   const [year, month, day] = userDate
  //     .replace('년', '')
  //     .replace('월', '')
  //     .replace('일', '')
  //     .split(' ')
  //     .map((value) => value.trim().padStart(2, '0'));

  //   return `${year}-${month}-${day}`;
  // };

  // // API 호출 함수
  // const fetchSensorData = async () => {
  //   try {
  //     const formattedDate = formatUserDateToISO(userDate); // 날짜 변환
  //     const response = await axios.get('http://3.34.153.235:8080/api/sensor/co2/1', {
  //       params: { date: formattedDate }, // 변환된 날짜 사용
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
  //     console.error('Error fetching sensor data:', err);
  //   }
  // };

  // // 컴포넌트가 마운트될 때 API 호출
  // useEffect(() => {
  //   if (userDate) {
  //     fetchSensorData();
  //   }
  // }, [userDate]);

  const data = sensorData.map((sensor, index) => ({ value: sensor, label: index + 1 }));

  return (
    <View style={styles.container}>
      <LineChart
        data={data}
        width={300} // 차트의 너비.
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
