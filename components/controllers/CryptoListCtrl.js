import React, { useState, useEffect } from 'react'
import { queryMarkets } from '../../network'
import CryptoList from '../CryptoList/CryptoList'

export default function CryptoListCtrl() {
  const [ marketData, setMarketData ] = useState([])
  const [ errors, setErrors ] = useState([])

  useEffect(() => {
    queryMarketData()
  }, [])

  const queryMarketData = async () => {
    const results = await queryMarkets()
    if(results.length > 1) return setErrors((errors) => errors = [...errors, results.error])
    setMarketData(results.data)
  }

  return (
    <CryptoList marketData={marketData} errors={errors} />
  )
}