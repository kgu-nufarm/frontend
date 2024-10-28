import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import MonitorDate from './MonitorDate';
import Margin from './Margin';
import MonitorHeader from './MonitorHeader';
import GrowthHeader from './GrowthHeader';
import AnomalyHeader from './AnomalyHeader';
import AntDesign from '@expo/vector-icons/AntDesign';
const AnomalyDetail = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <AnomalyHeader navigation={navigation} />
      <Margin height={20} />
      <MonitorDate />
      <Margin height={20} />
      <View style={styles.box_header_style}>
        <AntDesign name="exclamationcircleo" size={20} color="white" style={{ marginLeft: 5 }} />
        <Text style={{ color: 'white', fontWeight: 'bold', marginLeft: 10 }}>시든 잎 이상 감지 세부 내용</Text>
      </View>
      <Margin height={20} />
      <View style={styles.box_style}>
        <Text style={{ textAlign: 'left', marginBottom: 30, fontSize: 13 }}>
          위조 현상이란 식물이 물 부족이나 환경 스트레스(온도,습도 등)로 인해 잎이 시드는 현상입니다. 시든 잎은 광합성
          효율이 낮아지며, 전체 식물의 생장에도 악영향을 미칠 수 있어요.
        </Text>
        <Text style={{ textAlign: 'left', fontSize: 13, marginRight: 118, color: 'red' }}>
          따라서 시든 잎은 즉시 제거해 주세요!
        </Text>
      </View>
      <Margin height={620} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box_header_style: {
    height: 50, // 높이 설정
    borderRadius: 10, // 테두리 둥글기
    width: 370, // 너비 설정
    backgroundColor: '#269B00',
    alignItems: 'center', // 세로 중앙 정렬
    justifyContent: 'flex-start', // 가로 방향으로 나란히 정렬
    flexDirection: 'row', // 가로 정렬 설정
    paddingLeft: 10, // 왼쪽 여백 추가 (옵션)
  },
  box_style: {
    height: 150, // 높이 설정
    borderRadius: 10, // 테두리 둥글기
    width: 370, // 너비 설정
    backgroundColor: '#E0E0E0',

    alignItems: 'center',
    justifyContent: 'center',
    padding: 20, // 박스 내부에 여백을 추가
    margin: 5, // 박스 외부에 여백 추가
  },
});

export default AnomalyDetail;
