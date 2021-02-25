import React from 'react'
import SearchList from '../../SearchBar/SearchList'

export default function SearchListCtrl({queryResult, navigation}) {
  return (
    <SearchList queryData={queryResult} navigation={navigation}/>
  )
}
