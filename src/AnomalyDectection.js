import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Fontisto from '@expo/vector-icons/Fontisto';
import Margin from './Margin';
import AntDesign from '@expo/vector-icons/AntDesign';
import axios from 'axios';
const AnomalyDectection = (props) => {
  const [isPressed_1, setIsPressed_1] = useState(false);
  const [isPressed_2, setIsPressed_2] = useState(false);

  const goToAnomaly = () => {
    props.navigation.navigate('AnomalyDetail');
  };
  const goToAnomaly2 = () => {
    props.navigation.navigate('AnomalyDetail2');
  };

  const [classCounts, setClassCounts] = useState({ hole: 0, wither: 0 });

  useEffect(() => {
    const fetchClassCounts = async () => {
      try {
        const response = await axios.get('http://192.168.137.14:5000/get_class_counts');
        setClassCounts(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching class counts:', error);
      }
    };

    // 1초마다 데이터 가져오기
    const intervalId = setInterval(fetchClassCounts, 1000);

    // 컴포넌트가 언마운트될 때 인터벌을 정리
    return () => clearInterval(intervalId);
  }, []);
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      {/* 첫 번째 버튼 */}
      {classCounts.wither !== 0 && (
        <TouchableOpacity
          style={[styles.box_style, { borderColor: isPressed_1 ? '#269B00' : 'transparent', borderWidth: 2 }]}
          onPressIn={() => setIsPressed_1(true)}
          onPressOut={() => setIsPressed_1(false)}
          onPress={goToAnomaly}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
            <AntDesign name="exclamationcircleo" size={20} color="#8080808C" style={{ marginLeft: 20 }} />
            <View
              style={{
                marginLeft: 15, // 아이콘과 텍스트 사이 간격
                marginRight: 50, // 텍스트와 화살표 사이 간격
              }}
            >
              <Text style={{ fontSize: 20 }}>
                <Text style={{ color: 'red' }}>{classCounts.wither}개</Text>의 시든잎이 발생했어요!
              </Text>
              <Text>자세한 내용을 확인해주세요</Text>
            </View>
            <Fontisto name="arrow-right" size={20} color="#8080808C" />
          </View>
        </TouchableOpacity>
      )}
      <Margin height={10} />
      {/* 두 번째 버튼 */}
      {classCounts.hole !== 0 && (
        <TouchableOpacity
          style={[styles.box_style, { borderColor: isPressed_2 ? '#269B00' : 'transparent', borderWidth: 2 }]}
          onPressIn={() => setIsPressed_2(true)}
          onPressOut={() => setIsPressed_2(false)}
          onPress={goToAnomaly2}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
            <AntDesign name="exclamationcircleo" size={20} color="#8080808C" style={{ marginLeft: 20 }} />
            <View
              style={{
                marginLeft: 15, // 아이콘과 텍스트 사이 간격
                marginRight: 65, // 텍스트와 화살표 사이 간격
              }}
            >
              <Text style={{ fontSize: 20 }}>
                <Text style={{ color: '#269B00' }}>{classCounts.hole}개</Text>의 잎에 구멍이 났어요!
              </Text>
              <Text>자세한 내용을 확인해주세요</Text>
            </View>
            <Fontisto name="arrow-right" size={20} color="#8080808C" />
          </View>
        </TouchableOpacity>
      )}
      {classCounts.hole === 0 || classCounts.wither === 0 ? (
        classCounts.hole === 0 && classCounts.wither === 0 ? (
          <Margin height={290} />
        ) : (
          <Margin height={145} />
        )
      ) : null}

      <Margin height={10} />
    </View>
  );
};

const styles = StyleSheet.create({
  box_style: {
    height: 135, // 높이 설정
    borderRadius: 10, // 테두리 둥글기
    width: '95%', // 너비 설정
    backgroundColor: '#E0E0E0',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
});

export default AnomalyDectection;
