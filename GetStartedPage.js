import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

// slider image 3 gambar
const images = [
  require('./assets/icon1.png'),
  require('./assets/icon2.png'),
  require('./assets/TEMPERATUR.png')
];

export default function GetStartedPage({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.imageSlider}
      >
        {images.map((image, index) => (
          <TouchableOpacity
            key={index}
            style={styles.imageContainer}
            onPress={() => {
              if (index === 1) {
                navigation.navigate('DeviceControl');
              } else if (index === 2) {
                navigation.navigate('AirConditioner');
              }
            }}
          >
            <Image source={image} style={styles.image} />
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={styles.dotsContainer}>
        <View style={styles.dotActive} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>
      <Text style={styles.title}>Manage your smart device from mobile</Text>
      <Text style={styles.description}>You can more easily control smart devices in your home.</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('DeviceControl')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 50, 
    backgroundColor: '#1E1F28',
  },
  imageSlider: {
    width,
    height: 300, 
  },
  imageContainer: {
    width,
    height: 500, 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  dotsContainer: {
    flexDirection: 'row',
    marginVertical: 20, 
  },
  dotActive: {
    width: 12, 
    height: 12, 
    borderRadius: 6, 
    backgroundColor: '#FFD700',
    marginHorizontal: 5,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 5,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 20, 
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 15, 
  },
  description: {
    color: '#B0B0B0',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20, 
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginTop: 20, 
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
