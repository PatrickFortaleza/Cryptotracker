import React from 'react'
import { StyleSheet, TextInput, View, TouchableOpacity, Text } from 'react-native'
import Search from '../icons/Search'
import SearchListCtrl from '../controllers/SearchBar/SearchListCtrl'


export default function SearchBar({setSearchQuery, query, resetQuery, queryResult, navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <Search style={styles.icon} name="search" />
        <TextInput
          onChangeText={newTerm => setSearchQuery(newTerm)}
          value={query} 
          style={styles.input} placeholderTextColor="#fff"  placeholder="Search markets by symbol" />
        {
          query && query.length > 0 ?
          <TouchableOpacity
          onPress={resetQuery}>
            <Text style={styles.button} >Cancel</Text>
          </TouchableOpacity>
          :
          null
        }
      </View>
      {
        query && query.length > 0 ?
        <SearchListCtrl queryResult={queryResult} navigation={navigation}/>
        :
        null
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 10,
    position: 'relative'
  },
  background: {
    height: 50,
    borderRadius: 6,
    backgroundColor: '#202020',
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    flex: 1,
    width: '100%',
    color: 'white',
    marginRight: 15
  },
  icon: {
    fontSize: 35,
    alignSelf: 'center',
    marginRight: 15,
    color: 'white'
  },
  button: {
    backgroundColor: '#202020',
    color: '#cc3300',
  }
})
