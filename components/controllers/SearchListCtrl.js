import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SearchList from '../SearchBar/SearchList'

export default function SearchListCtrl({queryResult, navigation}) {
  return (
    <SearchList queryData={queryResult} navigation={navigation}/>
  )
}

const styles = StyleSheet.create({})
