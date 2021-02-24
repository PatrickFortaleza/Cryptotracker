import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SearchList from '../SearchBar/SearchList'

export default function SearchListCtrl({queryResult}) {
  return (
    <SearchList queryData={queryResult}/>
  )
}

const styles = StyleSheet.create({})
