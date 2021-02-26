import React from 'react'
import { StyleSheet, FlatList, SafeAreaView, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import CryptoListItemCtrl from '../controllers/CryptoList/CryptoListItemCtrl'

export default function MovementList({ navigation, gainers, losers }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listHead}>
        <Text style={styles.heading}>Markets</Text>
        <Text style={styles.subheading}>24h %change | Market Movers</Text>
      </View>
      <ScrollView style={styles.flatList}>
      <View style={styles.bannerPos}>
        <Text style={styles.bannerText}>Top Gainers</Text>
      </View>
      {
        gainers ?
          gainers.map((g, index) => {
            return (
              <TouchableOpacity 
                key={index}
                onPress={() => {
                  navigation.navigate('CryptoDetail', {
                    data: {
                      id: g.id,
                      name: g.name,
                      symbol: g.symbol
                    }
                  })
                }}
              >
                <CryptoListItemCtrl cryptocurrency={g}/>
              </TouchableOpacity>
            )
          })
        :
          null
      }
      <View style={styles.bannerNeg}>
        <Text style={styles.bannerText}>Top Losers</Text>
      </View>
      {
        losers ?
          losers.map((g, index) => {
            return (
              <TouchableOpacity
                key={index} 
                onPress={() => {
                  navigation.navigate('CryptoDetail', {
                    data: {
                      id: g.id,
                      name: g.name,
                      symbol: g.symbol
                    }
                  })
                }}
              >
                <CryptoListItemCtrl cryptocurrency={g}/>
              </TouchableOpacity>
            )
          })
        :
          null
      }
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F1F1F',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: `100%`,
    marginTop: 10,
    marginBottom: 0,
    borderRadius: 5,
    zIndex: -1
  },
  listHead: {
    paddingTop: 20,
    paddingBottom: 20,
    width: `100%`,
    paddingRight: 20,
    paddingLeft: 20,
    borderBottomColor: '#282828',
    borderBottomWidth: 1,
  },
  heading: {
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 21
  },
  subheading: {
    color: '#ccc',
    fontSize: 12,
    marginTop: 7,
  },
  flatList: {
    width: `100%`,
    paddingRight: 20,
    paddingLeft: 20
  },
  bannerPos: {
    backgroundColor: '#305b34',
    paddingVertical: 3,
    borderColor: '#09a519',
    borderWidth: 2
  },
  bannerNeg: {
    backgroundColor: '#663d30',
    paddingVertical: 3,
    borderColor: '#cc3300',
    borderWidth: 2,
  },
  bannerText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 12,
    textTransform: 'uppercase'
  }
});
