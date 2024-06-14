import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

//flex-start dan flex-end dan center
const App = () => {
  return (
    <View style={{ 
      flex: 1,
      justifyContent: 'space-between', 
      alignItems: 'flext-start',
    }}>
      <View style={{
        width: 100,
        height: 100,
        backgroundColor: 'red',
        alignSelf: 'flex-start',
      }}>
        <Text>App</Text>
      </View>
      <View style={{
        width: 100,
        height: 100,
        backgroundColor: 'blue',
        alignSelf: 'flex-end',
      }}>
        <Text>App</Text>
      </View>
    </View>
  );
}

export default App;
