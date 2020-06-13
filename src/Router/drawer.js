import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { MenuDrawer } from '../Components/Menu/MenuDrawer'
import { MainStackNavigator } from './index'
import Home from '../Scenes/Home';
import Details from '../Scenes/Details';
import Cart from '../Scenes/Cart';
import Contact from '../Scenes/Contact';
import Ubicacion from '../Scenes/Ubicacion';

const Drawer = createDrawerNavigator();

const DrawerStackNavigator = () => {
   // console.warn('props', props)
    return(
        <Drawer.Navigator
        initialRouteName={'Home'}
        drawerContent={(props) => <MenuDrawer {...props}/>}
        >
            <Drawer.Screen
                name='Home' 
                component={Home}
            />
            <Drawer.Screen
                name='Details' 
                component={Details}
            />
            <Drawer.Screen
                name='Cart' 
                component={Cart}
            />
            <Drawer.Screen
                name='Contact' 
                component={Contact}
            />   
            <Drawer.Screen
                name='Ubicacion' 
                component={Ubicacion}
            />              
        </Drawer.Navigator>
    )
}

export {
DrawerStackNavigator
}
