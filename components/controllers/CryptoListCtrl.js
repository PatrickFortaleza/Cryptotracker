import React, { useState, useEffect } from 'react'
import { queryMarkets } from '../../network'
import CryptoList from '../CryptoList/CryptoList'
import { useCrypto } from '../../contexts/CryptoCurrencies'

export default function CryptoListCtrl() {
  const CryptoContext = useCrypto()
  const { marketData } = CryptoContext

  return (
    <CryptoList marketData={marketData} />
  )
}