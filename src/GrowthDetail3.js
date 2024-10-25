import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import MonitorDate from './MonitorDate';
import Margin from './Margin';
import MonitorHeader from './MonitorHeader';
import GrowthHeader from './GrowthHeader';

const GrowthDeatil3 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <GrowthHeader navigation={navigation} />
      <Margin height={20} />
      <MonitorDate />
      <Margin height={20} />
      <View style={styles.box_header_style}>
        <Text style={{ color: 'white', fontWeight: 'bold', marginLeft: 14 }}>③ㄴ 3단계 세부내용</Text>
      </View>
      <Margin height={20} />
      <View style={styles.box_style}>
        <Text style={{ textAlign: 'left', marginBottom: 30, fontSize: 13 }}>
          3단계는 상추 모종을 심고 3~5주 후로, 이때부터는 수확할 수 있는 시기입니다. 잎이 넓고 두꺼워지며 상추의 잎
          일부는 보라색을 띱니다.
        </Text>
        <Text style={{ textAlign: 'left', fontSize: 13, marginBottom: 15 }}>
          외곽 잎부터 수확할 수 있으니 오늘 저녁에 함께 드셔보세요!
        </Text>
        <Text
          style={{
            textAlign: 'left',
            fontSize: 13,
            marginRight: 290,
            marginBottom: 5,
            textDecorationLine: 'underline',
          }}
        >
          Tip
        </Text>
        <Text style={{ textAlign: 'left', fontSize: 13, marginRight: 8 }}>
          잎 크기는 폭 5~6cm, 길이 15~18cm 정도로 손바닥보다 작은 것이 좋아요!
        </Text>
      </View>
      <Margin height={540} />
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
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  box_style: {
    height: 230, // 높이 설정
    borderRadius: 10, // 테두리 둥글기
    width: 370, // 너비 설정
    backgroundColor: '#E0E0E0',

    alignItems: 'center',
    justifyContent: 'center',
    padding: 20, // 박스 내부에 여백을 추가
    margin: 5, // 박스 외부에 여백 추가
  },
});

export default GrowthDeatil3;
