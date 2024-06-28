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

export default function SignUp() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign up</Text>
      <TextInputCustom placeholder="Name" color="gray" typeKeyboard="default" />
      <TextInputCustom placeholder="Email" color="gray" typeKeyboard="email-address" />
      <TextInputCustom placeholder="Password" color="gray" typeKeyboard="default" secureTextEntry={true} />
      <ButtonCustom text="SIGN UP" color="red" onPress={() => {}} />
      <Text style={styles.signInText}>Already have an account?</Text>
      <Text style={styles.orText}>Or sign up with social account</Text>
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
  signInText: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 10,
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
