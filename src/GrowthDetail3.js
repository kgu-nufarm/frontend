import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import MonitorDate from './MonitorDate';
import Margin from './Margin';
import MonitorHeader from './MonitorHeader';
import GrowthHeader from './GrowthHeader';

const GrowthDeatil3 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <GrowthHeader navigation={navigation} />
      <MonitorDate />
      <Margin height={20} />
      <View style={styles.box_header_style}>
        <Text style={{ color: 'white', fontWeight: 'bold', marginLeft: 14 }}>① 3단계 세부내용</Text>
      </View>
      <Margin height={20} />
      <View style={styles.box_style}>
        <Text>
          상추 모종을 심고 0~1주 후로 뿌리가 새로운 환경에 적응하는 시기입니다. 상추가 자리를 잡고 생장할 준비를 하며,
          뿌리 성장이 활발하게 이루어져야 합니다.
        </Text>
        <Text>완전히 성장하기까지는 3~5주의 시간이 더 필요합니다!</Text>
      </View>
      <Margin height={550} />
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
    height: 200, // 높이 설정
    borderRadius: 10, // 테두리 둥글기
    width: 370, // 너비 설정
    backgroundColor: '#E0E0E0',

    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
});

export default GrowthDeatil3;
