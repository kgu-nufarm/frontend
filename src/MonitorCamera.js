import { View, Text, StyleSheet } from 'react-native';
import { Shadow } from 'react-native-shadow-2';

const MonitorCamera = () => {
  return (
    <View>
      <Shadow
        distance={6} // 그림자 거리 설정
        startColor={'#00000020'} // 그림자 색상
        offset={[0, 5]} // 그림자 오프셋 (x, y)
        radius={10} // 그림자 반경 설정
        containerViewStyle={styles.imageContainer}
      >
        <View style={styles.boxStyle}></View>
      </Shadow>
    </View>
  );
};

const styles = StyleSheet.create({
  boxStyle: {
    height: 230, // 높이 설정
    borderRadius: 15, // 테두리 둥글기
    width: 370, // 너비 설정
    backgroundColor: '#FCF1BD',
  },
});
export default MonitorCamera;
