import React, { useContext, useEffect, useState } from 'react'
import { queryMarkets } from '../network'
const CryptoContext = React.createContext()

export function useCrypto(){
  return useContext(CryptoContext)
}

export function CryptoProvider({children}){
  const [marketData, setMarketData] = useState([])

  useEffect(() => {
    queryMarketData()
  }, [])

  const queryMarketData = async () => {
    const results = await queryMarkets()
    if(results.length > 1) return null
    setMarketData(results.data)
  }

  const value = {
    marketData
  }

  return (
    <CryptoContext.Provider value={value}>
      { children }
    </CryptoContext.Provider>
  )
}