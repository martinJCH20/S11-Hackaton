import React, { Component, useState } from 'react'
import { View,Text, StyleSheet,  SafeAreaView, ImageBackground, Dimensions, TouchableOpacity } from 'react-native'
import MenuFooter from '../Components/Menu/MenuFooter'
let screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        width: '80%',
        height: '10%',
        backgroundColor: 'white',
        borderRadius: 50,
        padding: '2%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'center',
        marginBottom: '5%'
    },
    containerSafeArea: {
        flex: 1
    },
    containerSlider: {
        flex: 1,
        width: screenWidth,
        justifyContent: 'center',
        alignItems: 'center'
    },
    pluss:{
        width: 30,
        height: 30,
        backgroundColor: '#EC7063',
        alignItems: 'center',
        borderRadius: 50
    }
})
export default class Details extends Component {
    constructor(props){
        super(props);
        this.state = {
            nombre:''
        }
    }
    onPressCart = async(route, nameProduct, priceProduct, imageProduct) => {
        if(route === 'Cart'){
            this.props.navigation.navigate(route, {nombre: nameProduct, precio: priceProduct, imgProduct: imageProduct })
        }
    }

    render(){
        const {fondo, nombre, precio, imgProduct }= this.props.route.params;
        return(
            <ImageBackground source={fondo} style={styles.containerSlider}>
            <SafeAreaView  style={styles.containerSafeArea}>
                        {/* <MenuFooter navigation={this.props.navigation}/> */}
            </SafeAreaView>
                    <View style={styles.container}>
                        <View style={{flexDirection:'column', marginRight:'15%'}}>
                            <Text style={{color:'black'}}>Name: </Text>
                            <Text style={{color:'black', fontWeight:'bold'}}>{nombre}</Text>
                        </View>
                        <View style={{flexDirection:'column', marginRight:'15%'}}>
                            <Text style={{color:'black'}}>Price: </Text>
                            <Text style={{color:'black', fontWeight:'bold'}}>{precio}</Text>
                        </View>
                        <TouchableOpacity onPress={() => this.onPressCart('Cart',  nombre, precio, imgProduct)}> 
                        <View style={styles.pluss}><Text style={{fontWeight:'bold', color:'white', fontSize:20}}>+</Text></View>
                        </TouchableOpacity>
                    </View>
                    {/* <MenuFooter navigation={this.props.navigation}/> */}
            </ImageBackground>
        )
    }
}