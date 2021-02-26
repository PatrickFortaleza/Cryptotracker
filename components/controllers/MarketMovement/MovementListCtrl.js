import React, { useState, useEffect } from 'react'
import MovementList from '../../MarketMovement/MovementList'
import { useCrypto } from '../../../contexts/CryptoCurrencies'

export default function MovementListCtrl({navigation}) {
  const [topGainers, setTopGainers] = useState([])
  const [topLosers, setTopLosers] = useState([])
  const [mergedData, setMergedData] = useState({})
  const CryptoContext = useCrypto()
  const { marketData } = CryptoContext
 
  useEffect(() => {
    scrapeTopGainers(marketData)
    scrapeTopLosers(marketData)
  }, [marketData])

  useEffect(() => {
    setMergedData(mergeArrays(topGainers, topLosers))
  }, [topGainers, topLosers])

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

  const date = parseDate(new Date)

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

  const mergeArrays = (array1, array2) => {
    if(!array1 || !array2 || array1.length < 1 || array2.length < 1) return []
    const merged = [...array1, ...array2]
    return merged
  }

  return (
    <MovementList navigation={navigation} date={date} marketData={mergedData} gainers={topGainers} losers={topLosers} />
  )
}
