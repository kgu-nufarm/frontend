import { createStackNavigator } from '@react-navigation/stack';
import MonitoringScreen from '../Screen/MonitoringScreen';
import HomeScreen from '../Screen/HomeScreen';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Text, View, Dimensions, SafeAreaView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabNavigation from './TabNavigation';
import GrowthDeatil from '../src/GrowthDetail';
import MainTabNavigation from './MainTabNavigation';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={MainTabNavigation}
        options={{
          headerTitleAlign: 'center',
          headerStyle: {
            height: 100, // 헤더 높이를 원하는 값으로 조정
          },
          headerLeft: () => (
            <View>
              <MaterialCommunityIcons name="bell-outline" size={25} color="#269B00" style={{ marginLeft: 15 }} />
            </View>
          ),
          headerTitle: () => (
            <View>
              <Text style={{ fontSize: 26, fontWeight: 'bold', color: '#269B00' }}>nufarm</Text>
            </View>
          ),
          headerRight: () => (
            <View>
              <Ionicons
                name="reorder-three-outline"
                size={25}
                color="#269B00"
                style={{ marginTop: 5, marginRight: 15 }}
              />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="Monitor"
        component={TabNavigation}
        options={({ navigation }) => ({
          headerLeft: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Ionicons
                name="arrow-back-outline"
                size={25}
                color="#269B00"
                style={{ marginLeft: 15 }}
                onPress={() => navigation.goBack()} // 뒤로가기 동작
              />
            </View>
          ),
          headerRight: () => (
            <View>
              <Ionicons
                name="reorder-three-outline"
                size={25}
                color="#269B00"
                style={{ marginTop: 5, marginRight: 20 }}
              />
            </View>
          ),
        })}
      />
      <Stack.Screen name="Growth_Detail" component={GrowthDeatil} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
