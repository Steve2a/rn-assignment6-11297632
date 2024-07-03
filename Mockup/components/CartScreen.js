import { StyleSheet, Text, View, FlatList, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState} from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Item from './Item';
import { useNavigation } from '@react-navigation/native';


const CartScreen = () => {
    const navigation = useNavigation();
    const [cartItems, setCartItems] = useState([]);
  
    useEffect(() => {
      loadCartItems();
    }, []);
  
    const loadCartItems = async () => {
      try {
        const cart = await AsyncStorage.getItem('cart');
        if (cart !== null) {
          const parsedCart = JSON.parse(cart);
          const cartWithUniqueKeys = parsedCart.map((item, index) => ({
            ...item,
            uniqueKey: `${item.id}_${index}`
          }));
          setCartItems(cartWithUniqueKeys);
        }
      } catch (error) {
        console.error('Error loading cart items:', error);
      }
    };
  
    const removeFromCart = async (uniqueKey) => {
      try {
        const updatedCart = cartItems.filter(item => item.uniqueKey !== uniqueKey);
        await AsyncStorage.setItem('cart', JSON.stringify(updatedCart.map(({ uniqueKey, ...item }) => item)));
        setCartItems(updatedCart);
      } catch (error) {
        console.error('Error removing item from cart:', error);
      }
    };
  
    const calculateTotal = () => {
      return cartItems.reduce((total, item) => total + parseFloat(item.price.replace('$', '')), 0).toFixed(2);
    };
  
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>

        <View style={styles.logo}>
        <Image source={require('../assets/Logo.png')}/>
        </View>

          <View style={styles.header}>
            <Text style={styles.headerText}>CHECKOUT</Text>
          </View>
          {cartItems.map((item) => (
            <View key={item.uniqueKey} style={styles.cartItem}>
              <Image source={item.image} style={styles.itemImage} />
              <View style={styles.itemDetails}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemType}>{item.type}</Text>
                <Text style={styles.itemPrice}>{item.price}</Text>
              </View>
              <TouchableOpacity 
                style={styles.removeButton} 
                onPress={() => removeFromCart(item.uniqueKey)}>
                <Image source={require('../assets/remove.png')}/>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Est. Total: </Text>
          <Text style={styles.totalSum}> ${calculateTotal()}</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}  style={styles.checkoutButton}>
            <Text  style={styles.checkoutButtonText}>Checkout</Text>
          </TouchableOpacity>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    header: {
      padding: 15,
    },
    headerText: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign:'center',

    },
    cartItem: {
      flexDirection: 'row',
      alignItems:'center',

      padding: 15,
    },
    itemImage: {
      width: 90,
      height: 120,
      marginRight: 15,
    },
    itemDetails: {
      flex: 1,
    },
    itemName: {
      fontSize: 16,
      fontWeight: 'bold',
      textTransform:'uppercase'
    },
    itemType: {
      color: '#555555',
    },
    itemPrice: {
      fontSize: 16,
      color: '#DD8560',
      marginTop: 5,
    },
    removeButton: {
      justifyContent: 'center',
    },

    totalContainer: {
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding: 15,
    },
    totalText: {
      fontSize: 18,
      marginBottom: 10,
      textTransform:'uppercase'
    },
    totalSum:{
        fontSize:18,
        color:'#DD8560',
        fontWeight:'bold'
    },
    checkoutButton: {
      backgroundColor: '#000',
      padding: 15,
      alignItems: 'center',
    },
    checkoutButtonText: {
      color: '#fff',
      fontSize: 16,
      textTransform:'uppercase'
    },
    logo:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        zIndex:5,

    },
  });
  
  export default CartScreen;