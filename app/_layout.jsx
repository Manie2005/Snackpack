import { Pressable, StyleSheet, Text, View, useColorScheme, Image } from 'react-native'
import React from 'react'
import { Slot, Stack, router } from 'expo-router'
import { Colors } from '../constants/colors'
import { StatusBar } from 'expo-status-bar'
import Logo from '../assets/Noodle-logo.png'

const RootLayout = () => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light //Sets light theme as default
  return (
    <>
      <StatusBar value="auto" />
      <Stack 
      screenOptions={{
        headerStyle: { backgroundColor: theme.navBackground },
        headerTintColor: theme.title,


      }}>
        
        <Stack.Screen name="index" options={{ title: ``, headerShown: false, headerBackVisible: false,   // hides the back button on the header
    gestureEnabled: false  }} />
        <Stack.Screen name="about" options={{ title: `` }} />
                <Stack.Screen name="home" options={{ title: `` }} />

        <Stack.Screen name="contact" options={{ title: `` }} />
        <Stack.Screen name="(auth)/signin" options={{ title: `` }} />
                <Stack.Screen name="(auth)/forgotpassword" options={{ title: `` }} />

                <Stack.Screen name="(auth)/emailauth" options={{ title: ``, headerBackVisible: false,   // hides the back button on the header
    gestureEnabled: false  }} />
                <Stack.Screen name="(auth)/signup" options={{ title: `` }} />
                <Stack.Screen name="(auth)/congrats" options={{ title: `` }} />

        <Stack.Screen name="shop" options={{ headerBackVisible: false,   // hides the back button on the header
    gestureEnabled: false, 
          headerTitle: () => (
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image 
          source={Logo} 
          style={{ width: 50, height: 50, marginRight:-5 }} // adjust size
          resizeMode="contain"
        />
           <Text style={{ fontWeight: 'bold', fontSize: 20, color: theme.title,paddingTop:10 }}>
          Snacks
        </Text>
      </View>
    ),  headerRight: () => (
            <>

              <Pressable onPress={ //this code displays the about and contact buttons in the header section//
                () => router.push('/about')} style={{ marginRight: 15}}>
                <Text style={{color:theme.text} }>About Us</Text>

<></>
              </Pressable>
              <Pressable onPress={
                () => router.push('/contact')} style={{ marginRight: 15 }}>
                <Text style={{color:theme.text} }>Contact Us</Text>

              </Pressable>

            </>
          )
        }} />

      </Stack>
    </>  )
}

export default RootLayout

const styles = StyleSheet.create({})