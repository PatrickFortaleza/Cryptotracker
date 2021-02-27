import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import MovementListCtrl from '../components/controllers/MarketMovement/MovementListCtrl'

export default function MarketMovers({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <MovementListCtrl navigation={navigation}/>
    </SafeAreaView>
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
  }
})
