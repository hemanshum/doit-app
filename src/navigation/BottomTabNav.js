import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AddTaskScreen, HomeScreen, ProfileScreen } from '../screens';
import { Feather } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        tabBarStyle: {
          position: 'absolute',
          bottom: 10,
          marginHorizontal: 60,
          borderRadius: 100,
          height: 60,
          backgroundColor: '#EADDFF'
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#6B4FA9',
        tabBarInactiveTintColor: '#CFBCFF'
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="home" size={size} color={color} />
        }}
      />
      <Tab.Screen
        name="AddTask"
        component={AddTaskScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="feather" size={size} color={color} />
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="user" size={size} color={color} />
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNav;