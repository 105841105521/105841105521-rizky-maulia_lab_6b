
import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import BagScreen from './bagScreen';
import ShopScreen from './ShopScreen';
import ProfileScreen from './ProfileScreen';


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Beranda"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? require('./assets/home-Aktif.png') : require('./assets/home-Inaktif.png')}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Keranjang"
        component={BagScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? require('./assets/bag-activated.png') : require('./assets/bag-inactive.png')}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favorit"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? require('./assets/favorites-activated.png') : require('./assets/favorites-inactive.png')}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profil"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? require('./assets/profil-activated.png') : require('./assets/profil-inactive.png')}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Toko"
        component={ShopScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? require('./assets/shop-Aktif.png') : require('./assets/shop-Inaktif.png')}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
