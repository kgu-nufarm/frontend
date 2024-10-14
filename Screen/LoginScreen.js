// src/screens/LoginScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
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
        'http://192.168.137.237:8123/api/auth/login',
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
    <SafeAreaView>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={{ borderWidth: 1, margin: 10 }} />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ borderWidth: 1, margin: 10 }}
      />
      {error && <Text style={{ color: 'red' }}>{error}</Text>}
      <Button title="Login" onPress={handleLogin} />
    </SafeAreaView>
  );
}
