import React from 'react'
import { StyleSheet, Text, SafeAreaView } from 'react-native'
import SparklineCtrl from '../controllers/SparklineCtrl'
import DetailHeaderCtrl from '../controllers/DetailHeaderCtrl.js'

export default function CryptoDetail({coinData, sparkLine}) { 
  return (
    <SafeAreaView style={styles.container}>
      <DetailHeaderCtrl coinData={coinData} />
      <SparklineCtrl sparkLine={sparkLine} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#191919"
  }
})
