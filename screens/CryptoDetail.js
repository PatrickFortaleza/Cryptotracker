import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CryptoDetailCtrl from '../components/controllers/CryptoDetailCtrl'

export default function CryptoDetail({navigation, route}) {
  const { data } = route.params

  useEffect(() => {
    navigation.setOptions({ title: `${data.name}` })
  }, [])

  return (
    <CryptoDetailCtrl data={data} />
  )
}

const styles = StyleSheet.create({})
