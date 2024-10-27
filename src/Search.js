import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';
import Fontisto from '@expo/vector-icons/Fontisto';

const Search = ({ setSearchPlant }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSearch = () => {
    setSearchPlant(inputValue);
  };

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
        <TextInput
          style={styles.textbox}
          value={inputValue}
          onChangeText={setInputValue}
          onSubmitEditing={handleSearch} // 엔터 키 누를 때 실행
          placeholder="내 작물을 검색해보세요"
        />
        <TouchableOpacity onPress={handleSearch}>
          <Fontisto name="search" size={18} color="black" style={{ marginTop: 16 }} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50, // 높이 설정
    borderColor: '#FCF1BD', // 테두리 색상
    borderWidth: 0, // 테두리 두께
    borderRadius: 15, // 테두리 둥글기
    paddingHorizontal: 10, // 텍스트와 테두리 간의 간격
    width: 370, // 너비 설정
    flexDirection: 'row',
    borderColor: '#FCF1BD', // 테두리 색상
    backgroundColor: '#E0E0E0',
  },
  textbox: {
    height: 50, // 높이 설정
    width: '88%', // 너비 설정 (80%의 부모 컨테이너 크기를 기준으로)
    // backgroundColor: 'yellow',
    marginLeft: 10,
  },
});

export default Search;
