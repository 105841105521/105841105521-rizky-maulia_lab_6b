// LoginPage.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import { useFonts } from 'expo-font';

const TextInputCustom = ({ placeholder, color, typeKeyboard, secureTextEntry }) => {
  return (
    <TextInput
      keyboardType={typeKeyboard}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      style={[styles.textInput, { borderColor: color, fontFamily: 'Metro-Medium' }]}
    />
  );
};

const ButtonCustom = ({ text, color, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, { backgroundColor: color }]}>
      <Text style={[styles.buttonText, { fontFamily: 'Metro-Medium' }]}>{text}</Text>
    </TouchableOpacity>
  );
};

function LoginPage({ navigation }) {
  const [fontsLoaded] = useFonts({
    'Metro-Black': require('./assets/fonts/Metropolis-Black.otf'),
    'Metro-Bold': require('./assets/fonts/Metropolis-Bold.otf'),
    'Metro-Light': require('./assets/fonts/Metropolis-Light.otf'),
    'Metro-SemiBold': require('./assets/fonts/Metropolis-SemiBold.otf'),
    'Metro-Medium': require('./assets/fonts/Metropolis-Medium.otf'),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { fontFamily: 'Metro-Bold' }]}>Login</Text>
      <TextInputCustom placeholder="Email" color="gray" typeKeyboard="email-address" />
      <TextInputCustom placeholder="Password" color="gray" typeKeyboard="default" secureTextEntry={true} />
      <ButtonCustom text="LOGIN" color="red" onPress={() => navigation.navigate('Main')} />
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={[styles.forgotPasswordText, { fontFamily: 'Metro-Medium' }]}>ForgotPassword?</Text>
      </TouchableOpacity>
      <Text style={[styles.orText, { fontFamily: 'Metro-Medium' }]}>Or login with social account</Text>
      <View style={styles.socialContainer}>
        <TouchableOpacity onPress={() => {}}>
          <Image source={require('./assets/google.jpeg')} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Image source={require('./assets/Facebook.jpeg')} style={styles.socialIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    marginBottom: 20,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '100%',
  },
  button: {
    padding: 10,
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  forgotPasswordText: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
  },
  orText: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
  },
  socialContainer: {
    flexDirection: 'row',
  },
  socialIcon: {
    width: 50,
    height: 50,
    marginHorizontal: 10,
  },
});

export default LoginPage;
