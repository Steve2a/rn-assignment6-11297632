import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Item = ({ product, addToCart }) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.dressContainer}>
        <View style={styles.itemImage}>
          <Image style={styles.dressImage} source={product.image} />
        </View>
        <TouchableOpacity style={styles.addButton} onPress={() => addToCart(product)}>
          <Image source={require('../assets/add_circle.png')} />
        </TouchableOpacity>
      </View>
      <Text style={styles.nameText}>{product.name}</Text>
      <Text style={styles.typeText}>{product.type}</Text>
      <Text style={styles.priceText}>{product.price}</Text>
    </View>
  );
};

export default Item

const styles = StyleSheet.create({
  itemContainer: {
    paddingBottom: 20

  },

  itemImage: {
    display: 'flex',
    height: 260,
    width: 185,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex:1,
  },

  dressImage: {
    objectFit: 'cover',
    height: 260,
    width: 185,
  },

  typeText: {
    color: '#555555'
  },

  priceText: {
    fontSize: 20,
    color: '#DD8560'
  },

  dressContainer: {
    display:'flex',
    zIndex: 1,

  },

  addButton: {
    zIndex: 2,
    alignSelf:'flex-end',
    paddingRight:10,
    bottom:32



  },
})