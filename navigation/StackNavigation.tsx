import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen';
import { HomeScreen } from '../screens/HomeScreen';


export type RootStackParams= {
  Login: undefined;
  Home: undefined;
}

const Stack = createStackNavigator();
export const StackNavigation = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Home" component={HomeScreen} />
  </Stack.Navigator>
  )
}
