import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeProfile = () => {
  return (
    <SafeAreaProvider>
    <View style={styles.container}>
    <TouchableOpacity>
        <Image source={require('../assets/Menu.png')}/>

    </TouchableOpacity>
    {/*
    <View>
    <Image source={require('../assets/Logo.png')}/>
    </View>
    */}
    
    <View style={styles.searchBag}>
    <TouchableOpacity>
    <Image source={require('../assets/Search.png')}/>
    </TouchableOpacity>
    <TouchableOpacity>
    <Image source={require('../assets/shoppingBag.png')}/>
    </TouchableOpacity>
    </View>
</View>
</SafeAreaProvider>
  )
}

export default HomeProfile

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        width:'auto',
        height:'auto',
        marginBottom: 25
    },
    searchBag:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        gap:31,
        paddingRight:8

    }
})