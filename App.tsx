import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableHighlight, TextInput, ScrollView, Button, FlatList } from 'react-native';
import YoutubeEmbed from './components/YoutubeEmbed'
import BandCard from './components/BandCard'
import HomeScreen from './screens/home'
import BandScreen from './screens/band'
import SplashScreen from './screens/splash'
import ConcertScreen from './screens/concert'
import Navigator from './routes/homeStack'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { useDeviceOrientation } from '@react-native-community/hooks'

export default function App() {
  
  
  const Stack = createStackNavigator();
  const [search, setSearch] = useState('')

  return (
  <NavigationContainer>
    <View style={styles.section}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'black',
          }
        }}
      >
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ title: 'Splash' }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        <Stack.Screen 
          name="Band" 
          component={BandScreen}
          options={{ title: 'Band' }}
        />
        <Stack.Screen 
          name="Concert" 
          component={ConcertScreen}
          options={{ title: 'Concert' }}
        />
      </Stack.Navigator>
    </View>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  section: {
    flex: 1,
    height: '100%',
    backgroundColor: 'black',
    paddingTop: 40,
    zIndex: 1,
  },
  div: {
    zIndex: 30,
    position: 'relative'
  }
});

