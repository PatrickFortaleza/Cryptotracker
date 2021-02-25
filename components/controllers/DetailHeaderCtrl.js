import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import DetailHeader from '../CryptoDetail/DetailHeader'

export default function DetailHeaderCtrl({coinData}) {
  const [currentPrice, setCurrentPrice] = useState('')
  const [change, setChange] = useState('')
  const [changeIsPositive, setChangeIsPositive] = useState(false)
  const [date, setDate] = useState(new Date())

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
    const percentChange = evaluate24hChange({ change: +coinData.market_data?.price_change_24h_in_currency.usd, current: +coinData.market_data?.current_price.usd.toFixed(2) })
    if( percentChange >= 0 ) setChangeIsPositive(true)
  }

  const parseDate = (date) => {
    // Parse data into a date string
    const parsedDate = Date.parse(date);
    // if can't parse, return the original string
    if (!parsedDate) return date;
    // Make parsedDate into a new Date object
    const d = new Date(parsedDate);
    // config date options
    const dateOptions = { year: "numeric", month: "long", day: "2-digit" };
    const timeOptions = { hour: "numeric", minute: "numeric" };
    // Set current date and time
    const currDate = new Intl.DateTimeFormat("en", dateOptions).format(d);
    const time = new Intl.DateTimeFormat("en", timeOptions).format(d);
    // Return formatted date string
    const dateString = `${currDate} at ${time}`;
    return dateString;
  };

  useEffect(() => {
    setCurrentPrice(`$${formatPrice({ int: +coinData.market_data?.current_price.usd.toFixed(2)})}`)
    setChange(`${evaluate24hChange({ change: +coinData.market_data?.price_change_24h_in_currency.usd, current: +coinData.market_data?.current_price.usd.toFixed(2) })}%`)
    evaluateNegative()
    setDate(parseDate(date))  
  }, [coinData])

  return (
    <DetailHeader 
      symbol={coinData.symbol} 
      currentPrice={currentPrice} 
      change={change}
      changeInt={+coinData.market_data?.price_change_24h_in_currency.usd.toFixed(2)}
      changeIsPositive={changeIsPositive}
      date={date}
    />
  )
}
const styles = StyleSheet.create({})
