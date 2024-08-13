import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Slider from '@react-native-community/slider';

function AirConditionerScreen() {
  const [sliderValue, setSliderValue] = useState(3); 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Air Conditioner</Text>
      <Text style={styles.subtitle}>You can set the temperature from here</Text>
      
      <View style={styles.temperatureContainer}>
        <Image source={require('./assets/TEMPERATUR.png')} style={styles.circle} />
      </View>

      <Text style={styles.deviceName}>Samsung SK7654</Text>
      <View style={styles.powerContainer}>
        <Image source={require('./assets/POWER1.png')} style={styles.icon} />
        <Text style={styles.power}>540 Watt</Text>
      </View>

      <View style={styles.speedContainer}>
        <Text style={styles.speedLabel}>Speed :</Text>
        <TouchableOpacity style={styles.speedButton}>
          <Text style={styles.speedText}>1x</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.speedButton, styles.speedButtonActive]}>
          <Text style={styles.speedText}>2x</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.speedButton}>
          <Text style={styles.speedText}>3x</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.timerContainer}>
        <Text style={styles.timerLabel}>Add Timer</Text>
        <Slider
          style={styles.slider}
          minimumValue={1}
          maximumValue={12}
          step={1}
          value={sliderValue}
          onValueChange={setSliderValue}
          minimumTrackTintColor="#FFC107"
          maximumTrackTintColor="#6B6B6B"
          thumbTintColor="#FFC107"
        />
        <View style={styles.timerLabels}>
          <Text style={styles.timerText}>1h</Text>
          <Text style={styles.timerText}>3h</Text>
          <Text style={styles.timerText}>6h</Text>
          <Text style={styles.timerText}>9h</Text>
          <Text style={styles.timerText}>12h</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.powerButton}>
        <Image source={require('./assets/on.png')} style={styles.powerButtonImage} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0C0C0E',
    padding: 20,
  },
  title: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: '#A0A0A0',
    marginVertical: 10,
  },
  temperatureContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  circle: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  deviceName: {
    fontSize: 18,
    color: 'white',
    marginBottom: 10,
  },
  powerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    width: 70,
    height: 70,
    marginRight: 10,
  },
  power: {
    fontSize: 14,
    color: '#A0A0A0',
  },
  speedContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  speedLabel: {
    fontSize: 14,
    color: 'white',
    marginRight: 10,
  },
  speedButton: {
    backgroundColor: '#1E1E1E',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  speedButtonActive: {
    backgroundColor: '#43A047',
  },
  speedText: {
    color: 'white',
  },
  timerContainer: {
    marginBottom: 20,
  },
  timerLabel: {
    fontSize: 14,
    color: 'white',
    marginBottom: 10,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  timerLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timerText: {
    color: '#A0A0A0',
  },
  powerButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  powerButtonImage: {
    width: 100, 
    height: 50, 
    resizeMode: 'contain',
  },
});

export default AirConditionerScreen;
