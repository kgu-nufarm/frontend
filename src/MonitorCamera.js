import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Shadow } from 'react-native-shadow-2';

const MonitorCamera = () => {
  const [imageUri, setImageUri] = useState(''); // 초기값으로 유효한 URL 설정
  const [nextImageUri, setNextImageUri] = useState('');

  // // 주기적으로 이미지를 업데이트하는 함수
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const timestamp = new Date().getTime();
  //     setNextImageUri(`http://172.20.10.2:5000/image_model2?${timestamp}`); // 캐시 방지용 타임스탬프 추가
  //   }, 1000); // 1초마다 이미지 갱신

  //   return () => clearInterval(interval); // 컴포넌트 언마운트 시 인터벌 제거
  // }, []);

  return (
    <View>
      <Shadow distance={6} startColor={'#00000020'} offset={[0, 5]} radius={10}>
        <View style={styles.boxStyle}>
          {/* <Image
            source={{ uri: nextImageUri }}
            style={[styles.webcamImage, { position: 'absolute', opacity: 0 }]}
            onLoad={() => setImageUri(nextImageUri)}
          />
          <Image source={{ uri: imageUri }} style={styles.webcamImage} resizeMode="cover" /> */}
        </View>
      </Shadow>
    </View>
  );
};

const styles = StyleSheet.create({
  boxStyle: {
    height: 230,
    borderRadius: 15,
    width: 370,
    backgroundColor: '#FCF1BD',
    overflow: 'hidden',
  },
  webcamImage: {
    width: '100%',
    height: 230,
  },
});

export default MonitorCamera;
