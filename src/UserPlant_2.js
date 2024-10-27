import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import { Shadow } from 'react-native-shadow-2';
import Entypo from '@expo/vector-icons/Entypo';

const UserPlant_2 = ({ navigation }) => {
  const [like, setLike] = useState(true);
  const goToMonitor = (e) => {
    navigation.navigate('Monitor');
  };
  const likePress = () => {
    setLike(!like);
  };
  return (
    <View>
      <TouchableOpacity onPress={goToMonitor} style={styles.boxStyle}>
        <Image
          source={{
            uri: 'https://i.namu.wiki/i/gQXfphxzeY-Xo_dU3m8vZMj3j1OKSJMjaBVeQDiVUJ6dl60JsAnEuGZYmOuk8z7Bfi76GVP80CvIi4TEuw5e5w.webp',
          }}
          style={styles.imageStyle}
        />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <View style={{ marginLeft: 20, marginTop: 15 }}>
            <Text style={{ fontSize: 20 }}>바질</Text>
            <Text>심은 날짜 2024.09.16</Text>
          </View>
          <TouchableOpacity onPress={likePress}>
            <Entypo
              name={like ? 'star-outlined' : 'star'}
              size={24}
              color="black"
              style={{ marginRight: 20, marginTop: 10 }}
            />
          </TouchableOpacity>
        </View>
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
    borderTopLeftRadius: 10, // 왼쪽 위 모서리 둥글게
    borderTopRightRadius: 10, // 오른쪽 위 모서리 둥글게
  },
});

export default UserPlant_2;
