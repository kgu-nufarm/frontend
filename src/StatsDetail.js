import { View, Text, StyleSheet } from 'react-native';

const StatsDetail = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // paddingVertical: 5,
        // backgroundColor: 'yellow',
        // width: '100%',
      }}
    >
      <View style={styles.button}>
        <Text style={styles.text}>온도</Text>
      </View>
      <View style={styles.button}>
        <Text style={styles.text}>습도</Text>
      </View>
      <View style={styles.button}>
        <Text style={styles.text}>조도</Text>
      </View>
      <View style={styles.button}>
        <Text style={styles.text}>가스</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 40, // 높이 설정
    borderRadius: 25, // 테두리 둥글기
    borderColor: '#269B00', // 테두리 색깔
    borderWidth: 2, // 테두리 두께
    width: 85, // 너비 설정
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  text: {
    color: '#269B00',
  },
});

export default StatsDetail;
