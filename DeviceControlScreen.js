import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Switch } from 'react-native';

function DeviceControlScreen({ navigation }) {
  const [devices, setDevices] = useState({
    airConditioner: true,
    smartTV: false,
    router: false,
    smartLamp: false,
  });

  const toggleDevice = (device) => {
    setDevices({ ...devices, [device]: !devices[device] });
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Hello, Rizky Maulia 👋</Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Weather Container */}
      <View style={styles.weatherContainer}>
        <Image
          source={require('./assets/icon2.png')} 
          style={styles.weatherIcon}
        />
        <View>
          <Text style={styles.temperature}>31°</Text>
          <Text style={styles.weatherText}>A sunny disposition is worth more than a fortune</Text>
          <Text style={styles.location}>
            <Image source={require('./assets/lokasi.png')} style={styles.locationIcon} /> 
            Makassar, Talasalapang 2
          </Text>
        </View>
      </View>

      {/* Devices Container */}
      <ScrollView style={styles.devicesContainer}>
        <View style={styles.deviceGrid}>
          <TouchableOpacity 
            style={[
              styles.deviceCard, 
              devices.airConditioner ? styles.deviceCardActive : null
            ]}
            onPress={() => {
              toggleDevice('airConditioner');
              navigation.navigate('AirConditioner');
            }}
          >
            <Image source={require('./assets/ac.png')} style={styles.deviceIcon} /> 
            <Text style={styles.deviceName}>Air Conditioner</Text>
            <Text style={styles.deviceStatus}>3 Devices</Text>
            <Switch 
              trackColor={{ false: "#767577", true: "#43A047" }}
              thumbColor={devices.airConditioner ? "#ffffff" : "#f4f3f4"}
              onValueChange={() => toggleDevice('airConditioner')}
              value={devices.airConditioner}
            />
          </TouchableOpacity>

          <TouchableOpacity 
            style={[
              styles.deviceCard, 
              devices.smartTV ? styles.deviceCardActive : null
            ]}
            onPress={() => toggleDevice('smartTV')}
          >
            <Image source={require('./assets/smarttv.png')} style={styles.deviceIcon} /> 
            <Text style={styles.deviceName}>Smart TV</Text>
            <Text style={styles.deviceStatus}>2 Devices</Text>
            <Switch 
              trackColor={{ false: "#767577", true: "#43A047" }}
              thumbColor={devices.smartTV ? "#ffffff" : "#f4f3f4"}
              onValueChange={() => toggleDevice('smartTV')}
              value={devices.smartTV}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.deviceGrid}>
          <TouchableOpacity 
            style={[
              styles.deviceCard, 
              devices.router ? styles.deviceCardActive : null
            ]}
            onPress={() => toggleDevice('router')}
          >
            <Image source={require('./assets/router.png')} style={styles.deviceIcon} /> 
            <Text style={styles.deviceName}>Router</Text>
            <Text style={styles.deviceStatus}>1 Device</Text>
            <Switch 
              trackColor={{ false: "#767577", true: "#43A047" }}
              thumbColor={devices.router ? "#ffffff" : "#f4f3f4"}
              onValueChange={() => toggleDevice('router')}
              value={devices.router}
            />
          </TouchableOpacity>

          <TouchableOpacity 
            style={[
              styles.deviceCard, 
              devices.smartLamp ? styles.deviceCardActive : null
            ]}
            onPress={() => toggleDevice('smartLamp')}
          >
            <Image source={require('./assets/lamp.png')} style={styles.deviceIcon} /> 
            <Text style={styles.deviceName}>Smart Lamp</Text>
            <Text style={styles.deviceStatus}>7 Devices</Text>
            <Switch 
              trackColor={{ false: "#767577", true: "#43A047" }}
              thumbColor={devices.smartLamp ? "#ffffff" : "#f4f3f4"}
              onValueChange={() => toggleDevice('smartLamp')}
              value={devices.smartLamp}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#0C0C0E',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  greeting: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#FFD700',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 24,
  },
  weatherContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    padding: 20,
    backgroundColor: '#1E1E1E',
    borderRadius: 10,
  },
  weatherIcon: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  temperature: {
    fontSize: 26,
    color: 'white',
    fontWeight: 'bold',
  },
  weatherText: {
    fontSize: 9,
    color: '#A0A0A0',
    marginVertical: 5,
  },
  location: {
    fontSize: 9,
    color: '#A0A0A0',
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationIcon: {
    width: 20,
    height: 20,
    marginRight: 0,
  },
  devicesContainer: {
    flex: 1,
  },
  deviceGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  deviceCard: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#1E1E1E',
    borderRadius: 10,
    width: '48%',
  },
  deviceCardActive: {
    backgroundColor: '#43A047',
  },
  deviceIcon: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  deviceName: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  deviceStatus: {
    fontSize: 14,
    color: '#A0A0A0',
    marginBottom: 10,
  },
});

export default DeviceControlScreen;
