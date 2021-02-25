import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function DetailHeader({symbol, currentPrice, change, changeInt, changeIsPositive, date}) {
  return (
    <View style={styles.container}>
      <Text style={styles.symbol}>{symbol}</Text>
      <Text style={styles.price}>{ currentPrice === '$NaN' ? 'Loading' : `${currentPrice}`} </Text>
      <Text style={styles.change}>
        {
          !changeIsPositive ?
            <Text style={styles.changeNeg} >{changeInt} | ({change})</Text>  
          :
            <Text style={styles.changePos}>+{changeInt} | +{change}</Text>
        }
        &nbsp;24h
      </Text>
      <Text style={styles.date}>{`${date}`} PST</Text>
    </View>
  )
} 

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 15
  },
  symbol: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 17,
    textTransform: 'uppercase'
  },
  price: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 7
  },
  change: {
    color: '#ccc',
    marginTop: 7
  },
  changePos: {
    color: '#09a519'
  },
  changeNeg: {
    color: '#cc3300'
  },
  date: {
    fontSize: 12,
    color: '#ccc'
  }
})
