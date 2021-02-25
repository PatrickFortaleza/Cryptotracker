import React from 'react';
import { StyleSheet } from 'react-native';
import { CryptoProvider } from './contexts/CryptoCurrencies'
import Navigation from './navigation'

// React Native
// ========================
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
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
