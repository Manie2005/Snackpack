import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'

const RootLayout = () => {
  return (
    
        <Stack screenOptions={{
            headerStyle:{backgroundColor:`#255795`},
            headerTintColor: `#000`,
        }}>
            <Stack.Screen name="index" options={{title:`Home`, headerShown:false}} />
            <Stack.Screen name="about" options={{title:`About`}} />
            <Stack.Screen name="contact" options={{title:`Contact`}} />

        </Stack> 
      
   
  )
}

export default RootLayout

const styles = StyleSheet.create({})