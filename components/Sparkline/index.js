import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Svg, { Path } from 'react-native-svg';
import SimplePreloader from '../SimplePreloader'

export default function Index(props) {
  return (
  <View style={styles.container}>
    {
      props.StringPathStroke ? 
      <Svg height="100" width="100%" children={props.children}>
        <Path d={props.StringPathFill} stroke="none" strokeWidth="0" fill="#13346d" />
        <Path d={props.StringPathStroke} stroke="#005dff" strokeWidth="2.5" fill="none" />
      </Svg>
      :
      <SimplePreloader />
    }
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: 20,
    borderBottomColor: '#282828',
    borderBottomWidth: 1,
  }
})
