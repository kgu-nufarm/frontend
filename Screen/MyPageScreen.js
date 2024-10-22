import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, Alert } from 'react-native';
import axios from 'axios';

const MyPageScreen = () => {
  // const [isDetected, setIsDetected] = useState(false);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     axios
  //       .get('http://172.20.10.2:5000/status') // Flask 서버 IP로 변경하세요.
  //       .then((response) => {
  //         setIsDetected(response.data.detected);
  //         console.log(response.data);
  //       })
  //       .catch((error) => {
  //         console.error('Error fetching detection status:', error);
  //       });
  //   }, 1000); // 1초마다 상태 확인

  //   // 컴포넌트가 언마운트될 때 인터벌 정리
  //   return () => clearInterval(interval);
  // }, []);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  // const handleSignup = async () => {
  //   const url = 'http://3.34.153.235:8080/api/auth/signup';
  //   const data = {
  //     email: email,
  //     password: password,
  //     username: username,
  //   };

  //   try {
  //     const response = await fetch(url, {
  //       method: 'POST',
  //       headers: {
  //         Accept: 'application/json;charset=UTF-8',
  //         'Content-Type': 'application/json;charset=UTF-8',
  //       },
  //       body: JSON.stringify(data),
  //     });

  //     const result = await response.json();

  //     if (response.ok) {
  //       Alert.alert('Signup successful!', `Welcome, ${result.username}`);
  //     } else {
  //       Alert.alert('Signup failed', result.message || 'Something went wrong');
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     Alert.alert('Network error', 'Please try again later');
  //   }
  // };
  return (
    <View style={styles.container}>
      {/* <View style={[styles.icon, isDetected ? styles.active : styles.inactive]} />
      <Text>{isDetected ? '감지됨' : '감지되지 않음'}</Text> */}
      {/* <View>
        <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
        <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
        <TextInput placeholder="Username" value={username} onChangeText={setUsername} />
        <Button title="Sign Up" onPress={handleSignup} />
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  icon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginBottom: 5,
    backgroundColor: 'grey', // 기본 색상
  },
  active: {
    backgroundColor: 'green', // 감지되었을 때 색상
  },
  inactive: {
    backgroundColor: 'red', // 감지되지 않았을 때 색상
  },
});

export default MyPageScreen;
