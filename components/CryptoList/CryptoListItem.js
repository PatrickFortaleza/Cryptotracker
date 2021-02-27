import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function CryptoListItem({symbol, name, currentPrice, change, changeIsPositive, priceChange}) {

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.symbol}>{symbol}</Text>
        <View style={{flex: 1, flexDirection: 'column', width: '35%'}}>
          <Text style={styles.price}>{currentPrice}</Text>
          {
            changeIsPositive ?
              <Text style={styles.pChangePos}>+{priceChange}</Text>
            :
              <Text style={styles.pChangeNeg}>{priceChange}</Text>
          }

        </View>
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
        <Text style={styles.disclaimer}>24h %change</Text>
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
    width: '100%',
    textAlign: 'right',
    color: '#fff',
    lineHeight: 23,
    paddingRight: 15
  },
  pChangeNeg: {
    color: '#cc3300',
    fontSize: 10,
    textAlign: 'right',
    paddingRight: 15,
    marginTop: -3,
  },
  pChangePos: {
    color: '#09a519',
    fontSize: 10,
    textAlign: 'right',
    paddingRight: 15,
    marginTop: -3,
  },
  change: {
    width: '25%',
    textAlign: 'right',
    color: '#fff',
  },
  spanPos: {
    backgroundColor: '#09a519',
    textAlign: 'right',
    paddingTop: 3,
    paddingBottom: 3,
    textAlign: 'center',
    color: '#fff',
    borderRadius: 2,
  },
  spanNeg: {
    backgroundColor: '#cc3300',
    textAlign: 'right',
    paddingTop: 3,
    paddingBottom: 3,
    textAlign: 'center',
    color: '#fff',
    borderRadius: 2,
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
    fontSize: 10,
    marginTop: -15
  }
})
