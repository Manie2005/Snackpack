import { Pressable, StyleSheet, Text, View, useColorScheme, Image } from 'react-native'
import React from 'react'
import { Stack, router } from 'expo-router'
import { Colors } from '../constants/colors'
import { StatusBar } from 'expo-status-bar'
import Logo from '../assets/Noodle-logo.png'

const RootLayout = () => {

  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  /* ---------------- SHOP HEADER ---------------- */

  const ShopHeaderTitle = () => (
    <View style={styles.logoContainer}>
      <Image
        source={Logo}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={[styles.logoText, { color: theme.title }]}>
        Kupa
      </Text>
    </View>
  )

  const ShopHeaderRight = () => (
    <>
      <Pressable
        onPress={() => router.push('/about')}
        style={styles.headerLink}
      >
        <Text style={{ color: theme.text }}>About Us</Text>
      </Pressable>

      <Pressable
        onPress={() => router.push('/contact')}
        style={styles.headerLink}
      >
        <Text style={{ color: theme.text }}>Contact Us</Text>
      </Pressable>
    </>
  )

  return (
    <>
      <StatusBar style="auto" />

      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: theme.navBackground },
          headerTintColor: theme.title,
        }}
      >

        {/* ---------- MAIN ---------- */}

        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
            headerBackVisible: false,
            gestureEnabled: false
          }}
        />

        {/* ---------- INFO ---------- */}

        <Stack.Screen name="about" options={{ title: "" }} />
        <Stack.Screen name="contact" options={{ title: "" }} />

        {/* ---------- AUTH ---------- */}

        <Stack.Screen name="auth/signin" options={{ title: "" }} />
        <Stack.Screen name="auth/signup" options={{ title: "" }} />
        <Stack.Screen name="auth/forgotpassword" options={{ title: "" }} />

        <Stack.Screen
          name="auth/emailauth"
          options={{
            title: "",
            headerBackVisible: false,
            gestureEnabled: false
          }}
        />

        {/* ---------- SHOP ---------- */}

        <Stack.Screen
          name="shop"
          options={{
            headerBackVisible: false,
            gestureEnabled: false,
            headerTitle: ShopHeaderTitle,
            headerRight: ShopHeaderRight
          }}
        />

      </Stack>
    </>
  )
}

export default RootLayout

const styles = StyleSheet.create({

  logoContainer: {
    flexDirection: "row",
    alignItems: "center"
  },

  logo: {
    width: 50,
    height: 50,
    marginRight: -5
  },

  logoText: {
    fontWeight: "bold",
    fontSize: 20,
    paddingTop: 10
  },

  headerLink: {
    marginRight: 15
  }

})