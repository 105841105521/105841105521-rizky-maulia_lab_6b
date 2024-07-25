import React from 'react';
import { View, Text, Button, Image, TouchableOpacity, StyleSheet } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
      />
      <TouchableOpacity
        style={styles.profileIconContainer}
        onPress={() => navigation.navigate('Profile')}
      >
        <Image
          source={require('./assets/profil-inactive.png')} 
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  profileIconContainer: {
    position: 'absolute',
    top: 40, 
    right: 20, 
  },
  profileIcon: {
    width: 40,
    height: 40,
  },
});

export default HomeScreen;
