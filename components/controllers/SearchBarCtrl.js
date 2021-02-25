import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SearchBar from '../SearchBar/SearchBar'
import { useCrypto } from '../../contexts/CryptoCurrencies'

export default function SearchBarCtrl() {
  const CryptoContext = useCrypto()
  const { marketData } = CryptoContext
  const [searchQuery, setSearchQuery] = useState('')
  const [formattedMarketData, setFMarketData] = useState([])
  const [queriedMarketData, setQMarketData] = useState([])

  useEffect(() => {
    setFMarketData(mapMarketData(marketData))
  }, [marketData])

  useEffect(() => {
    if(searchQuery.length < 1) return setQMarketData([])
    setQMarketData(filterMarketData(formattedMarketData))
  }, [searchQuery])

  const resetQuery = () => {
    setSearchQuery('')
  }

  const filterMarketData = (array) => {
    let filteredData = array.filter((d) => {
      if(d.symbol.startsWith(`${searchQuery.toLowerCase()}`) || d.name.toLowerCase().startsWith(`${searchQuery.toLowerCase()}`)) return d
    })
    return filteredData
  }

  const mapMarketData = (array) => {
    array = array.map((r) => {
      let object = {
        id: r.id,
        symbol: r.symbol,
        name: r.name,
        current_price: r.current_price,
        price_change_24h: r.price_change_24h 
      }
      return object
    })
    return array
  }

  return (
    <SearchBar setSearchQuery={setSearchQuery} query={searchQuery} queryResult={queriedMarketData} resetQuery={resetQuery}/>
  )
}

const styles = StyleSheet.create({})
