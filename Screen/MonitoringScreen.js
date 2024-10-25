import { StyleSheet, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import MonitorHeader from '../src/MonitorHeader';
import Margin from '../src/Margin';
import MonitorDate from '../src/MonitorDate';
import MonitorCamera from '../src/MonitorCamera';
import MonitorDetail from '../src/MonitorDetail';
import StatsCamera from '../src/StatsCamera';

const MonitoringScreen = ({ navigation }) => {
  const [sensor, setSensor] = useState(1);
  const [growth, setGrowth] = useState(0);
  const [anomaly, setAnomaly] = useState(0);
  return (
    <SafeAreaView style={styles.container}>
      <MonitorHeader navigation={navigation} />
      <Margin height={15} />
      <MonitorDate />
      <Margin height={20} />
      {sensor === 1 || growth === 1 ? <MonitorCamera /> : null}
      {anomaly === 1 ? <StatsCamera /> : null}
      <Margin height={30} />
      <MonitorDetail
        navigation={navigation}
        sensor={sensor}
        setSensor={setSensor}
        growth={growth}
        setGrowth={setGrowth}
        anomaly={anomaly}
        setAnomaly={setAnomaly}
      />
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
