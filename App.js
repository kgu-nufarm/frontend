import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './Screen/HomeScreen';
import MonitoringScreen from './Screen/MonitoringScreen';
import StatsServiceScreen from './Screen/StatsServiceScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <HomeScreen /> */}
      {/* <MonitoringScreen /> */}
      <StatsServiceScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
