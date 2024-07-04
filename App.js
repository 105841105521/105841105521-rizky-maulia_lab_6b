// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import forgotPaswordPage from './ForgotPaswordPage';
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      {/* <Button title="ke halaman Home" onPress={() => navigation.navigate('Home')} /> */}
      <Button title="ke halaman Login" onPress={() => navigation.navigate('Login')} />
      <Button title="ke halaman SignUp" onPress={() => navigation.navigate('SignUp')} />
      <Button title="ke halaman forgot password" onPress={() => navigation.navigate('ForgotPasword')} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Home" component={HomeScreen}  /> */}
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="SignUp" component={SignUpPage} />
        <Stack.Screen name="ForgotPasword" component={forgotPaswordPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;