import { StyleSheet, SafeAreaView } from 'react-native';
import MonitorHeader from '../src/MonitorHeader';
import Margin from '../src/Margin';
import MonitorDate from '../src/MonitorDate';
import MonitorCamera from '../src/MonitorCamera';
import MonitorDetail from '../src/MonitorDetail';

const MonitoringScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <MonitorHeader /> */}
      {/* <Margin height={15} /> */}
      <MonitorDate />
      <Margin height={20} />
      <MonitorCamera />
      <Margin height={20} />
      <MonitorDetail navigation={navigation} />
      <Margin height={20} />
      {/* <SensorTable />
      <Margin height={20} />
      <MonitorFooter /> */}
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

export default MonitoringScreen;
