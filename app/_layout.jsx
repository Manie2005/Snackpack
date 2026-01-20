import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'
import { Colors } from '../constants/colors'
import { StatusBar } from 'expo-status-bar'

const RootLayout = () => {
  const colorScheme= useColorScheme()
 const theme= Colors[colorScheme] ?? Colors.light //Sets light theme as default
  return (
    <>
    <StatusBar value="auto"/>
        <Stack screenOptions={{
            headerStyle:{backgroundColor:theme.navBackground},
            headerTintColor: theme.title,
        }}>
            <Stack.Screen name="index" options={{title:``, headerShown:false}} />
            <Stack.Screen name="about" options={{title:``}} />
            <Stack.Screen name="contact" options={{title:``}} />
            <Stack.Screen name="shop" options={{title:``}} />

        </Stack> 
      </>
   
  )
}

export default RootLayout

const styles = StyleSheet.create({})