import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Shadow } from 'react-native-shadow-2';

const UserPlant = (props) => {
  const goToMonitor = (e) => {
    props.navigation.navigate('Monitor');
  };
  return (
    <View>
      <TouchableOpacity onPress={goToMonitor} style={styles.boxStyle}>
        <Shadow
          distance={6} // 그림자 거리 설정
          startColor={'#00000020'} // 그림자 색상
          offset={[0, 7]} // 그림자 오프셋 (x, y)
          radius={10} // 그림자 반경 설정
          containerViewStyle={styles.imageContainer}
        >
          <Image
            source={{ uri: 'https://cityfarmer.seoul.go.kr/fileManager/www/brd/6261/1617605980762.jpg' }}
            style={styles.imageStyle}
          />
        </Shadow>
      </TouchableOpacity>
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
  imageStyle: {
    width: 370,
    height: 150,
    borderRadius: 15,
  },
});
export default UserPlant;
