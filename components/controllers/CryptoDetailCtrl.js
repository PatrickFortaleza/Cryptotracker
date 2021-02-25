import React, { useState, useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { queryCoin } from '../../network'
import CryptoDetail from '../CryptoDetail/CryptoDetail'

export default function CryptoDetailCtrl({data}) {
  const [coinData, setCoinData] = useState({})
  const [sparkLine, setSparkline] = useState([])

  useEffect(() => {
    queryCoinData()
  }, [])

  useEffect(() => {
    const result = delegateSparklineData(coinData)
    setSparkline(result)
  }, [coinData])

  const queryCoinData = async () => {
    const result = await queryCoin({id: data.id})
    if(!result) return null
    setCoinData(result.data) 
  }

  const delegateSparklineData = (coinData) => {
    const sparkline = coinData.market_data?.sparkline_7d.price

    return sparkline
  }

  return (
    <CryptoDetail coinData={coinData} sparkLine={sparkLine} />
  )
}

const styles = StyleSheet.create({})
