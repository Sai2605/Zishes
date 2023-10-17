import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './Navigation/TabNavigation';

export default function App() {
  return (
    <View style={styles.container}>
    {/* <View style={styles.searchbar}>
    <Searchbar
    placeholder="Search Zishes.."
    />
    
   
    </View> */}
    <NavigationContainer>
      <TabNavigation/>
    </NavigationContainer>
      <StatusBar style="auto" /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
    searchbar: {
      flex:1,
    backgroundColor: '#fff',
    padding:40,
  },
});
