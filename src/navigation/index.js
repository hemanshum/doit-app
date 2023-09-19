import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen, LoginScreen, SignupScreen } from '../screens';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {

  const { isLoggedIn } = useSelector(state => state.user)


  return (
    <NavigationContainer>
      {
        isLoggedIn ? <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator> : <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
        </Stack.Navigator>
      }

    </NavigationContainer>
  )
}

export default MainNavigation;