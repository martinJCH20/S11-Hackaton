import React, { Component, useState } from 'react'
import { View,Text, StyleSheet,  SafeAreaView, Image, Dimensions, TouchableOpacity } from 'react-native'
import MenuFooter from '../Components/Menu/MenuFooter'
let screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DDDDDD',
        alignItems: 'center'
    },
    containerSafeArea: {
        flex: 1,
        backgroundColor: '#F9F9F9',
    },
    containerTitle: {
        width: '100%',
        marginLeft: '10%',
        marginBottom: '10%'
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        fontFamily: 'Comic Sans'
    },
    titleSec: {
        fontSize: 40,
        fontFamily: 'Comic Sans'
    },
    containerDetails: {
        width:'90%',
        height: '70%',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 50,
        padding: '10%'
    },
    image: {
        height: '60%',
        width: '60%',
        resizeMode: 'stretch',
        marginBottom: '10%'
    },
    textDetails: {
        fontSize: 20
    }
})

export default class Contact extends Component {
    render(){
        return(
            <SafeAreaView  style={styles.containerSafeArea}>
                <View style={styles.container}>
                    <View style={styles.containerTitle}>
                            <Text style={styles.title}>Contact Us</Text>
                            <Text style={styles.titleSec}>_ .</Text>
                    </View>
                    <View style={styles.containerDetails}>
                        <Image style={styles.image} source={require('../../assets/friends.png')}/>
                        <Text style={styles.textDetails}>+51 987898909</Text>
                        <Text style={styles.textDetails}>Calle 235 - Miraflores</Text>
                    </View>
                </View>
                <MenuFooter navigation={this.props.navigation}/>
            </SafeAreaView>
        )
    }
}