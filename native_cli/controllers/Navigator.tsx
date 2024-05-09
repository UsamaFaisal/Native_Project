import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../Screens/SplashScreen';
import RegisterPage from '../Screens/RegisterPage';
import LoginPage from '../Screens/LoginPage';
const Stack = createNativeStackNavigator();

const Navigator: React.FC = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="RegisterPage" component={RegisterPage} options={{ headerShown: false }}/>
      <Stack.Screen name="LoginPage" component={LoginPage} options={{ headerShown: false }}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default Navigator;
