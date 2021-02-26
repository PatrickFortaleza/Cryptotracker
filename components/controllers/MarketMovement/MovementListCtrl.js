import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MovementList from '../../MarketMovement/MovementList'
import { useCrypto } from '../../../contexts/CryptoCurrencies'

export default function MovementListCtrl() {
  const [topGainers, setTopGainers] = useState([])
  const [topLosers, setTopLosers] = useState([])
  const CryptoContext = useCrypto()
  const { marketData } = CryptoContext

  useEffect(() => {
    scrapeTopGainers(marketData)
    scrapeTopLosers(marketData)
  }, [marketData])

  const scrapeTopGainers = (array) => {
    const sorted = array.sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h)
    const sliced = sorted.slice(0, 10)
    setTopGainers(sliced)
  }

  const scrapeTopLosers = (array) => {
    const sorted = array.sort((a, b) => a.price_change_percentage_24h - b.price_change_percentage_24h)
    const sliced = sorted.slice(0, 10)
    setTopLosers(sliced)
  }

  return (
    <MovementList gainers={topGainers} losers={topLosers} />
  )
}
