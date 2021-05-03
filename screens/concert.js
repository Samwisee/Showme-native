import React from 'react'
import { StyleSheet, View, FlatList, Text } from 'react-native';
import YoutubeEmbed from '../components/YoutubeEmbed'
import concertArray from '../concertCache'
import { useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

export default function ConcertScreen({ navigation }) {

  const route = useRoute()
  // const youtubeExtension = concertArray[0].concertVideoURL.split('=')[1];
  const videoExtension = (route.params?.concertVideoURL ?? 'defaultValue').split('=')[1].split('&')[0].toString()

  return(
    <View style={styles.mainContainer}>
      <StatusBar 
        hidden={true}
      />
      <View style={styles.container}>
        <YoutubeEmbed 
          style={styles.youtubeEmbed} 
          URLExtension={videoExtension}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: '92%',
    marginHorizontal: '4%'
  },
  youtubeEmbed: {
    width: '100%'
  },
  mainContainer: {
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center'
  },
  text: {
    color: 'white'
  },
  wrapper: {

  }
});
