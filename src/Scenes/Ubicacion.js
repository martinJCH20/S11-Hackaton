import React, { Component, useState } from 'react'
import { View,Text, StyleSheet,  SafeAreaView, TextInput, Image, Dimensions, TouchableOpacity, Alert } from 'react-native'
import MenuFooter from '../Components/Menu/MenuFooter'
import Geolocation from '@react-native-community/geolocation';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MapView from 'react-native-maps';

const { width: viewPortWidth } = Dimensions.get('window');

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
        height: '75%',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    containerApiPlace: {
        width:"100%",
         position: "absolute",
        zIndex: 2000
    },
    mapView:{
        ...StyleSheet.absoluteFillObject
        //height: "100%",
        //width: "100%"
    }
})

const GOOGLE_PLACES_API_KEY = ''; // never save your real api key in a snack!

export default class Ubicacion extends Component {
    constructor(props){
        super(props);
        this.state = {
            location: null,
            lastPosition: null
        }
    }

    findCoordinates = () => {
        try{
            Geolocation.getCurrentPosition(
                position => {
                    const location  = JSON.stringify(position);
                    this.setState({ 
                        //location 
                        location: position.coords.latitude.toString() + "," + position.coords.longitude.toString() 
                        //+","+ position.coords.latitudeDelta.toString() +","+ position.coords.longitudeDelta.toString()
                    });
                },
                error => Alert.alert(error.message),
                {enableHighAccuracy: true, timeout: 20000, maximumAge:1000}
            );
            // this.watchID = navigator.geolocation.watchPosition((lastPosition) => {
            //     this.setState({lastPosition});
            // });
        }catch (error){
            console.warn("cath: ",error.messge);            
        }
    }   
//No, 
    render(){
        return(
            <SafeAreaView  style={styles.containerSafeArea}>
                <View style={styles.container}>
                    <View style={styles.containerTitle}>
                            <Text style={styles.title}>Search Location</Text>
                            <Text style={styles.titleSec}>_ .</Text>
                    </View>
                    <View style={styles.containerDetails}>
                        <View  style={styles.containerApiPlace}>
                        
                        <GooglePlacesAutocomplete
                        styles={{
                            textInputContainer: {
                              backgroundColor: 'rgba(0,0,0,0)',
                              borderTopWidth: 0,
                              borderBottomWidth: 0,
                            },
                            textInput: {
                              marginLeft: 0,
                              marginRight: 0,
                              height: 38,
                              color: '#5d5d5d',
                              fontSize: 16,
                            },
                            predefinedPlacesDescription: {
                              color: '#1faadb'
                            }
                          }}
                            placeholder='Search'
                            onPress={(data, details = null) => {
                              // 'details' is provided when fetchDetails = true,
                              console.warn(data, details);
                            }}
                            query={{
                              key: GOOGLE_PLACES_API_KEY,
                              language: 'en',
                            }}
                        />
                        </View>
                        <View style={{flexDirection:'row'}}>
                        <TouchableOpacity onPress={this.findCoordinates} style={{height:40, width:"50%", borderWidth:0.5, borderColor: 'gray', justifyContent: 'center'}}>
                            <View><Text style={{textAlign:"center"}}>Your Position</Text></View>
                        </TouchableOpacity>                           
                        <TouchableOpacity style={{height:40, width:"50%", borderWidth:0.5, borderColor: 'gray', justifyContent: 'center'}} >
                            <View><Text style={{textAlign:"center"}}>Architec</Text></View>
                        </TouchableOpacity>
                        </View>
                        <Text>{this.state.location}</Text>
                        <View style={{height:"100%", width:"100%"}}>
                            <MapView
                                style={styles.mapView}
                                initialRegion={{
                                    latitude: 37.78825,
                                    longitude: -122.4324,
                                    latitudeDelta: 0.0922,
                                    longitudeDelta: 0.0421,
                                }}
                                >
                            </MapView>     
                        </View>                            
                    </View>
                </View>
                <MenuFooter navigation={this.props.navigation}/>
            </SafeAreaView>
        )
    }
}