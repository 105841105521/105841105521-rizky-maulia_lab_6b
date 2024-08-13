import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DeviceControlScreen from './DeviceControlScreen';
import AirConditionerScreen from './AirConditionerScreen';
import GetStartedPage from './GetStartedPage';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GetStarted">
        <Stack.Screen 
          name="GetStarted" 
          component={GetStartedPage} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="DeviceControl" 
          component={DeviceControlScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="AirConditioner" 
          component={AirConditionerScreen} 
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
