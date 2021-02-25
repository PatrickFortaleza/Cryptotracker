import React from 'react'
import { StyleSheet, FlatList, SafeAreaView, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import CryptoListItemCtrl from '../controllers/CryptoListItemCtrl'

export default function SearchList({ queryData, navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listHead}>
        <Text style={styles.heading}>Search Query</Text>
        <Text style={styles.subheading}>Results | &nbsp;{ queryData.length } symbols&nbsp;</Text>
      </View>
      <FlatList
        style={styles.flatList}
        keyExtractor={cryptoCurrency => cryptoCurrency.id}
        data={queryData}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={
              () => {
                navigation.navigate('CryptoDetail', {
                  data: {
                    id: item.id,
                    name: item.name,
                    symbol: item.symbol
                  }
                })
              }
            }>
              <CryptoListItemCtrl cryptocurrency={item}/>
            </TouchableOpacity>
          )
        }}
      />
    </SafeAreaView>
  )
}

let ScreenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '100%',
    left: 0,
    zIndex: 5000,
    backgroundColor: '#1F1F1F',
    alignItems: 'center',
    justifyContent: 'center',
    width: `100%`,
    marginTop: 10,
    marginBottom: 50,
    borderRadius: 5,
    flex: 1,
    height: ScreenHeight - 100,
    flexDirection: 'column',
    justifyContent: 'flex-start'
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
  }
})
