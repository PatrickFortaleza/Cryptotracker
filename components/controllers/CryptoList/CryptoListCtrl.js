import React from 'react'
import CryptoList from '../../CryptoList/CryptoList'
import { useCrypto } from '../../../contexts/CryptoCurrencies'

export default function CryptoListCtrl({navigation}) {
  const CryptoContext = useCrypto()
  const { marketData } = CryptoContext


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

  return (
    <CryptoList navigation={navigation} date={date} marketData={marketData} />
  )
}