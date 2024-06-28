import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

// Komponen kustom, ButtonCustom
const ButtonCustom = ({ text, color, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, { backgroundColor: color }]}>
      <Text style={styles.buttonText}>{text}</Text>
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
      style={[styles.textInput, { borderColor: color }]}
    />
  );
};

export default function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInputCustom placeholder="Email" color="gray" typeKeyboard="email-address" />
      <TextInputCustom placeholder="Password" color="gray" typeKeyboard="default" secureTextEntry={true} />
      <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
      <ButtonCustom text="LOGIN" color="red" onPress={() => {}} />
      <Text style={styles.orText}>Or login with social account</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  textInput: {
    width: 300,
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    paddingLeft: 10,
  },
  forgotPasswordText: {
    alignSelf: 'flex-center',
    marginRight: 30,
    marginBottom: 20,
    color: 'gray',
  },
  button: {
    width: 300,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  orText: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 150,
  },
  socialIcon: {
    width: 50,
    height: 50,
    marginHorizontal: 10,
  },
});