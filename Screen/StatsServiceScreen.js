import { SafeAreaView, StyleSheet } from 'react-native';
import MonitorHeader from '../src/MonitorHeader';
import Margin from '../src/Margin';
import MonitorDate from '../src/MonitorDate';
import MonitorCamera from '../src/MonitorCamera';
import StatsDetail from '../src/StatsDetail';
import StatsDate from '../src/StatsDate';

const StatsServiceScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <MonitorHeader />
      <Margin height={15} /> */}
      <MonitorDate />
      <Margin height={20} />
      <MonitorCamera />
      <Margin height={20} />
      <StatsDetail />
      <Margin height={20} />
      {/* <StatsDate /> */}
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

export default StatsServiceScreen;
