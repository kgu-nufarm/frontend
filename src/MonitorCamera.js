import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Shadow } from 'react-native-shadow-2';

const MonitorCamera = () => {
  const initialImageUri = 'http://192.168.137.14:5000/image_model2';
  const [imageUri, setImageUri] = useState(initialImageUri);
  const [nextImageUri, setNextImageUri] = useState(initialImageUri);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const timestamp = new Date().getTime();
  //     const newUri = `http://192.168.137.14:5000/image_model2?${timestamp}`;
  //     setNextImageUri(newUri); // 캐시 방지용 타임스탬프 추가
  //   }, 1000);

  //   return () => clearInterval(interval); // 컴포넌트 언마운트 시 인터벌 제거
  // }, []);

  return (
    <View>
      <Shadow distance={6} startColor={'#00000020'} offset={[0, 5]} radius={10}>
        <View style={styles.boxStyle}>
          <Image
            source={{ uri: nextImageUri }}
            style={[styles.webcamImage, { position: 'absolute', opacity: 0 }]}
            onLoad={() => setImageUri(nextImageUri)}
          />
          <Image source={{ uri: imageUri }} style={styles.webcamImage} resizeMode="cover" />
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
