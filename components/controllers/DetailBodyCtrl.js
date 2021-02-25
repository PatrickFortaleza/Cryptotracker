import React from 'react'
import DetailBody from '../CryptoDetail/DetailBody'

export default function DetailBodyCtrl({coinData}) {

  const parseDate = (date) => {
    // Parse data into a date string
    const parsedDate = Date.parse(date);
    // if can't parse, return the original string
    if (!parsedDate) return date;
    // Make parsedDate into a new Date object
    const d = new Date(parsedDate);
    // config date options
    const dateOptions = { year: "numeric", month: "long", day: "2-digit" };
    // Set current date and time
    const currDate = new Intl.DateTimeFormat("en", dateOptions).format(d);
    // Return formatted date string
    const dateString = `${currDate}`;
    return dateString;
  };

  const formatPrice = ({int}) => {
    if(!int) return null
    var parts = int.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  }
  const marketcap = `$${formatPrice({int: coinData.market_data?.market_cap?.usd})}`
  const genesisDate = parseDate(coinData.genesis_date)
  const high = `$${formatPrice({int: coinData.market_data?.high_24h.usd.toFixed(2)})}`
  const low = `$${formatPrice({int: coinData.market_data?.low_24h.usd.toFixed(2)})}`

  return (
    <DetailBody 
      categories={coinData.categories}
      description={coinData.description?.en}
      genesis={genesisDate}
      hash={coinData.hashing_algorithm}
      marketcap={marketcap}
      high={high}
      low={low}
      imgURL={coinData.image?.large}
    />
  )
}

