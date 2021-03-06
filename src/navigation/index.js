import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home'
import CryptoDetail from '../screens/CryptoDetail'
import MarketMovers from '../screens/MarketMovers'
import { GraphActive, GraphDefault } from '../components/icons/Graph'
import { StarActive, StarDefault } from '../components/icons/Star'


const BottomTab = createMaterialBottomTabNavigator();
const ScreenStack = createStackNavigator();

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

function ScreenOneNavigator() {
    return (
      <ScreenStack.Navigator>
        <ScreenStack.Screen 
          name="Index"
          component={Home}
          options={{
            headerTitle: 'Index',
            ...navOptions
            }} />
        <ScreenStack.Screen 
            name="CryptoDetail"
            component={CryptoDetail}
            options={{
              ...navOptions
            }}
          />
      </ScreenStack.Navigator>
    );
}

function ScreenTwoNavigator(){
  return (
    <ScreenStack.Navigator>
      <ScreenStack.Screen 
        name="Market Movers"
        component={MarketMovers}
        options={{
          headerTitle: 'Market Movers',
          ...navOptions
          }} />
      <ScreenStack.Screen 
        name="CryptoDetail"
        component={CryptoDetail}
        options={{
          ...navOptions
        }} />
    </ScreenStack.Navigator>
  )
}

export default function index() {
  return (
    <BottomTab.Navigator
      barStyle={{ 
        backgroundColor: '#1A1A1A', 
        paddingBottom: 5,
        paddingTop: 5,
        borderTopColor: '#333',
        borderWidth: 1
      }}
      activeColor="#3273ff"
    >
      <BottomTab.Screen 
        name="Index"
        component={ScreenOneNavigator}
        options={{
          ...navOptions,
          tabBarIcon: ({ focused }) => <>{ focused ? <GraphActive/> : <GraphDefault />}</>
        }}
      />
      <BottomTab.Screen 
        name="Market Movers"
        component={ScreenTwoNavigator}
        options={{
          ...navOptions,
          tabBarIcon: ({ focused }) => <>{ focused ? <StarActive/> : <StarDefault />}</>
        }}
      />
    </BottomTab.Navigator>
  )
}
