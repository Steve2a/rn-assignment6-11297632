import { StyleSheet, Text, View, Image, ScrollView,TouchableOpacity, Button } from 'react-native'
import React, { useState, useEffect} from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeProfile from './HomeProfile';
import Item from './Item';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      setProducts([
        { id: '1', image:require('../assets/dress1.png'), name: 'Office Wear', type:'reversible angora cardigan', price:'$120' },
        { id: '2', image:require('../assets/dress2.png'), name: 'Black', type:'reversible angora cardigan', price:'$120' },
        { id: '3', image:require('../assets/dress3.png'), name: 'Church Wear', type:'reversible angora cardigan', price:'$120' },
        { id: '4', image:require('../assets/dress4.png'), name: 'Laramel', type:'reversible angora cardigan', price:'$120' },
        { id: '5', image:require('../assets/dress5.png'), name: '21WN', type:'reversible angora cardigan', price:'$120' },
        { id: '6', image:require('../assets/dress6.png'), name: 'Lopo', type:'reversible angora cardigan', price:'$120' },
        { id: '7', image:require('../assets/dress7.png'), name: 'lame', type:'reversible angora cardigan', price:'$120' },
        
    ])}, []);



      const addToCart = async (product) => {
        try {
          const cartItems = await AsyncStorage.getItem('cart');
          let newCart = cartItems ? JSON.parse(cartItems) : [];
          newCart.push(product);
          await AsyncStorage.setItem('cart', JSON.stringify(newCart));
        } catch (error) {
          console.error(error);
        }
      };

    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <View style={styles.container}>
                        <HomeProfile />
                        <View style={styles.ourStory}>
                            <Text style={styles.ourStoryText}>OUR STORY</Text>
                            <View style={styles.storyIcons}>
                                <TouchableOpacity style={styles.imgBg}>
                                    <Image source={require('../assets/Listview.png')} />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.imgBg}>
                                    <Image source={require('../assets/Filter.png')} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.Item}>
                            {products.map((product) => (
                             <Item key={product.id} product={product}  itemPhoto={product.image} itemName={product.name} itemType={product.type} itemPrice={product.price} addToCart={addToCart} />
                          ))}
                        </View>

                    </View>
                </View>
            </ScrollView>
            

        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({

    container: {
        padding: 15,
    },

    ourStoryText:{
        fontSize:20

    },


    ourStory: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30,


    },

    storyIcons: {
        display: 'flex',
        flexDirection: 'row',
        gap: 15,

    },

    imgBg: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E3E3E3',
        width: 40,
        height: 40,
        borderRadius: 20
    },
    Item: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'

    },

    goCart:{
        width:20,
        backgroundColor:'black'
    },
})