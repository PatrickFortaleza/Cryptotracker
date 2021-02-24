import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CryptoList from '../components/controllers/CryptoListCtrl'

export default function Home() {
  return (
    <View style={styles.container} >
      <CryptoList />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191919',
    alignItems: 'center',
    justifyContent: 'center',
    width: `100%`,
    paddingRight: 10,
    paddingLeft: 10
  },
})


