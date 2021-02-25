import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home'
import CryptoDetail from '../screens/CryptoDetail'
import MostActive from '../screens/MostActive'
import { GraphActive, GraphDefault } from '../components/icons/Graph'
import { StarActive, StarDefault } from '../components/icons/Star'


const BottomTab = createMaterialBottomTabNavigator();
const ScreenOneStack = createStackNavigator();

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
      <ScreenOneStack.Navigator>
        <ScreenOneStack.Screen 
          name="Index"
          component={Home}
          options={{
            headerTitle: 'Index',
            ...navOptions
            }} />
        <ScreenOneStack.Screen 
            name="CryptoDetail"
            component={CryptoDetail}
            options={{
              ...navOptions
            }}
          />
      </ScreenOneStack.Navigator>
    );
}

function ScreenTwoNavigator(){
  return (
    <ScreenOneStack.Navigator>
      <ScreenOneStack.Screen 
        name="Most Active"
        component={MostActive}
        options={{
          headerTitle: 'Most Active',
          ...navOptions
          }} />
    </ScreenOneStack.Navigator>
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
        name="Most Active"
        component={ScreenTwoNavigator}
        options={{
          ...navOptions,
          tabBarIcon: ({ focused }) => <>{ focused ? <StarActive/> : <StarDefault />}</>
        }}
      />
    </BottomTab.Navigator>
  )
}
