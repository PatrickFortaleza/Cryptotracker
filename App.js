import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home'
import { CryptoProvider } from './contexts/CryptoCurrencies'

export default function App() {
  return (
    <View style={styles.container}>
      <CryptoProvider>
        <Home />
      </CryptoProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191919',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
