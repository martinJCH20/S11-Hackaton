import React, { Component } from 'react'
import { View,Text, StyleSheet,  SafeAreaView, Image, Button, TextInput } from 'react-native'
import MenuFooter from '../Components/Menu/MenuFooter'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DDDDDD',
        alignItems: 'center'
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
        fontSize: 40,
        fontWeight: 'bold',
        fontFamily: 'Comic Sans'
    },
    titleSec: {
        fontSize: 40,
        fontFamily: 'Comic Sans'
    },
    containerDetail: {
        width:'90%',
        height: '70%',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 50,
        paddingTop:'5%',
        padding: '2%'
    },
    textDetail: {
        fontSize: 20
    },
    imageBrand: {
         width: 250,
         height:250,
        resizeMode: 'stretch',
    },
    btnCount:{
        width: 450,
        height:40
    }
})
export default class Cart extends Component {
    render(){
        const {nombre, precio, imgProduct }= this.props.route.params;
        return(
            <SafeAreaView  style={styles.containerSafeArea}>
            <View style={styles.container}>
                <View style={styles.containerTitle}>
                    <Text style={styles.title}>My Shopping Cart</Text>
                    <Text style={styles.titleSec}>_ .</Text>
                </View>
                <View style={styles.containerDetail}>                   
                    <Text style={styles.textDetail}>{nombre}</Text>
                    <Image
                        source={imgProduct}
                        style={styles.imageBrand}
                    />                 
                    <Text style={styles.textDetail}>{precio}</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Button title="-" style={styles.btnCount}/>
                        <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 80 }}
                        keyboardType = 'numeric'
                        />
                        <Button title="+" style={styles.btnCount}/>
                    </View>
                </View>
            </View>
                <MenuFooter navigation={this.props.navigation}/>
            </SafeAreaView>
        )
    }
}