import { StyleSheet, TouchableOpacity, View } from 'react-native';

const GrowthManagement = (props) => {
  const goToMonitor = (e) => {
    props.navigation.navigate('Growth_Detail');
  };
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity style={styles.box_style} onPress={goToMonitor}></TouchableOpacity>
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
