import React from 'react';
import { SafeAreaView, Text, TextInput, View, StyleSheet } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const Search = () => {
  return (
    <View
      style={{
        width: '95%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'blue',
      }}
    >
      <View style={styles.input}>
        <TextInput style={styles.textbox} />
        <FontAwesome name="search" size={24} color="#269B0F" style={{ marginTop: 15, marginLeft: 10 }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60, // 높이 설정
    borderColor: '#FCF1BD', // 테두리 색상
    borderWidth: 2, // 테두리 두께
    borderRadius: 15, // 테두리 둥글기
    paddingHorizontal: 10, // 텍스트와 테두리 간의 간격
    width: 370, // 너비 설정
    flexDirection: 'row',
    borderColor: '#FCF1BD', // 테두리 색상
  },
  textbox: {
    height: 55, // 높이 설정
    width: '88%', // 너비 설정 (80%의 부모 컨테이너 크기를 기준으로)
  },
});

export default Search;
