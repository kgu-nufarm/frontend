import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './routers/StackNavigation';
import LoginScreen from './Screen/LoginScreen';
import { Provider, useSelector } from 'react-redux';
import store from './src/store';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* <StackNavigation /> */}
        <MainNavigator />
      </NavigationContainer>
    </Provider>
  );
}

// 메인 네비게이터 (로그인 여부에 따라 화면 전환)
function MainNavigator() {
  // Redux에서 토큰 상태를 가져옴
  const accessToken = useSelector((state) => state.auth.accessToken);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* accessToken이 있을 경우 StackNavigation, 없을 경우 LoginScreen 렌더링 */}
      {accessToken ? <StackNavigation /> : <LoginScreen />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
