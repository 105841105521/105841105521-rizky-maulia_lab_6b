
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Saya</Text>
      <View style={styles.profileContainer}>
        <Image source={require('./assets/pic.jpeg')} style={styles.profilePic} />
        <View>
          <Text style={styles.name}>Rizky maulia</Text>
          <Text style={styles.email}>Rizkymaulia32@gmail.com</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.itemText}>Pesanan Saya</Text>
        <Text style={styles.itemDescription}>Sudah ada 12 pesanan</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.itemText}>alamat pengiriman</Text>
        <Text style={styles.itemDescription}>3 Alamat</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.itemText}>Metode Pembayaran</Text>
        <Text style={styles.itemDescription}>Visa **34</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.itemText}>Kode Promo</Text>
        <Text style={styles.itemDescription}>Anda Memiliki Kode Promo Spesial</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.itemText}>Ulasan Saya</Text>
        <Text style={styles.itemDescription}>Ulasan Untuk 4 Item</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.itemText}>Pengaturan</Text>
        <Text style={styles.itemDescription}>Notifikasi, Kata Sandi</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  profilePic: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    color: 'gray',
  },
  item: {
    marginBottom: 20,
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemDescription: {
    color: 'gray',
  },
});

export default ProfileScreen;

