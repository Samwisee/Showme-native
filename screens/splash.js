import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text, ImageBackground, Linking, Image } from 'react-native';
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { StatusBar } from 'expo-status-bar';


export default function SplashScreen({ navigation }) {

  return(
    <ImageBackground 
    source={require('../assets/splashBackground.png')}
    style={styles.concerts} 
    > 
    {/* <StatusBar 
    style="light"
    backgroundColor="black"
    /> */}
      <View style={styles.card}>
        <View style={styles.wrapper}>
          <Image
            source={require('../assets/showmeLogo.png')} 
            style={styles.showmeLogo}
          />
          <Text style={styles.texth1}>
            Over 200 good quality concerts available to stream now!
          </Text>


          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            style={styles.showmeButton}
          >
            <Text style={styles.text}>Showme</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => Linking.openURL("https://www.facebook.com/")}
            title='Facebook'
            style={styles.button}
          >
            <Text style={styles.text}>Facebook</Text>
          </TouchableOpacity>       
          <TouchableOpacity
            onPress={() => Linking.openURL("https://www.instagram.com/")}
            title='Instagram'
            style={styles.button}
          >
            <Text style={styles.text}>Instragram</Text>
          </TouchableOpacity>   

          <TouchableOpacity
            onPress={() => Linking.openURL("https://www.twitter.com/")}
            title='Twitter'
            style={styles.button}
          >
            <Text style={styles.text}>Twitter</Text>
          </TouchableOpacity>   
        </View>
      </View> 
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  concerts: {
    height: '100%',
    width: '100%',
    flex: 1,
    justifyContent: 'center'
  },
  card: {
    color: 'white',
    backgroundColor: 'black',
    width: '75%',
    height: 550,
    marginHorizontal: '12.5%',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 20,
  },
  button: {
    color: 'white',
    borderWidth: 1,
    height: 18,
    borderColor: 'white',
    width: '60%',
    marginHorizontal: '20%',
    marginTop: 10,
    flex: 1,
    justifyContent: 'center'
  },
  showmeButton: {
    color: 'white',
    borderWidth: 3,
    height: 30,
    width: '75%',
    marginHorizontal: '12.5%',
    borderColor: 'orange',
    borderRadius: 50,
    marginTop: 10,
    flex: 1,
    justifyContent: 'center'
  },
  showmeLogo: {
    width: '100%',
    resizeMode: 'contain',
    height: 200,
    marginBottom: 10,
    borderRadius: 500,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
  texth1: {
    color: 'white',
    textAlign: 'center',
    fontSize: 24,
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    width: '90%',
    margin: '5%',
    marginVertical: 20,
  }
});
