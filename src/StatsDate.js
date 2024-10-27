import React, { useState, useEffect, useCallback } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { DatePickerModal, registerTranslation, en } from 'react-native-paper-dates';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Entypo from '@expo/vector-icons/Entypo';

registerTranslation('en', en);
const StatsDate = ({ userDate, setUserDate }) => {
  const [date, setDate] = useState(undefined);
  const [open, setOpen] = React.useState(false);
  const [currentDateTime, setCurrentDateTime] = useState('');

  const onDismissSingle = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirmSingle = useCallback(
    (params) => {
      setOpen(false);
      setDate(params.date); // 기존 date 상태 업데이트
      setUserDate(formatDate(params.date)); // 사용자 선택 날짜 상태 업데이트
    },
    [setOpen, setDate, setUserDate]
  );

  useEffect(() => {
    const now = new Date();
    const year = now.getFullYear(); // 2024
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // 01 (0-based index, so +1)
    const day = now.getDate().toString().padStart(2, '0'); // 01
    const formattedDateTime = `${year}-${month}-${day}`;
    setCurrentDateTime(formattedDateTime);
  }, []);

  // 날짜 포맷팅 함수
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  return (
    <View
      style={{
        // backgroundColor: 'yellow',
        width: '100%',
        height: 60,
        justifyContent: 'center',
      }}
    >
      <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 180, marginTop: 10 }}>
        <Button onPress={() => setOpen(true)} uppercase={false}>
          <Text style={{ color: 'black', fontSize: 19 }}>조회 날짜 </Text>
          <Text style={{ color: 'black', fontSize: 19 }}>{userDate ? userDate : currentDateTime} </Text>
          <Entypo name="triangle-down" size={15} color="black" />
        </Button>

        <DatePickerModal
          locale="en"
          mode="single"
          visible={open}
          onDismiss={onDismissSingle}
          date={date}
          onConfirm={onConfirmSingle}
        />
      </View>
    </View>
  );
};

export default StatsDate;
