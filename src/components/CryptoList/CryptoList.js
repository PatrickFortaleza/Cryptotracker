import React from 'react'
import { StyleSheet, FlatList, SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import CryptoListItemCtrl from '../controllers/CryptoList/CryptoListItemCtrl'
import SimplePreloader from '../SimplePreloader'

export default function CryptoList({ marketData, navigation, date }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listHead}>
        <Text style={styles.heading}>Blockchain markets</Text>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.subheading}>$USD | &nbsp;{ marketData.length } symbols&nbsp;</Text>
      </View>
      {
        marketData.length < 100 ? 
        <SimplePreloader />
        :
        <FlatList
          style={styles.flatList}
          keyExtractor={cryptoCurrency => cryptoCurrency.id}
          data={marketData}
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
  date: {
    fontSize: 12,
    color: '#ccc'
  },
});
