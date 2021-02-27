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
    const sorted = results.data.sort((a, b) => b.market_cap - a.market_cap)
    setMarketData(sorted)
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