import axios from 'axios'

const BASE_URL = 'https://api.coingecko.com/api/v3'

export const queryMarkets = async () => {
  let data
  try {
    const results = await axios.get(`${BASE_URL}/coins/markets?vs_currency=usd&per_page=100&page=1&sparkline=true&price_change_percentage=1y`)
    return results
  } catch (err) {
    return data = {
      error: 'could not retrieve market data'
    }
  }
}