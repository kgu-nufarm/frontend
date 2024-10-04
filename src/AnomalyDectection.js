import { StyleSheet, View } from 'react-native';

const AnomalyDectection = () => {
  return (
    <View style={{ margin: 5, justifyContent: 'space-between', alignItems: 'center' }}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.small_box}></View>
        <View style={styles.box_style}></View>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.small_box}></View>
        <View style={styles.box_style}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box_style: {
    height: 80, // 높이 설정
    borderRadius: 10, // 테두리 둥글기
    width: '68%', // 너비 설정
    backgroundColor: '#E0E0E0',

    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  small_box: {
    height: 80, // 높이 설정
    borderRadius: 10, // 테두리 둥글기
    width: '25%', // 너비 설정
    backgroundColor: '#E0E0E0',

    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
});

export default AnomalyDectection;
