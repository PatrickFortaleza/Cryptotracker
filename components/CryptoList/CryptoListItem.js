import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function CryptoListItem({symbol, name, id, currentPrice, change, changeIsPositive}) {

  return (
    <View>
      <Text>{symbol}</Text>
      <Text>{name}</Text>
      <Text>{currentPrice}</Text>
      <Text>{change}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
