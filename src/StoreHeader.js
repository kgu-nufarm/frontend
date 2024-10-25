import { Text, View, StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

const StoreHeader = () => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.text}>스토어</Text>
        <AntDesign name="shoppingcart" size={24} color="#269B00" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    // backgroundColor: 'yellow',
  },
  text: {
    marginRight: 280, // 텍스트와 아이콘 사이의 거리 설정
    fontSize: 20,
  },
});

export default StoreHeader;
