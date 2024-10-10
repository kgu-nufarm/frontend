import { SafeAreaView, StyleSheet } from 'react-native';

import Margin from '../src/Margin';
import Search from '../src/Search';
import UserPlantList from '../src/UserPlantList';
import FooterBar from '../src/FooterBar';
import Header from '../src/Header';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Margin height={40} /> */}
      {/* <Header /> */}
      <Margin height={5} />
      <Search />
      <Margin height={20} />
      <UserPlantList navigation={navigation} />
      <Margin height={20} />
      <FooterBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
