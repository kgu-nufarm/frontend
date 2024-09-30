import { SafeAreaView, StyleSheet } from 'react-native';

import Margin from '../Home/src/Margin';
import Search from '../Home/src/Search';
import UserPlantList from '../Home/src/UserPlantList';
import FooterBar from '../Home/src/FooterBar';
import Header from '../Home/src/Header';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Margin height={40} />
      <Header />
      <Margin height={5} />
      <Search />
      <Margin height={20} />
      <UserPlantList />
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
