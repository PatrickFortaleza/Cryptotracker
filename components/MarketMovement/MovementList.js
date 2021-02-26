import React from 'react'
import { StyleSheet, FlatList, SafeAreaView, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import CryptoListItemCtrl from '../controllers/CryptoList/CryptoListItemCtrl'
 
export default function MovementList({ navigation, gainers, losers, date }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listHead}>
        <Text style={styles.heading}>Market Data</Text>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.subheading}>24h %change </Text>
      </View>
      {
        gainers ?
        <FlatList
          style={styles.flatList}
          stickyHeaderIndices={[0]}
          keyExtractor={cryptoCurrency => cryptoCurrency.id}
          data={gainers}
          ListHeaderComponent={() => {
            return (
              <View style={styles.bannerPos}>
                <Text style={styles.bannerText}>Top Gainers</Text>
              </View>
            )
          }}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity 
                onPress={() => {
                  navigation.navigate('CryptoDetail', {
                    data: {
                      id: item.id,
                      name: item.name,
                      symbol: item.symbol
                    }
                  })
                }}
              >
                <CryptoListItemCtrl cryptocurrency={item}/>
              </TouchableOpacity>
            )
          }}
        />
        :
          null
      }
      {
        losers ?
        <FlatList
          style={styles.flatList}
          stickyHeaderIndices={[0]}
          keyExtractor={cryptoCurrency => cryptoCurrency.id}
          data={losers}
          ListHeaderComponent={() => {
            return (
              <View style={styles.bannerNeg}>
                <Text style={styles.bannerText}>Top Losers</Text>
              </View>
            )
          }}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity 
                onPress={() => {
                  navigation.navigate('CryptoDetail', {
                    data: {
                      id: item.id,
                      name: item.name,
                      symbol: item.symbol
                    }
                  })
                }}
              >
                <CryptoListItemCtrl cryptocurrency={item}/>
              </TouchableOpacity>
            )
          }}
        />
        :
          null
      }
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
    paddingVertical: 5,
    borderColor: '#cc3300',
    borderWidth: 2,
  },
  bannerText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 1,
    textTransform: 'uppercase'
  },
  date: {
    fontSize: 12,
    color: '#ccc'
  },
});
