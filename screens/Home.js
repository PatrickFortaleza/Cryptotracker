import React from 'react'
import { StyleSheet, SafeAreaView  } from 'react-native'
import CryptoListCtrl from '../components/controllers/CryptoList/CryptoListCtrl'
import SearchBarCtrl from '../components/controllers/SearchBar/SearchBarCtrl'

export default function Home({navigation}) {
  console.log(navigation)
  return (
    <SafeAreaView style={styles.container}>
      <SearchBarCtrl navigation={navigation} />
      <CryptoListCtrl navigation={navigation} />
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


