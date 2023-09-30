import { NavigationContainer } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';

import { LoginScreen, SignupScreen } from '../screens';
import BottomTabNav from './BottomTabNav';
import { useEffect } from 'react';
import { autoLoginUsr } from '../store/actions/authAction';

const Stack = createNativeStackNavigator();
SplashScreen.preventAutoHideAsync();

const MainNavigation = () => {
  const dispatch = useDispatch()

  const { isLoggedIn, showSplashScreen } = useSelector(state => state.user)

  useEffect(() => {
    dispatch(autoLoginUsr())
  }, [])

  useEffect(() => {
    const hideSplashScreen = async () => await SplashScreen.hideAsync();
    if (!showSplashScreen) {
      hideSplashScreen();
    }
  }, [showSplashScreen])

  return (
    <NavigationContainer>
      {
        isLoggedIn ? <BottomTabNav /> : <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
        </Stack.Navigator>
      }

    </NavigationContainer>
  )
}

export default MainNavigation;