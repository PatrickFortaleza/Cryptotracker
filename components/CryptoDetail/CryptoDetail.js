import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import SparklineCtrl from '../controllers/Sparkline/SparklineCtrl'
import DetailHeaderCtrl from '../controllers/CryptoDetail/DetailHeaderCtrl'
import DetailBodyCtrl from '../controllers/CryptoDetail/DetailBodyCtrl'

export default function CryptoDetail({coinData, sparkLine}) { 
  return (
    <SafeAreaView style={styles.container}>
      <DetailHeaderCtrl coinData={coinData} />
      <SparklineCtrl sparkLine={sparkLine} />
      <DetailBodyCtrl coinData={coinData} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#191919",
    flex: 1,
    flexDirection: 'column'
  }
})
