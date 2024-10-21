import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import StoreHeader from '../src/StoreHeader';
import StoreDetail from '../src/StoreDetail';

const StoreScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StoreHeader />
      <StoreDetail navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default StoreScreen;
