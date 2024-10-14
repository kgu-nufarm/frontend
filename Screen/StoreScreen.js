import React, { useState, useEffect, useCallback } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { DatePickerModal, registerTranslation, en } from 'react-native-paper-dates';
import { SafeAreaProvider } from 'react-native-safe-area-context';

registerTranslation('en', en);

const StoreScreen = () => {
  const [date, setDate] = useState(undefined);
  const [open, setOpen] = React.useState(false);
  const [currentDateTime, setCurrentDateTime] = useState('');
  const [userDate, setUserDate] = useState(''); // 사용자 선택 날짜 상태

  const onDismissSingle = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirmSingle = useCallback(
    (params) => {
      setOpen(false);
      setDate(params.date); // 기존 date 상태 업데이트
      setUserDate(formatDate(params.date)); // 사용자 선택 날짜 상태 업데이트
    },
    [setOpen, setDate]
  );

  useEffect(() => {
    const now = new Date();
    const year = now.getFullYear(); // 2024
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // 01 (0-based index, so +1)
    const day = now.getDate().toString().padStart(2, '0'); // 01
    const formattedDateTime = `${year}년 ${month}월 ${day}일 `;
    setCurrentDateTime(formattedDateTime);
  }, []);

  // 날짜 포맷팅 함수
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}년 ${month}월 ${day}일`;
  };

  return (
    <SafeAreaProvider>
      <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
        <Button onPress={() => setOpen(true)} uppercase={false}>
          {currentDateTime}
          <Text> 날짜를 선택하세요</Text>
        </Button>
        <DatePickerModal
          locale="en"
          mode="single"
          visible={open}
          onDismiss={onDismissSingle}
          date={date}
          onConfirm={onConfirmSingle}
        />
        {/* 선택한 날짜 표시 */}
        {userDate && <Text>선택한 날짜: {userDate}</Text>}
      </View>
    </SafeAreaProvider>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

export default StoreScreen;
