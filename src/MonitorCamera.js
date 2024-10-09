import React, { useState, useEffect, useRef } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Shadow } from 'react-native-shadow-2';

const MonitorCamera = () => {
  // const [imageUri, setImageUri] = useState(''); // 현재 표시 중인 이미지 URI
  // const [nextImageUri, setNextImageUri] = useState(''); // 로드 중인 새로운 이미지 URI

  // // 주기적으로 이미지를 업데이트하는 함수
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const timestamp = new Date().getTime();
  //     setNextImageUri(`http://172.20.10.2:5000/image?${timestamp}`); // 캐시 방지용 타임스탬프 추가
  //   }, 500); // 1초마다 이미지 갱신

  //   return () => clearInterval(interval); // 컴포넌트 언마운트 시 인터벌 제거
  // }, []);

  return (
    <View>
      <Shadow
        distance={6} // 그림자 거리 설정
        startColor={'#00000020'} // 그림자 색상
        offset={[0, 5]} // 그림자 오프셋 (x, y)
        radius={10} // 그림자 반경 설정
      >
        <View style={styles.boxStyle}>
          {/* <Image
            source={{ uri: nextImageUri }}
            style={[styles.webcamImage, { position: 'absolute', opacity: 0 }]} // 처음엔 보이지 않음
            onLoad={() => setImageUri(nextImageUri)} // 이미지가 로드되면 교체
          />
          <Image
            source={{ uri: imageUri }}
            style={styles.webcamImage} // 현재 이미지를 유지하며 깜빡거림 방지
            resizeMode="contain"
          /> */}
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
    overflow: 'hidden', // 테두리 안에 비디오가 맞춰지도록 설정
  },
  webcamImage: {
    width: 370, // 원하는 이미지 크기로 설정
    height: 230,
  },
});

export default MonitorCamera;
