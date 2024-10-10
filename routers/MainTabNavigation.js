import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';
import StoreScreen from '../Screen/StoreScreen';
import HomeScreen from '../Screen/HomeScreen';
import MyPageScreen from '../Screen/MyPageScreen';
const MainTabStack = createBottomTabNavigator();

const MainTabNavigation = () => {
  return (
    <MainTabStack.Navigator>
      <MainTabStack.Screen name="MainHome" component={HomeScreen} />
      <MainTabStack.Screen name="Store" component={StoreScreen} />
      <MainTabStack.Screen name="MyPage" component={MyPageScreen} />
    </MainTabStack.Navigator>
  );
};

export default MainTabNavigation;
