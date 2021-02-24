import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function SearchList() {
  return (
    <View style={styles.container}>
      <Text>Search List</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '100%',
    left: 0,
    width: '100%',
    zIndex: 5000,
  }
})
