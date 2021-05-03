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
import TopBar from './components/TopBar';

export default function App() {
  
  
  const Stack = createStackNavigator();
  const [search, setSearch] = useState('')

  return (
  <NavigationContainer>
    <View style={styles.section}>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: 'black',
            shadowColor: 'transparent',
            height: 30,
          }
        }}
      >
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ 
            headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerTitle: "" }}
        />
        <Stack.Screen 
          name="Band" 
          component={BandScreen}
          options={{ headerTitle: "" }}
        />
        <Stack.Screen 
          name="Concert" 
          component={ConcertScreen}
          options={{ headerTitle: "" }}
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

