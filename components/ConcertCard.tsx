import React from 'react';
import { StyleSheet, View, ImageBackground, Text } from 'react-native'
import { TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';

export default function ConcertCard(props: any) {

  const navigation = useNavigation();

  return (
    <View style={styles.wrapper}>
      <ImageBackground 
        style={styles.concerts} 
        source={{uri: props.URL}}>
        <LinearGradient
          // Button Linear Gradient
          colors={['rgba(0,0,0,0.0)', '#000']}
          style={styles.textContainer}>          
          <Text style={styles.concertsText}>{props.name}</Text>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  concerts: {
    borderWidth: 1,
    borderColor: "white",
    marginTop: 16,
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    margin: '0%',
  },
  wrapper: {
    width: '90%',
    marginHorizontal: '5%',
    marginBottom: 20
  },
  concertsText: {
    color: 'white',
    zIndex: 4,
    height: '100%',
    fontSize: 20,
    flex: 1,
    paddingLeft: 10
  },
  textContainer: {
    width: '102%',
    height: '30%',
    position: 'absolute',
    bottom: -2,
    left: -1,
    flex: 1,
  },
});