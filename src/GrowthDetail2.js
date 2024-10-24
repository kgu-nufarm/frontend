import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import MonitorDate from './MonitorDate';
import Margin from './Margin';
import MonitorHeader from './MonitorHeader';
import GrowthHeader from './GrowthHeader';

const GrowthDeatil2 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <GrowthHeader navigation={navigation} />
      <Margin height={20} />
      <MonitorDate />
      <Margin height={20} />
      <View style={styles.box_header_style}>
        <Text style={{ color: 'white', fontWeight: 'bold', marginLeft: 14 }}>② 2단계 세부내용</Text>
      </View>
      <Margin height={20} />
      <View style={styles.box_style}>
        <Text style={{ textAlign: 'left', marginBottom: 30, fontSize: 13 }}>
          2단계는 상추 모종을 심고 1~3주 후로, 상추가 뿌리를 내리고 잎과 줄기가 본격적으로 성장하는 시기입니다. 이
          시기에는 겉잎을 솎아주어 상추에 공간과 자원을 주는 것이 좋습니다.
        </Text>
        <Text style={{ textAlign: 'left', fontSize: 13, marginBottom: 15, marginRight: 35 }}>
          완전히 성장하기까지는 2~4주의 시간이 더 필요합니다.
        </Text>
        <Text
          style={{
            textAlign: 'left',
            fontSize: 13,
            marginRight: 300,
            marginBottom: 5,
            textDecorationLine: 'underline',
          }}
        >
          Tip
        </Text>
        <Text style={{ textAlign: 'left', fontSize: 13, marginRight: 10, marginBottom: 5 }}>
          겉잎을 제거해 통풍을 개선하고, 내부 잎에 햇빛이 잘 닿도록 관리해 주세요.
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

export default GrowthDeatil2;
