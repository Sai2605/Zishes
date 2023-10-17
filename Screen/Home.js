import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Searchbar } from 'react-native-paper';

export default function Home() {
  return (
   
      <View style={styles.searchbar}>
    <Searchbar placeholder="Search Zishes.."/>
    </View> 
  )
}
const styles = StyleSheet.create({

    searchbar: {
      flex:1,
    backgroundColor: '#fff',
    padding:40,
  },
});
