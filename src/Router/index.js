import React from 'react';
import { View, Dimensions ,Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
//import { Dashboard } from '../Scenes/Dashboard';
import Home from '../Scenes/Home';
import Details from '../Scenes/Details';
import Cart from '../Scenes/Cart';
import Contact from '../Scenes/Contact';
import Ubicacion from '../Scenes/Ubicacion';
const Stack = createStackNavigator();

const MainStackNavigator = () => {
  const forFade = ({ current, closing }) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });
  return (
    <Stack.Navigator
        initialRouteName="Home"
        headerMode="none"
    >
      <Stack.Screen name="Home" component={Home}  options={{ cardStyleInterpolator: forFade }}/> 
      <Stack.Screen name="Details" component={Details} options={{ cardStyleInterpolator: forFade }} />
      <Stack.Screen name="Cart" component={Cart} options={{ cardStyleInterpolator: forFade }} />
      <Stack.Screen name="Contact" component={Contact} options={{ cardStyleInterpolator: forFade }} />
      <Stack.Screen name="Ubicacion" component={Ubicacion} options={{ cardStyleInterpolator: forFade }} />
    </Stack.Navigator>
  );
}

export {
    MainStackNavigator
}