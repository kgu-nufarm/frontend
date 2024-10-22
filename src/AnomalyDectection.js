import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Fontisto from '@expo/vector-icons/Fontisto';
import Margin from './Margin';
import AntDesign from '@expo/vector-icons/AntDesign';

const AnomalyDectection = (props) => {
  const [isPressed_1, setIsPressed_1] = useState(false);
  const [isPressed_2, setIsPressed_2] = useState(false);

  const goToGrowth1 = () => {
    props.navigation.navigate('Growth_Detail');
  };
  const goToGrowth2 = () => {
    props.navigation.navigate('Growth_Detail2');
  };

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      {/* 첫 번째 버튼 */}
      <TouchableOpacity
        style={[styles.box_style, { borderColor: isPressed_1 ? '#269B00' : 'transparent', borderWidth: 2 }]}
        onPressIn={() => setIsPressed_1(true)}
        onPressOut={() => setIsPressed_1(false)}
        onPress={goToGrowth1}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
          <AntDesign name="exclamationcircleo" size={20} color="#8080808C" style={{ marginLeft: 20 }} />
          <View
            style={{
              marginLeft: 15, // 아이콘과 텍스트 사이 간격
              marginRight: 50, // 텍스트와 화살표 사이 간격
            }}
          >
            <Text style={{ fontSize: 20 }}>4개의 시든잎이 발생했어요!</Text>
            <Text>자세한 내용을 확인해주세요</Text>
          </View>
          <Fontisto name="arrow-right" size={20} color="#8080808C" />
        </View>
      </TouchableOpacity>
      <Margin height={10} />
      {/* 두 번째 버튼 */}
      <TouchableOpacity
        style={[styles.box_style, { borderColor: isPressed_2 ? '#269B00' : 'transparent', borderWidth: 2 }]}
        onPressIn={() => setIsPressed_2(true)}
        onPressOut={() => setIsPressed_2(false)}
        onPress={goToGrowth2}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
          <AntDesign name="exclamationcircleo" size={20} color="#8080808C" style={{ marginLeft: 20 }} />
          <View
            style={{
              marginLeft: 15, // 아이콘과 텍스트 사이 간격
              marginRight: 65, // 텍스트와 화살표 사이 간격
            }}
          >
            <Text style={{ fontSize: 20 }}>2개의 잎에 구멍이 났어요!</Text>
            <Text>자세한 내용을 확인해주세요</Text>
          </View>
          <Fontisto name="arrow-right" size={20} color="#8080808C" />
        </View>
      </TouchableOpacity>
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
