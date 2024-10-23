import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MonitoringScreen from '../Screen/MonitoringScreen';
import StatsServiceScreen from '../Screen/StatsServiceScreen';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const TabStack = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <TabStack.Navigator
      screenOptions={{
        headerShown: false, // 헤더 숨김 설정
        tabBarStyle: {
          height: 70,
          flexDirection: 'row', // 탭 버튼을 가로로 배치
        },
      }}
    >
      {/* 실시간 모니터링 탭 */}
      <TabStack.Screen
        name="MonitorScreen"
        component={MonitoringScreen}
        options={{
          tabBarLabel: () => null, // 기본 라벨 숨김
          tabBarButton: (props) => (
            <TouchableOpacity
              {...props}
              style={[
                styles.tabButton,
                props.accessibilityState.selected && styles.activeTab, // 선택된 상태일 때 스타일 적용
              ]}
            >
              <Text
                style={[styles.tabLabel, props.accessibilityState.selected ? styles.activeLabel : styles.inactiveLabel]}
              >
                실시간 모니터링
              </Text>
            </TouchableOpacity>
          ),
        }}
      />

      {/* 통계 서비스 탭 */}
      <TabStack.Screen
        name="Stats"
        component={StatsServiceScreen}
        options={{
          tabBarLabel: () => null, // 기본 라벨 숨김
          tabBarButton: (props) => (
            <TouchableOpacity
              {...props}
              style={[
                styles.tabButton,
                props.accessibilityState.selected && styles.activeTab, // 선택된 상태일 때 스타일 적용
              ]}
            >
              <Text
                style={[styles.tabLabel, props.accessibilityState.selected ? styles.activeLabel : styles.inactiveLabel]}
              >
                통계 서비스
              </Text>
            </TouchableOpacity>
          ),
        }}
      />
    </TabStack.Navigator>
  );
};

const styles = StyleSheet.create({
  tabButton: {
    flex: 1, // 버튼을 탭바의 반씩 차지하도록 설정
    justifyContent: 'center', // 수직 가운데 정렬
    alignItems: 'center', // 수평 가운데 정렬
    height: '100%', // 탭바의 전체 높이를 차지하도록 설정
  },
  activeTab: {
    backgroundColor: '#269B00', // 선택된 탭 배경색
  },
  inactiveLabel: {
    color: '#269B00', // 선택되지 않은 탭 텍스트 색상
  },
  activeLabel: {
    color: '#fff', // 선택된 탭 텍스트 색상
  },
  tabLabel: {
    fontSize: 18,
  },
});

export default TabNavigation;
