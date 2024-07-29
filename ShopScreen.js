import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, FlatList, TouchableOpacity, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const images = [
  require('./assets/fashionsale1.png'),
  require('./assets/fashionsale2.png'),
  require('./assets/fashionsale3.png')
];

const products = [
  { id: '1', name: 'Evening Dress', price: '125', oldPrice: '155', image: require('./assets/evening-dress.png'), discount: '20%' },
  { id: '2', name: 'Sport Dress', price: '193', oldPrice: '226', image: require('./assets/sport-dress.png'), discount: '15%' },
  { id: '3', name: 'Casual Dress', price: '145', oldPrice: '175', image: require('./assets/casual-dress.png'), discount: '20%' },
];

function ShopScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
        >
          {images.map((image, index) => (
            <Image key={index} source={image} style={styles.headerImage} />
          ))}
        </ScrollView>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Fashion Sale</Text>
        </View>
      </View>
      <View style={styles.saleSection}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Sale</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>View all</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={products}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.productContainer}>
              <Image source={item.image} style={styles.productImage} />
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>${item.price} <Text style={styles.oldPrice}>${item.oldPrice}</Text></Text>
              <Text style={styles.discount}>{item.discount}</Text>
            </View>
          )}
        />
      </View>
      <View style={styles.newSection}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>New</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>View all</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={products}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.productContainer}>
              <Image source={item.image} style={styles.productImage} />
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>${item.price} <Text style={styles.oldPrice}>${item.oldPrice}</Text></Text>
              <Text style={styles.discount}>{item.discount}</Text>
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    position: 'relative',
  },
  headerImage: {
    width,
    height: 300,
  },
  headerTextContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  headerText: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
  },
  saleSection: {
    padding: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  viewAll: {
    fontSize: 16,
    color: 'blue',
  },
  productContainer: {
    marginRight: 10,
  },
  productImage: {
    width: 150,
    height: 150,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 14,
    color: 'gray',
  },
  oldPrice: {
    textDecorationLine: 'line-through',
    color: 'red',
  },
  discount: {
    color: 'red',
  },
  newSection: {
    padding: 20,
  },
});

export default ShopScreen;
