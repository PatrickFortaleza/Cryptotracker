import React from 'react'
import CryptoList from '../CryptoList/CryptoList'
import { useCrypto } from '../../contexts/CryptoCurrencies'

export default function CryptoListCtrl({navigation}) {
  const CryptoContext = useCrypto()
  const { marketData } = CryptoContext

  return (
    <CryptoList navigation={navigation} marketData={marketData} />
  )
}