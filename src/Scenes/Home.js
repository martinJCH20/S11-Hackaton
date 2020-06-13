import React, { Component } from 'react'
import { View,Text, StyleSheet,  SafeAreaView, FlatList, Systrace, Dimensions } from 'react-native'
import MenuFooter from '../Components/Menu/MenuFooter'
import SliderFullView from '../Components/Sliders/SliderFullView'
import CardProduct from '../Components/Products/CardProduct'
import { createStackNavigator } from '@react-navigation/stack';
//const Stack = createStackNavigator();

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const sliders = [
    {id: 1, image: require('../../assets/photo_product_slider_1.jpeg'), title: 'Step 1'},
    {id: 2, image: require('../../assets/photo_product_slider_2.jpeg'), title: 'Step 2'},
    {id: 3, image: require('../../assets/photo_product_slider_3.jpeg'), title: 'Step 3'}
]
const products = [
    {imgFondo:require('../../assets/fondoOmen.jpg'), imageBrand: require('../../assets/logo-apple-test.png'),imageProduct: require('../../assets/omenHP.png'), marca: "HP", productName: 'OMEN', productPrice: '$2250', color: '#FFFFFF'},
    {imgFondo:require('../../assets/fondoMAC.jpg'),imageBrand: require('../../assets/logo-apple-test.png'),imageProduct: require('../../assets/MACPRO.jpg'), marca: "Apple", productName: 'MAC PRO', productPrice: '$3199', color: '#FFFFFF'},
    {imgFondo:require('../../assets/fondoLenovo.jpg'),imageBrand: require('../../assets/logo-apple-test.png'),imageProduct: require('../../assets/lenovo.png'), marca: "Lenovo", productName: 'Yoga', productPrice: '$1559', color: '#FFFFFF'}
]

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DDDDDD',
        alignItems: 'center',
        paddingTop: '5%'
    },
    containerSafeArea: {
        flex: 1,
        backgroundColor: '#F9F9F9'
    },
    containerTitle: {
        width: '100%',
        marginLeft: '10%',
        marginBottom: '10%'
    },
    title: {
        fontSize: 35,
        fontFamily: 'Comic Sans'
    },
    titleSec: {
        fontSize: 40,
        fontWeight: 'bold',
        fontFamily: 'Comic Sans'
    }
})
export default class Home extends Component {
    render(){
        return(
            <SafeAreaView style={styles.containerSafeArea} >
                <View style={styles.container}>
                    <View style={styles.containerTitle}>
                        <Text style={styles.title}>Select</Text>
                        <Text style={styles.titleSec}>Laptop</Text>
                        <Text style={styles.titleSec}>_ .</Text>
                    </View>
                    <SliderFullView>
                        <FlatList
                            data={products}
                            horizontal
                            renderItem={({item, index}) => (
                                <CardProduct
                                imgFondo={item.imgFondo}
                                imageProduct={item.imageProduct}
                                marca={item.marca}
                                productName={item.productName}
                                navigation={this.props.navigation}
                                productPrice={item.productPrice}
                                backgroundColor={item.color}
                                />
                            )}
                            keyExtractor={item => item.id}
                        />
                    </SliderFullView>
                </View>
                 <MenuFooter navigation={this.props.navigation}/>
            </SafeAreaView>
        )
    }
}