import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MonitoringScreen from '../Screen/MonitoringScreen';
import StatsServiceScreen from '../Screen/StatsServiceScreen';

const TabStack = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <TabStack.Navigator screenOptions={({ route }) => ({ headerShown: false })}>
      <TabStack.Screen name="MonitorScreen" component={MonitoringScreen} />
      <TabStack.Screen name="Stats" component={StatsServiceScreen} />
    </TabStack.Navigator>
  );
};

export default TabNavigation;
