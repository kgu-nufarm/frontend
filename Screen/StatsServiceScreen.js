import { SafeAreaView, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import MonitorHeader from '../src/MonitorHeader';
import Margin from '../src/Margin';
import MonitorDate from '../src/MonitorDate';
import MonitorCamera from '../src/MonitorCamera';
import StatsDetail from '../src/StatsDetail';
import StatsDate from '../src/StatsDate';
import StatsCamera from '../src/StatsCamera';

const StatsServiceScreen = ({ navigation }) => {
  const [userDate, setUserDate] = useState(''); // 상위에서 상태 관리
  return (
    <SafeAreaView style={styles.container}>
      <MonitorHeader navigation={navigation} />
      <Margin height={15} />
      <View style={styles.statsDateContainer}>
        <StatsDate userDate={userDate} setUserDate={setUserDate} />
      </View>
      <Margin height={20} />
      <MonitorCamera />
      <Margin height={20} />
      <StatsDetail userDate={userDate} />
      <Margin height={20} />
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
  statsDateContainer: {
    width: '100%', // 전체 화면 너비를 사용
    alignItems: 'flex-end', // 오른쪽 정렬
    marginRight: 10,
  },
});

export default StatsServiceScreen;
