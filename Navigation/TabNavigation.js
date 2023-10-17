import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../Screen/Home';
import Categories from '../Screen/Categories';
import HotDeals from '../Screen/HotDeals';
import Whislist from '../Screen/Whislist';
import Account from '../Screen/Account';

export default function TabNavigation() {

    const Tab = createBottomTabNavigator();
    return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Categories} />
      <Tab.Screen name="HotDeals" component={HotDeals} />
      <Tab.Screen name="Whislist" component={Whislist} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
}
  