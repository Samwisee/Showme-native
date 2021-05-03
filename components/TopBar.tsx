import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

export default function TopBar() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/discoBall.gif')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    alignItems: 'center'
  },

})
