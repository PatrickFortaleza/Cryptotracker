import React from 'react'
import { StyleSheet, Text, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import CryptoListItemCtrl from '../controllers/CryptoListItemCtrl'

export default function CryptoList({ marketData }) {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.flatList}
        keyExtractor={cryptoCurrency => cryptoCurrency.id}
        data={marketData}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity >
              <CryptoListItemCtrl cryptocurrency={item}/>
            </TouchableOpacity>
          )
        }}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: `100%`,
  },
  flatList: {
    width: `100%`,
    paddingRight: 20,
    paddingLeft: 20
  }
});
