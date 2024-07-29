import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function BagScreen() {
  return (
    <View style={styles.container}>
      <Text>Bag Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default BagScreen;
