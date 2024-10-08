import { View, Text, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';

const TempGraph = () => {
  const data = [
    { value: 50, label: 'Jan' },
    { value: 80, label: 'Feb' },
    { value: 70, label: 'Mar' },
    { value: 90, label: 'Apr' },
  ];
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
