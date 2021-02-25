import axios from 'axios'

const BASE_URL = 'https://api.coingecko.com/api/v3'

export const queryMarkets = async () => {
  let data
  try {
    const results = await axios.get(`${BASE_URL}/coins/markets?vs_currency=usd&per_page=250`)
    return results
  } catch (err) {
    return data = {
      error: 'could not retrieve market data'
    }
  }
}

export const queryCoin = async ({id}) => {
  let data
  try {
    const result = await axios.get(`${BASE_URL}/coins/${id}?sparkline=true`)
    return result
  } catch (err) {
    return data = {
      error: 'could not retrieve market data'
    }
  }

}