import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const MonitorDate = () => {
  const [currentDateTime, setCurrentDateTime] = useState('');

  useEffect(() => {
    const now = new Date();

    const year = now.getFullYear(); // 2024
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // 01 (0-based index, so +1)
    const day = now.getDate().toString().padStart(2, '0'); // 01
    const hours = now.getHours().toString().padStart(2, '0'); // 16
    const minutes = now.getMinutes().toString().padStart(2, '0'); // 00

    // '2024년 10월 01일 16:00' 형식으로 포맷팅
    const formattedDateTime = `${year}년 ${month}월 ${day}일 ${hours}:${minutes}`;

    setCurrentDateTime(formattedDateTime);
  }, []);
  return (
    <View
      style={{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'blue',
      }}
    >
      <Text>{currentDateTime}</Text>
    </View>
  );
};

export default MonitorDate;
