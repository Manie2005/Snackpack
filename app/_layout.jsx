import { Pressable, StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import { Slot, Stack, router } from 'expo-router'
import { Colors } from '../constants/colors'
import { StatusBar } from 'expo-status-bar'

const RootLayout = () => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light //Sets light theme as default
  return (
    <>
      <StatusBar value="auto" />
      <Stack screenOptions={{
        headerStyle: { backgroundColor: theme.navBackground },
        headerTintColor: theme.title,

      }}>
        <Stack.Screen name="index" options={{ title: ``, headerShown: false }} />
        <Stack.Screen name="about" options={{ title: `` }} />
        <Stack.Screen name="contact" options={{ title: `` }} />
        <Stack.Screen name="auth/signin" options={{ title: `` }} />
        <Stack.Screen name="shop" options={{
          title: ``, headerRight: () => (
            <>

              <Pressable onPress={ //this code displays the about and contact buttons in the header section//
                () => router.push('/about')} style={{ marginRight: 15}}>
                <Text style={{color:theme.text} }>About Us</Text>

              </Pressable>
              <Pressable onPress={
                () => router.push('/contact')} style={{ marginRight: 15 }}>
                <Text style={{color:theme.text} }>Contact Us</Text>

              </Pressable>

            </>
          )
        }} />

      </Stack>
    </>

  )
}

export default RootLayout

const styles = StyleSheet.create({})