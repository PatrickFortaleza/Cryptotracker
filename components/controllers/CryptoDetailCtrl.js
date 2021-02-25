import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { queryCoin } from '../../network'
import CryptoDetail from '../CryptoDetail/CryptoDetail'

export default function CryptoDetailCtrl({data}) {
  const [coinData, setCoinData] = useState({})

  useEffect(() => {
    queryCoinData()
  }, [])

  const queryCoinData = async () => {
    const result = await  queryCoin({id: data.id})
    if(!result) return null
    setCoinData(result.data)
  }

  return (
    <CryptoDetail coinData={coinData} />
  )
}

const styles = StyleSheet.create({})
