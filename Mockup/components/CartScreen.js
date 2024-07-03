import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SafeAreaView } from 'react-native-safe-area-context';

const CartScreen = () => {
    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <View>
                    <Text>CartScreen</Text>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default CartScreen

const styles = StyleSheet.create({})