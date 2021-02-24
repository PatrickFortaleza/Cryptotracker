import React from 'react'
import { StyleSheet, FlatList, SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import CryptoListItemCtrl from '../controllers/CryptoListItemCtrl'

export default function CryptoList({ marketData }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listHead}>
        <Text style={styles.heading}>Blockchain markets</Text>
        <Text style={styles.subheading}>{ marketData.length } symbols</Text>
      </View>
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
    backgroundColor: '#1F1F1F',
    alignItems: 'center',
    justifyContent: 'center',
    width: `100%`,
    marginTop: 50,
    marginBottom: 50,
    borderRadius: 5
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
    fontSize: 17,
    marginTop: 7
  },
  flatList: {
    width: `100%`,
    paddingRight: 20,
    paddingLeft: 20
  }
});
