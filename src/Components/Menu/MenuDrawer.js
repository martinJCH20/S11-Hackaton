import React , { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1
    },
    userInfoSection: {
        marginLeft: 20
    },
    image: {
        height: 36,
        width: 36
    }
})

const MenuDrawer = (props) => {
        return(
            <View style={{ flex: 1}}>
            <DrawerContentScrollView {...props}>
                <View styles={styles.drawerContent}>
                    <View style={styles.userInfoSection}>

                    </View>
                    <DrawerItem
                        icon={() => (
                            <Image 
                            style={styles.image}
                            source={require('../../../assets/icons/025-warehouse.png')}
                            />
                        )}
                        label='Home'
                        onPress={() => {props.navigation.navigate('Home')}}
                    />
                    <DrawerItem
                        icon={() => (
                            <Image 
                            style={styles.image}
                            source={require('../../../assets/icons/049-customer.png')}
                            />
                        )}
                        label='Contact'
                        onPress={() => {props.navigation.navigate('Contact')}}
                    />
                    <DrawerItem
                        icon={() => (
                            <Image 
                            style={styles.image}
                            source={require('../../../assets/icons/010-location.png')}
                            />
                        )}
                        label='Ubication'
                        onPress={() => {props.navigation.navigate('Ubicacion')}}
                    />
                </View>
            </DrawerContentScrollView>
        </View>
        )
}

export { 
    MenuDrawer
}