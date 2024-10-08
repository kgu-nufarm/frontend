import { View, Text, StyleSheet, Image } from 'react-native';
import { Shadow } from 'react-native-shadow-2';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MonitorCamera = () => {
  // const [imageUri, setImageUri] = useState(null);

  // useEffect(() => {
  //   // 일정 간격으로 서버에서 이미지를 요청
  //   const interval = setInterval(() => {
  //     fetchImage();
  //   }, 2000); // 2초마다 새로운 이미지를 가져옴

  //   return () => clearInterval(interval); // 컴포넌트가 언마운트되면 interval을 정리
  // }, []);

  // const fetchImage = async () => {
  //   try {
  //     // Flask 서버에서 이미지를 가져오기
  //     const response = await axios.get('http://172.20.10.2:5000/', { responseType: 'blob' });
  //     const imageBlob = response.data;
  //     const imageUrl = URL.createObjectURL(imageBlob); // 이미지 Blob을 URL로 변환
  //     setImageUri(imageUrl); // 이미지 URI 업데이트
  //   } catch (error) {
  //     console.error('Error fetching image:', error);
  //   }
  // };

  return (
    <View>
      <Shadow
        distance={6} // 그림자 거리 설정
        startColor={'#00000020'} // 그림자 색상
        offset={[0, 5]} // 그림자 오프셋 (x, y)
        radius={10} // 그림자 반경 설정
      >
        <View style={styles.boxStyle}>
          {/* {imageUri ? <Image source={{ uri: imageUri }} style={styles.image} /> : <Text>이미지를 불러오는 중...</Text>} */}
        </View>
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
  video: {
    width: '100%',
    height: '100%', // 원하는 높이 설정
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
});
export default MonitorCamera;
