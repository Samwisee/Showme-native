import ConcertCard from '../components/ConcertCard'
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, ScrollView, Image, SafeAreaView } from 'react-native';
import { concertArray } from '../concertCache'
import { bandArray } from '../bandCache'
import BandCard from '../components/BandCard'
import { TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation, useRoute  } from "@react-navigation/native";
import fetchConcertData from '../fetchConcertData'
 

export default function BandScreen() {

  // const {landscape} = useDeviceOrientation()
  const route = useRoute()
  const navigation = useNavigation();
  const [search, setSearch] = useState('')
  const [concerts, setConcerts] = useState()

  useEffect(() => {
    (async () => {
      const concerts = await fetchConcertData()
      setConcerts(concerts)
    })()
  }, [])

  const logo = route.params?.bandLogo ?? 'defaultValue'

  const bandConcertIDs = route.params?.bandConcerts ?? 'defaultValue'

  console.log(concerts)

  const filtered = concertArray.filter(concert => bandConcertIDs.includes(concert.concertID))


  return(

    <View style={styles.mainContainer}>
      <SafeAreaView style={{flex: 1}}>
        <Image 
          style={styles.logo}
          source={{uri: logo}}
        />

        <FlatList
          style={styles.list}
          data={filtered}
          keyExtractor={(item, index) => index.toString()}

          renderItem={({ item }) => (
          <TouchableOpacity 
            onPress={() => navigation.navigate("Concert", item)} 
            style={styles.container}>
            <ConcertCard 
              name={item.concertName}
              URL={item.concertImageURL}
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
      flex: 1,
      width: '100%',
      height: '100%'
    },
    logo: {
      width: '90%',
      height: 100,
      marginVertical: 20,
      resizeMode: "contain",
      marginHorizontal: '5%',
    }
  });