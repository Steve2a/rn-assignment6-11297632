import { StyleSheet, Text, View, Image, ScrollView,TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeProfile from './HomeProfile';
import Item from './Item';

const HomeScreen = () => {
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
                            <Item itemImg={require('../assets/dress1.png')} itemName={'Office Wear'} itemType={'reversible angora cardigan'} itemPrice={'$120'} />
                            <Item itemImg={require('../assets/dress2.png')} itemName={'Black'} itemType={'reversible angora cardigan'} itemPrice={'$120'} />
                            <Item itemImg={require('../assets/dress3.png')} itemName={'Church Wear'} itemType={'reversible angora cardigan'} itemPrice={'$120'} />
                            <Item itemImg={require('../assets/dress4.png')} itemName={'Lamerei'} itemType={'reversible angora cardigan'} itemPrice={'$120'} />
                            <Item itemImg={require('../assets/dress5.png')} itemName={'Lamerei'} itemType={'reversible angora cardigan'} itemPrice={'$120'} />
                            <Item itemImg={require('../assets/dress6.png')} itemName={'Lopo'} itemType={'reversible angora cardigan'} itemPrice={'$120'} />
                            <Item itemImg={require('../assets/dress7.png')} itemName={'21WN'} itemType={'reversible angora cardigan'} itemPrice={'$120'} />
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
})