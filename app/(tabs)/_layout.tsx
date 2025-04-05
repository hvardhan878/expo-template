import { Tabs } from 'expo-router';
import { Chrome as Home } from 'lucide-react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: '#007AFF',
        headerStyle: styles.header,
        headerTitleStyle: styles.headerTitle,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Von',
          tabBarIcon: ({ size, color }) => <Home size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}

const styles = {
  tabBar: {
    backgroundColor: '#FFFFFF',
    borderTopColor: '#E5E5EA',
  },
  header: {
    backgroundColor: '#FFFFFF',
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: '600' as const,
  },
};