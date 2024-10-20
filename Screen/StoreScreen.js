import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { DatePickerModal, registerTranslation, en } from 'react-native-paper-dates';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Entypo from '@expo/vector-icons/Entypo';
import axios from 'axios';
import { TouchableOpacity } from 'react-native';

registerTranslation('en', en);

const StoreScreen = () => {
  return <View></View>;
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});

export default StoreScreen;
