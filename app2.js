
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpPage from './SignUpPage';
import LoginPage from './LoginPage';
import forgotPaswordPage from './ForgotPaswordPage';
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      {/* <Button title="ke halaman Home" onPress={() => navigation.navigate('Home')} /> */}
      
      <Button title="ke halaman SignUp" onPress={() => navigation.navigate('SignUp')} />
      <Button title="ke halaman Login" onPress={() => navigation.navigate('Login')} />
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
        <Stack.Screen name="SignUp" component={SignUpPage} options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={LoginPage} options={{headerShown: false}}/>
        <Stack.Screen name="ForgotPasword" component={forgotPaswordPage}  options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;