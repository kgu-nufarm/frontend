// src/screens/LoginScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setTokens } from '../src/authSlice';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        'http://3.34.153.235:8080/api/auth/login',
        {
          email,
          password,
        },
        {
          headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            accept: 'application/json;charset=UTF-8',
          },
        }
      );

      if (response.data.status === 'success') {
        const { accessToken, refreshToken } = response.data.data;
        dispatch(setTokens({ accessToken, refreshToken }));
        console.log(accessToken);
        // 토큰을 Redux에 저장
        dispatch(setTokens({ accessToken, refreshToken }));
      } else {
        setError('Login failed');
      }
    } catch (error) {
      setError('Login failed');
      console.error(error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View>
        <Text style={{ fontSize: 80, fontWeight: 'bold', color: '#269B00', marginBottom: 70 }}>nufarm</Text>
      </View>
      <View style={{ width: '80%', marginBottom: 30 }}>
        <TextInput
          placeholder="아이디(이메일)"
          value={email}
          onChangeText={setEmail}
          style={styles.inputBox}
          placeholderTextColor="#FFFFFF"
        />
        <TextInput
          placeholder="비밀번호"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.inputBox}
          placeholderTextColor="#FFFFFF"
          onSubmitEditing={handleLogin}
        />
        {error && <Text style={{ color: 'red' }}>{error}</Text>}
        {/* <Button title="Login" onPress={handleLogin} /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputBox: {
    margin: 10,
    height: 50,
    textAlign: 'center',
    backgroundColor: '#D9D9D980',
    borderRadius: 30,
  },
});
