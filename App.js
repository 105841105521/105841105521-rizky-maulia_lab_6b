import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//sign in, sign up, tombol
const App = () => {
  return (
    <View style ={{ flex: 1, flexDirection: "column", justifyContent:"center", alignItems: "center" }}>
      <View style={ styles.boxBlue}>
        <Text style={styles.text}>LOGIN</Text>
      </View>

      <View style={styles.boxGray}>
        <Text style={styles.text}>REGISTER</Text>
      </View>
    </View>
  );
}

//gaya tombol, size, dan jarak
const styles = StyleSheet.create({
  boxBlue: {
    width:130,
    height: 50,
    backgroundColor: "#4A90E2",
    borderRadius: 30,
    marginBottom: 20, 
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  boxGray: {
    width: 130,
    height: 50,
    backgroundColor: "#7f8C8D",
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
})

export default App;
