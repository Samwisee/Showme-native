import React, { useState } from 'react';
import { StyleSheet, View, TextInput, FlatList, ScrollView, Button, TouchableOpacity, SafeAreaView } from 'react-native';
import YoutubeEmbed from '../components/YoutubeEmbed'
import BandCard from '../components/BandCard'
import { bandArray } from '../bandCache'
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { StatusBar } from 'expo-status-bar';


export default function HomeScreen() {

  // const {landscape} = useDeviceOrientation()

  const [search, setSearch] = useState('')
  const navigation = useNavigation();

  const sortedBandArray = bandArray.sort((a, b) => (a.bandName > b.bandName) ? 1 : ((b.bandName > a.bandName) ? -1 : 0))

  return(

  <View style={styles.mainContainer}>
            
    <SafeAreaView>

      <View style={styles.container}>
        <YoutubeEmbed 
        style={styles.youtubeEmbed} 
        URLExtension={"3yRMbH36HRE"}
        />
      </View>

      <TextInput style={styles.search}   
        placeholder='Search for Artist...'
        placeholderTextColor="gray"
        onChangeText={(val) => setSearch(val)} 
      />
      <TextInput style={styles.search}
        placeholder='Filter by Category...'
        placeholderTextColor="gray" 
      />
      <FlatList
        style={styles.list}
        data={sortedBandArray}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          
        <TouchableOpacity 
          onPress={() => navigation.navigate("Band", item)} 
          style={styles.container}>
          <BandCard 
            name={item.bandName}
            URL={item.bandImageURL}
          />
        </TouchableOpacity>
        )}
      />
      
    </SafeAreaView>
  </View>
)}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'black',
  },
  container: {
    borderWidth: 1,
    borderColor: 'white',
    marginTop: 20,
    flex: 1,
    height: '100%',
    width: '90%',
    marginHorizontal: '5%'
  },
  youtubeEmbed: {
    height: 240,
    width: '100%'
  },
  bands: {
    height: 240,
    width: '100%',
    resizeMode: 'cover',
    flex: 1
  },
  bandsText: {
    color: 'white',
    zIndex: 4,
    position: 'relative'
  },
  text: {
    color: 'white',
    fontSize: 50,
  },
  search: {
    width: '90%',
    height: 50,
    borderWidth: 1,
    borderColor: 'white',
    marginHorizontal: '5%',
    marginTop: 20,
    fontSize: 18,
    paddingLeft: 15,
    color: 'white',
  },
});