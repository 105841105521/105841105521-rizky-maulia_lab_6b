import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

//flex-start dan flex-end dan center
const App = () => {
  return (
    <View style={{ 
      flex: 1,
      justifyContent: 'center', 
      alignItems: 'center',
    }}>
      <View style={{
        width: 100,
        height: 100,
        backgroundColor: 'red',
        alignSelf: 'center',
      }}>
        <Text>App</Text>
      </View>
      <View style={{
        width: 100,
        height: 100,
        backgroundColor: 'blue',
        alignSelf: 'center',
      }}>
        <Text>App</Text>
      </View>
    </View>
  );
}

export default App;

//margin
//padding
