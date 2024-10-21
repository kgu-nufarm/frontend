import { TouchableOpacity } from 'react-native';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import SeedlingStore from './SeedlingStore';
import SoilStore from './SoilStore';
import NutrientStore from './NutrientStore';
import KitStore from './KitStore';
import { useState } from 'react';

const StoreDetail = (props) => {
  // Redux에서 accessToken 가져오기
  // const accessToken = useSelector((state) => state.auth.accessToken);
  const [seedling, setSeedling] = useState(1);
  const [soil, setSoil] = useState(0);
  const [nutrient, setNutrient] = useState(0);
  const [kit, setKit] = useState(0);

  return (
    <>
      <View style={styles.menubar}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setSeedling(1);
            setSoil(0);
            setNutrient(0);
            setKit(0);
          }}
        >
          <Text>모종</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setSeedling(0);
            setSoil(1);
            setNutrient(0);
            setKit(0);
          }}
        >
          <Text>토양</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setSeedling(0);
            setSoil(0);
            setNutrient(1);
            setKit(0);
          }}
        >
          <Text>영양제</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setSeedling(0);
            setSoil(0);
            setNutrient(0);
            setKit(1);
          }}
        >
          <Text>SET</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.search}>
        <View style={styles.input}>
          <TextInput style={styles.textbox} />
          <FontAwesome name="search" size={24} color="#269B0F" style={{ marginLeft: 10 }} />
        </View>
      </View>
      <View style={styles.detail}>
        <Text style={{ marginLeft: 10 }}>개의 상품이 있습니다.</Text>
      </View>
      {seedling == 1 ? <SeedlingStore navigation={props.navigation} /> : null}
      {soil == 1 ? <SoilStore /> : null}
      {nutrient == 1 ? <NutrientStore /> : null}
      {kit == 1 ? <KitStore /> : null}
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

export default StoreDetail;
