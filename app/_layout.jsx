import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'
import { Colors } from '../constants/colors'

const RootLayout = () => {
  const colorScheme= useColorScheme()
 const theme= Colors[colorScheme] ?? Colors.light //Sets light theme as default
  return (
    
        <Stack screenOptions={{
            headerStyle:{backgroundColor:theme.navBackground},
            headerTintColor: theme.title,
        }}>
            <Stack.Screen name="index" options={{title:`Home`, headerShown:false}} />
            <Stack.Screen name="about" options={{title:`About`}} />
            <Stack.Screen name="contact" options={{title:`Contact`}} />

        </Stack> 
      
   
  )
}

export default RootLayout

const styles = StyleSheet.create({})