import React, { useEffect, useState } from 'react'
import CryptoListItem from '../../CryptoList/CryptoListItem'

export default function CryptoListItemCtrl({ cryptocurrency }) {
  const [symbol, setSymbol] = useState('')
  const [name, setName] = useState('')
  const [id, setId] = useState('')
  const [currentPrice, setCurrentPrice] = useState('')
  const [changeIsPositive, setChangeIsPositive] = useState(false)
  const [priceChange, setPriceChange] = useState('')

  const formatPrice = ({int}) => {
    var parts = int.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  }

  const evaluate24hChange = ({change, current}) => {
    // evaluates price movement as a percentage
    const lastPrice = +current - +change
    const percentChange = ( +change / +lastPrice ) * 100
    return percentChange.toFixed(2)
  }

  const evaluateNegative = () => {
    const percentChange = evaluate24hChange({ change: +cryptocurrency.price_change_24h, current: +cryptocurrency.current_price })
    if( percentChange >= 0 ) setChangeIsPositive(true)
  }

  useEffect(() => {
    setSymbol(cryptocurrency.symbol)
    setName(cryptocurrency.name)
    setId(cryptocurrency.id)
    setCurrentPrice(`$${formatPrice({ int: +cryptocurrency.current_price.toFixed(5)})}`)
    setPriceChange(`${formatPrice({ int: +cryptocurrency?.price_change_24h?.toFixed(5)})}`)
    evaluateNegative()  
  }, [cryptocurrency])

  let change = ''
  if(cryptocurrency && cryptocurrency.price_change_percentage_24h) change = `${+cryptocurrency.price_change_percentage_24h?.toFixed(2)}%`


  return (
    <CryptoListItem
      symbol={symbol}
      name={name}
      id={id}
      currentPrice={currentPrice}
      priceChange={priceChange}
      change={change}
      changeIsPositive={changeIsPositive}
    />
  )
}
