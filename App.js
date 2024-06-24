import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

// Custom component, ButtonCostum, textinput
const ButtonCostum = ({ text, color }) => {
  return (
    <View>
      <View style={{
        width: 250,
        height: 100,
        backgroundColor: color,
        borderRadius: 50,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Text style={{
          textAlign: 'center',
          color: 'white',
          fontSize: 30,
          fontWeight: 'bold',
        }}>
          {text}
        </Text>
      </View>
    </View>
  )
}

// Custom component, TextInputCustom
const TextInputCustom = ({ placeholder, color, typeKeyboard }) => {
  return (
    <TextInput
      keyboardType={typeKeyboard}
      placeholder={placeholder}
      style={{
        width: 250,
        height: 50,
        borderColor: color,
        borderWidth: 3,
        borderRadius: 10,
        marginBottom: 10,
        paddingLeft: 10,
      }}
    />
  )
}

export default function App() {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <ButtonCostum text="LOGIN" color="blue" />
      <ButtonCostum text="SIGN IN" color="red" />
      <ButtonCostum text="REGISTER" color="green" />
      <TextInputCustom placeholder="Masukkan Nama" color="pink" typeKeyboard="default" />
      <TextInputCustom placeholder="Masukkan no hp" color="pink" typeKeyboard="numeric" />
    </View>
  )
}
