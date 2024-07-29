import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';

const favoriteItems = [
  { id: '1', name: 'Shirt', brand: 'LIME', color: 'Blue', size: 'L', price: '32$', rating: 5, image: require('./assets/shirt.png') },
  { id: '2', name: 'Longsleeve Violeta', brand: 'Mango', color: 'Orange', size: 'S', price: '46$', rating: 0, image: require('./assets/longsleeve.png') },
  { id: '3', name: 'Shirt', brand: 'Olivier', color: 'Gray', size: 'L', price: '52$', rating: 3, image: require('./assets/shirt-gray.png'), soldOut: true },
  { id: '4', name: 'T-Shirt', brand: '&Berries', color: 'Black', size: 'S', price: '35$', rating: 4, image: require('./assets/tshirt.png'), discount: '-30%' },
];

const FavoriteScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.brand}>{item.brand}</Text>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.details}>Color: {item.color}  Size: {item.size}</Text>
        <Text style={styles.price}>{item.price}</Text>
        {item.soldOut && <Text style={styles.soldOut}>Sorry, this item is currently sold out</Text>}
        <View style={styles.ratingContainer}>
          {[...Array(5)].map((_, i) => (
            <Image key={i} source={i < item.rating ? require('./assets/star-filled.png') : require('./assets/star-empty.png')} style={styles.star} />
          ))}
        </View>
        {item.discount && <Text style={styles.discount}>{item.discount}</Text>}
      </View>
      <TouchableOpacity style={styles.deleteButton}>
        <Image source={require('./assets/deleteicon.png')} style={styles.deleteIcon} />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorites</Text>
      <FlatList
        data={favoriteItems}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
    position: 'relative',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
  },
  brand: {
    fontSize: 14,
    color: '#999',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  details: {
    fontSize: 14,
    color: '#999',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  soldOut: {
    fontSize: 14,
    color: 'red',
    marginTop: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  star: {
    width: 20,
    height: 20,
  },
  discount: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'red',
    color: 'white',
    padding: 5,
    borderRadius: 5,
  },
  deleteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  deleteIcon: {
    width: 20,
    height: 20,
  },
});

export default FavoriteScreen;
