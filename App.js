import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

export default function App() {
  const [dapatfont] = useFonts({
    'Metro-Black': require('./assets/fonts/Metropolis-Black.otf'),
    'Metro-Bold': require('./assets/fonts/Metropolis-Bold.otf'),
    'Metro-Light': require('./assets/fonts/Metropolis-Light.otf'),
    'Metro-SemiBold': require('./assets/fonts/Metropolis-SemiBold.otf'),
  });

  if (!dapatfont) {
    return <Text>tidak ditemukan...</Text>;
  }

  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <View style={styles.container}>
        <Text style={{ fontFamily: 'Metro-Black' }}>
          Font Metropolis Black
        </Text>
        <Text style={{ fontFamily: 'Metro-Bold' }}>
          Font Metropolis Bold
        </Text>
        <Text style={{ fontFamily: 'Metro-Light' }}>
          Font Metropolis Light
        </Text>
        <Text style={{ fontFamily: 'Metro-SemiBold' }}>
          Font Metropolis SemiBold
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
