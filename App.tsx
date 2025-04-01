import React from 'react';
import './gesture-handler';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigation } from './navigation/StackNavigation';


const App: React.FC = () => {
  return (

    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
};
export default App;