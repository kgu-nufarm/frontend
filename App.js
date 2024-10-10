import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './Screen/HomeScreen';
import MonitoringScreen from './Screen/MonitoringScreen';
import StatsServiceScreen from './Screen/StatsServiceScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StackNavigation from './routers/StackNavigation';
import TabNavigation from './routers/TabNavigation';
import GrowthDeatil from './src/GrowthDetail';

export default function App() {
  return (
    // <SafeAreaView style={styles.container}>
    <>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
      {/* <GrowthDeatil /> */}
    </>
    //   {/* <HomeScreen />
    // <MonitoringScreen />
    // <StatsServiceScreen />
    // </SafeAreaView> */}
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
