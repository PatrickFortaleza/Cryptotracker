import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SearchBar from '../SearchBar/SearchBar'

export default function SearchBarCtrl() {
  const [searchQuery, setSearchQuery] = useState('')

  const resetQuery = () => {
    setSearchQuery('')
  }

  return (
    <SearchBar setSearchQuery={setSearchQuery} query={searchQuery} resetQuery={resetQuery}/>
  )
}

const styles = StyleSheet.create({})
