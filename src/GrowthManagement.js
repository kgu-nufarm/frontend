import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

const GrowthManagement = (props) => {
  const [isPressed, setIsPressed] = useState(false); // 눌림 상태 관리

  const goToMonitor = (e) => {
    props.navigation.navigate('Growth_Detail');
  };

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity
        style={[
          styles.box_style,
          { borderColor: isPressed ? 'blue' : 'transparent', borderWidth: 2 }, // 눌림 상태에 따라 테두리 색상 변경
        ]}
        onPressIn={() => setIsPressed(true)} // 눌렀을 때 상태 변경
        onPressOut={() => setIsPressed(false)} // 뗐을 때 상태 원래대로
        onPress={goToMonitor}
      ></TouchableOpacity>
      <View style={styles.box_style}></View>
      <View style={styles.box_style}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  box_style: {
    height: 80, // 높이 설정
    borderRadius: 10, // 테두리 둥글기
    width: '93%', // 너비 설정
    backgroundColor: '#E0E0E0',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
});

export default GrowthManagement;
