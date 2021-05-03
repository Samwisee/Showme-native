import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground, Text } from 'react-native'
import { TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';


export default function BandCard(props: any) {

  const [band, setBand] = useState('')
  const navigation = useNavigation();

  return (
    <ImageBackground 
      style={styles.bands} 
      source={{uri: props.URL}}>

      <LinearGradient
        // Button Linear Gradient
        colors={['rgba(0,0,0,0.0)', '#000']}
        style={styles.textContainer}>
        <Text style={styles.bandsText}>{props.name}</Text>
      </LinearGradient>

    </ImageBackground>
  );
}


const styles = StyleSheet.create({
  bands: {
    height: 240,
    width: '100%',
    resizeMode: 'cover',
    flex: 1,
    backgroundColor: 'black'
  },
  bandsText: {
    color: 'white',
    zIndex: 4,
    textAlign: 'center',
    height: '100%',
    fontSize: 35,
  },
  textContainer: {
    width: '102%',
    height: '20%',
    position: 'absolute',
    bottom: -1,
    left: -1,
    flex: 1,
    justifyContent: 'flex-end'
  },
});