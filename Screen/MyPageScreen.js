import { Text, View, StyleSheet } from 'react-native';

const MyPageScreen = () => {
  return (
    <View style={styles.container}>
      <Text>건우</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // 화면 전체를 차지하도록 설정
    backgroundColor: '#FFFFFF', // 배경색을 흰색으로 설정
    justifyContent: 'center', // 내용물을 세로 중앙에 배치
    alignItems: 'center', // 내용물을 가로 중앙에 배치
  },
});

export default MyPageScreen;
