import React from 'react';
import { StyleSheet, View } from 'react-native';
import { CryptoProvider } from './contexts/CryptoCurrencies'

// React Native
// ========================
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
// ========================
import Home from './screens/Home'
import CryptoDetail from './screens/CryptoDetail'

const Stack = createStackNavigator();

const navOptions = {
  headerStyle: {
    backgroundColor: '#191919',
    elevation: 0,
    shadowColor: '#333',
  },
  headerTintColor: '#ccc',
  headerTitleStyle: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: 'white'
  }
}

export default function App() {
  return (
    <NavigationContainer>
      <CryptoProvider>
        <Stack.Navigator>
          <Stack.Screen 
            name="Home"
            options={{ 
              title: 'Blockchain Index', 
              ...navOptions
            }} 
            component={Home}
          />
          <Stack.Screen 
            name="CryptoDetail"
            component={CryptoDetail}
            options={{
              ...navOptions
            }}
          />
        </Stack.Navigator>
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
