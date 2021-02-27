import React from 'react';
import { StyleSheet } from 'react-native';
import { CryptoProvider } from './src/contexts/CryptoCurrencies'
import Navigation from './src/navigation'

// React Native
// ========================
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer styles={
      styles.container
    }>
      <CryptoProvider>
        <Navigation />
      </CryptoProvider>
    </NavigationContainer>
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
