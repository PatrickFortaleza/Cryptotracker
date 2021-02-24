import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function CryptoListItem({symbol, name, id, currentPrice, change, changeIsPositive}) {

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.symbol}>{symbol}</Text>
        <Text style={styles.price}>{currentPrice}</Text>
        <View style={styles.change}>
          {
            changeIsPositive ?   
            <Text style={styles.spanPos}>&nbsp;+{change} </Text>
            :
            <Text style={styles.spanNeg}>&nbsp;{change}  </Text>
          } 
        </View>
      </View>
      <View style={styles.row}>
        <Text style={styles.marketName}>{name}</Text>
        <Text style={styles.disclaimer}>Last 24 hours</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomColor: '#282828',
    borderBottomWidth: 1,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 5
  },
  symbol: {
    fontWeight: 'bold',
    fontSize: 17,
    color: '#fff',
    textTransform: 'uppercase',
    width: '40%',
    lineHeight: 23,
  },
  price: {
    width: '35%',
    textAlign: 'right',
    color: '#fff',
    lineHeight: 23,
    paddingRight: 15
  },
  change: {
    width: '25%',
    textAlign: 'right',
    color: '#fff',
    borderRadius: 5,
  },
  spanPos: {
    backgroundColor: '#09a519',
    textAlign: 'right',
    paddingTop: 3,
    paddingBottom: 3,
    textAlign: 'center',
    color: '#fff'
  },
  spanNeg: {
    backgroundColor: '#cc3300',
    textAlign: 'right',
    paddingTop: 3,
    paddingBottom: 3,
    textAlign: 'center',
    color: '#fff'
  },
  marketName: {
    width: '50%',
    textAlign: 'left',
    color: 'grey',
    lineHeight: 17,
  },
  disclaimer: {
    width: '50%',
    textAlign: 'right',
    color: 'grey',
    lineHeight: 17,
    fontSize: 10
  }
})
