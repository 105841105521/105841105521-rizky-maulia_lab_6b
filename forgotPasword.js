import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font'; 

// Komponen kustom, ButtonCustom
const ButtonCustom = ({ text, color, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, { backgroundColor: color }]}>
      <Text style={[styles.buttonText, { fontFamily: 'Metro-Medium' }]}>{text}</Text>
    </TouchableOpacity>
  );
};

// Komponen kustom, TextInputCustom
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

export default function forgotPasword() {
  const [dapatFont] = useFonts({
    'Metro-Black': require('./assets/fonts/Metropolis-Black.otf'),
    'Metro-Bold': require('./assets/fonts/Metropolis-Bold.otf'),
    'Metro-Light': require('./assets/fonts/Metropolis-Light.otf'),
    'Metro-SemiBold': require('./assets/fonts/Metropolis-SemiBold.otf'),
    'Metro-Medium': require('./assets/fonts/Metropolis-Medium.otf'),
  });

  if (!dapatFont) {
    return <Text></Text>; 
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { fontFamily: 'Metro-Bold' }]}>Forgot Password</Text>
      <Text style={[styles.instruction, { fontFamily: 'Metro-Medium' }]}>
        Please, enter your email address. You will receive a link to create a new password via email.
      </Text>
      <TextInputCustom placeholder="Email" color="gray" typeKeyboard="email-address" />
      <Text style={[styles.errorText, { fontFamily: 'Metro-Medium' }]}>
        Not a valid email address. Should be your@email.com
      </Text>
      <ButtonCustom text="SEND" color="red" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: 'white', 
    paddingHorizontal: 20, 
  },
  title: {
    fontSize: 30, 
    marginBottom: 20, 
  },
  instruction: {
    fontSize: 14, 
    color: 'gray', 
    textAlign: 'center', 
    marginBottom: 20, 
  },
  textInput: {
    width: 300, 
    height: 50, 
    borderWidth: 1, 
    borderRadius: 10, 
    marginBottom: 10, 
    paddingLeft: 10, 
  },
  errorText: {
    color: 'red', 
    marginBottom: 20, 
    textAlign: 'center', 
  },
  button: {
    width: 300, 
    height: 50, 
    borderRadius: 10, 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginTop: 15, 
  },
  buttonText: {
    color: 'white', 
    fontSize: 18, 
    fontWeight: 'bold', 
  },
});
