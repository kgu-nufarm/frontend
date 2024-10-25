import { TouchableOpacity } from 'react-native';
import { Text, View, StyleSheet, TextInput, Image } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
const StoreDetail = (props) => {
  // Redux에서 accessToken 가져오기
  const accessToken = useSelector((state) => state.auth.accessToken);

  const [seedling, setSeedling] = useState(1);
  const [soil, setSoil] = useState(0);
  const [nutrient, setNutrient] = useState(0);
  const [kit, setKit] = useState(0);

  const [plantId, setPlantId] = useState([]);
  const [plantName, setPlantName] = useState([]);
  const [plantPrice, setPlantPrice] = useState([]);
  const [plantImage, setPlantImage] = useState([]);

  const [error, setError] = useState(null);

  // 카테고리 값 설정
  let category = '';
  if (seedling === 1) {
    category = 'SEEDS';
  } else if (soil === 1) {
    category = 'SOIL';
  } else if (nutrient === 1) {
    category = 'NUTRITION';
  } else if (kit === 1) {
    category = 'SET';
  }
  const goToProductInfo = (e) => {
    props.navigation.navigate('ProductInfo');
  };
  // API 호출 함수
  const fetchData = async () => {
    try {
      const response = await axios.get(`http://3.34.153.235:8080/api/item/category?category=${category}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          accept: 'application/json;charset=UTF-8',
        },
      });

      // 응답에서 data 리스트를 가져와 저장
      if (response.data && response.data.data) {
        const data = response.data.data;
        setPlantId(data.map((item) => item.id));
        setPlantName(data.map((item) => item.name));
        setPlantPrice(data.map((item) => item.price));
        setPlantImage(data.map((item) => item.imageUrl));
      }
    } catch (err) {
      setError('Error fetching sensor data');
      if (err.response) {
        console.error('Server responded with status', err.response.status, 'and message:', err.response.data);
      } else if (err.request) {
        console.error('No response received:', err.request);
      } else {
        console.error('Error setting up request:', err.message);
      }
    }
  };

  // 컴포넌트가 마운트될 때 API 호출
  useEffect(() => {
    if (accessToken) {
      fetchData();
    }
  }, [accessToken]);

  // 상태가 변경될 때마다 API 호출
  useEffect(() => {
    fetchData();
  }, [category]);
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

      <>
        <View style={styles.detail}>
          <Text style={{ marginLeft: 10 }}>{plantId.length}개의 상품이 있습니다.</Text>
        </View>
        <KeyboardAwareScrollView style={styles.container} keyboardShouldPersistTaps="handled">
          <View style={styles.plantContainer}>
            {plantId.map((item, index) => (
              <View key={index} style={styles.plantbox}>
                <TouchableOpacity style={styles.plantimage} onPress={goToProductInfo}>
                  <Image source={{ uri: plantImage[index] }} style={styles.imageStyle} />
                </TouchableOpacity>
                <View>
                  <Text>{plantName[index]}</Text>
                </View>
              </View>
            ))}
          </View>
        </KeyboardAwareScrollView>
      </>
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
  imageStyle: {
    width: '100%',
    height: 165,
  },
});

export default StoreDetail;
