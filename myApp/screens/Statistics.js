import { View, SafeAreaView, ScrollView, Text } from 'react-native'
import React from 'react'

export default function Statistics() {
  return (
    <SafeAreaView>
    <ScrollView>
    <View style={{flex: 1, alignItems:"center", justifyContent: "center"}}>
      <Text style={{marginTop: 70}}>Statistics</Text>
    </View>

    </ScrollView>
    </SafeAreaView>
  )
}