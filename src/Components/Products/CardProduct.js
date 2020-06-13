import React, { Component, version } from 'react'
import {View, Text, ImageBackground, StyleSheet,Image, Dimensions,TouchableOpacity, DeviceEventEmitter } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

let screenHeight = Dimensions.get('window').height;
let screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        marginHorizontal: 15,
        width: screenWidth * 0.60,
        height: 340,
        borderRadius: 40
    },
    containerImageBrand: {
        marginHorizontal: 5
    },
    imageBrand: {
        // width: 50,
         height: 20,
        resizeMode: 'stretch',
    },
    containerImageProduct: {
        justifyContent: 'center',
        alignItems:  'flex-end',
        marginVertical: 5,
        height: '50%'
    },
    imageProduct: {
        width: 230,
        height: 190,
       // resizeMode: 'stretch',
        marginRight: '3%'
    },
    containerDetails: {
        flex: 1,
        flexDirection: 'column',
        marginHorizontal: 5,
        marginVertical: 25
    },
    productDetail:{
        flexDirection: 'column',
        marginLeft: '10%'
    },
    productMarca: {
        color: '#85144b', 
        fontSize: 15,
        fontWeight: 'bold'
    },
    productName: {
        color: 'black', 
        fontSize: 25,
        fontWeight: 'bold'
    },
    productPrice: {
        color: 'white', 
        fontSize: 15,
        justifyContent: 'center',
        alignItems: 'flex-end',
        fontWeight: 'bold'
    },
    containerPrice:{
        borderRadius: 50,
        backgroundColor: '#3f3f44',
        height: '50%',
        width:'30%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
        marginVertical: 30,
        marginRight: -10,
        padding: 10
    }
});
export default class CardProduct extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    onPressDetail = async(route, nameProduct, priceProduct, imgFondo, imageProduct) => {
        if(route === 'Details'){
            this.props.navigation.navigate(route, {nombre: nameProduct, precio: priceProduct, fondo: imgFondo, imgProduct: imageProduct })
        }
    }

    render(){
        const {imgFondo, imageBrand, imageProduct, productName, productPrice, backgroundColor, marca} = this.props;
        return(
            <TouchableOpacity onPress={() => this.onPressDetail('Details', productName, productPrice, imgFondo, imageProduct )} >
            <View style={[styles.container, { backgroundColor: backgroundColor}]}>
                <View style={styles.containerImageBrand}>
                    <Image
                        source={imageBrand}
                        style={styles.imageBrand}

                    />
                </View>
                <View style={styles.containerImageProduct}>
                    <Image
                        source={imageProduct}
                        style={styles.imageProduct}
                    />
                </View>
                <View style={styles.containerDetails}>
                    <View style={styles.productDetail}>
                        <Text style={styles.productMarca}>{marca}</Text>
                        <Text style={styles.productName}>{productName}</Text>
                    </View>
                    <View style={styles.containerPrice}>
                        <Text style={styles.productPrice}>
                            {productPrice}
                        </Text>
                    </View>
                </View>
            </View>
            </TouchableOpacity>
        )
    }
}