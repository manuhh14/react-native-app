import React from 'react';
import './gesture-handler';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigation } from './navigation/StackNavigation';
import { useColorScheme } from 'react-native';


const App: React.FC = () => {

  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? eva.dark : eva.light;

  return (
    <ApplicationProvider {...eva} theme={eva.light}>

      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </ApplicationProvider>
  );
};
export default App;