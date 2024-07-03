import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const HomeProfile = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaProvider>
    <View style={styles.container}>
    <TouchableOpacity>
        <Image source={require('../assets/Menu.png')}/>

    </TouchableOpacity>
    
    
    <View style={styles.searchBag}>
    <TouchableOpacity>
    <Image source={require('../assets/Search.png')}/>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
    <Image source={require('../assets/shoppingBag.png')}/>
    </TouchableOpacity>
    </View>
</View>

    <View style={styles.logo}>
    <Image source={require('../assets/Logo.png')}/>
    </View>
    
</SafeAreaProvider>
  )
}

export default HomeProfile

const styles = StyleSheet.create({
    logo:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        zIndex:5,
        marginTop:-50

    },
    container:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        width:'auto',
        height:'auto',
        marginBottom: 25,
        zIndex:10

    },
    searchBag:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        gap:31,
        paddingRight:8

    }
})