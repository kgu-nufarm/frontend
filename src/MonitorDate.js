import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const MonitorDate = () => {
  const [currentDateTime, setCurrentDateTime] = useState('');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();

      const year = now.getFullYear(); // 2024
      const month = (now.getMonth() + 1).toString().padStart(2, '0'); // 01 (0-based index, so +1)
      const day = now.getDate().toString().padStart(2, '0'); // 01
      const hours = now.getHours().toString().padStart(2, '0'); // 16
      const minutes = now.getMinutes().toString().padStart(2, '0'); // 00

      // '2024년 10월 01일 16:00' 형식으로 포맷팅
      const formattedDateTime = `${year}년 ${month}월 ${day}일 ${hours}:${minutes}`;

      setCurrentDateTime(formattedDateTime);
    };

    // 시간 업데이트 함수 호출 및 인터벌 설정 (1분마다 업데이트)
    updateDateTime();
    const intervalId = setInterval(updateDateTime, 10000); // 60000ms = 1분

    return () => clearInterval(intervalId); // 컴포넌트 언마운트 시 인터벌 해제
  }, []);

  return (
    <View
      style={{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={{ fontSize: 17 }}>{currentDateTime}</Text>
    </View>
  );
};

export default MonitorDate;
