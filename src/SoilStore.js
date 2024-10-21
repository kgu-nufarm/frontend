import { Text, View, StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
const SoilStore = () => {
  const plant_list = [1, 2, 3, 4, 5, 6, 7];
  return (
    <>
      <KeyboardAwareScrollView style={styles.container} keyboardShouldPersistTaps="handled">
        <View style={styles.plantContainer}>
          {plant_list.map((item, index) => (
            <View key={index} style={styles.plantbox}>
              <View style={styles.plantimage}></View>
              <View>
                <Text>토양</Text>
              </View>
            </View>
          ))}
        </View>
      </KeyboardAwareScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    height: 150,
    backgroundColor: 'skyblue',
  },
  menubar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // 버튼 사이를 동일하게 나눔
    padding: 10,
    backgroundColor: 'skyblue',
  },
  button: {
    flex: 1, // 각 버튼이 동일한 너비를 가짐
    alignItems: 'center', // 버튼 내 텍스트 중앙 정렬
    padding: 10,
  },
  search: {
    width: '100%', // 부모 컨테이너 전체 너비 설정
    flexDirection: 'row',
    justifyContent: 'center', // 수평으로 가운데 정렬
    alignItems: 'center', // 수직으로 가운데 정렬
    marginTop: 20, // 위쪽 마진으로 약간 띄움
  },
  input: {
    height: 60, // 높이 설정
    borderColor: '#FCF1BD', // 테두리 색상
    borderWidth: 2, // 테두리 두께
    borderRadius: 15, // 테두리 둥글기
    paddingHorizontal: 10, // 텍스트와 테두리 간의 간격
    width: '90%', // 너비 설정 (부모의 90%)
    flexDirection: 'row',
    alignItems: 'center', // 아이콘과 텍스트가 수직으로 가운데 정렬되도록 함
  },
  textbox: {
    height: 55, // 높이 설정
    width: '88%', // 너비 설정 (부모 컨테이너 크기를 기준으로)
  },
  detail: {
    width: '100%', // 부모 컨테이너 전체 너비 설정
    height: 50,
    flexDirection: 'row',
    alignItems: 'center', // 수직으로 가운데 정렬
    marginTop: 10, // 위쪽 마진으로 약간 띄움
    backgroundColor: 'gray',
  },
  plantContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', // 한 줄에 공간이 부족하면 다음 줄로 넘어가도록 함
    justifyContent: 'space-between', // 아이템 간의 여백을 동일하게 나눔
    padding: 5, // 아이템들 사이에 약간의 여백을 줌
  },
  plantbox: {
    width: '48%', // 부모의 50%에서 약간 줄여서 여백 확보
    height: 220,
    backgroundColor: 'green',
    marginBottom: 5, // 아이템 간의 세로 여백
  },
  plantimage: {
    width: '100%',
    height: 165,
    backgroundColor: 'blue',
  },
});

export default SoilStore;
