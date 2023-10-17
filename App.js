import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import * as React from 'react';

export default function App() {
  return (
    <View style={styles.container}>
    <View style={styles.searchbar}>
    <Searchbar
    placeholder="Search Zishes.."
    /></View>
      <StatusBar style="auto" /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
searchbar: {
    flex: 1,
    backgroundColor: 'green',
    placeholder: "uagd",
    alignItems: 'center',
    justifyContent:'flex-start',
    padding:40,
  },
});
