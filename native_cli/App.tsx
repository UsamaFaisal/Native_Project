import * as React from 'react';
import { View, Text , Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navigator from './controllers/Navigator';

// const Stack = createNativeStackNavigator();

function App() {
  return (
    <Navigator/>
  );
}

export default App;