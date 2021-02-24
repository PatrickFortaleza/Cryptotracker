import React from 'react'
import { StyleSheet, Text, SafeAreaView  } from 'react-native'
import CryptoList from '../components/controllers/CryptoListCtrl'
import SearchBarCtrl from '../components/controllers/SearchBarCtrl'

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <SearchBarCtrl />
      <CryptoList />
    </SafeAreaView >
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


