import React from 'react';
import './gesture-handler';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigation } from './navigation/StackNavigation';
import { useColorScheme } from 'react-native';

const App: React.FC = () => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? eva.dark : eva.light;

  return (
    <ApplicationProvider {...eva} theme={theme}>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </ApplicationProvider>
  );
};

export default App;