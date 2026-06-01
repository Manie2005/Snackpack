import React, {useState} from 'react'
import { StyleSheet, Text, View, useColorScheme, Image,ScrollView,Dimensions, Pressable } from 'react-native'
import { Link } from 'expo-router'
import { Colors } from '../../constants/colors'
import CongratsLogo from "../../assets/congrats.png";

const congrats = () => {
  const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light // default to light theme
  return (
  
  <View style={{ flex: 1, backgroundColor: theme.background }}>
    <View style={styles.container}>

 {/* Congratulation picture */}
      <View style={styles.CongratsLogoContainer}>
        <Image source={CongratsLogo} style={styles.CongratsLogo} resizeMode="contain" />
      </View> 
  

    {/* Header */}
         <Text style={[styles.header, { color: theme.text }]}>
          Congratulations!
         </Text>
   {/*Description */}
         <View style={styles.descriptionWrapper}>
   
   <Text style={[styles.paragraph, { color: theme.text}]}>
your account is complete, please enjoy the best{"\n"}menu from us      
     </Text>
</View>

 {/* Action Buttons */}
      <Pressable href="/signin" style={({pressed}) => [styles.primaryButton, pressed && styles.pressedButton] }>
        <Text style={styles.primaryButtonText}>Get Started</Text>
      </Pressable>
    </View>
     </View>
  )
}

export default congrats


const styles = StyleSheet.create({
   container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontWeight: '700',
    textAlign: 'center',
    marginTop:0,
    fontSize: 26,
    paddingBottom: 5,
  },
   paragraph: {
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
    opacity: 0.6,
    paddingBottom: 20,
  },
  descriptionWrapper: {
    width: '85%',
    alignItems: 'center',
    marginBottom: 10,
  },

 CongratsLogoContainer: {
    width: 400,
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginTop: -300,
  },
  

CongratsLogo: {
    width: '70%',
    height: '70%',
  },

  /* ---------- Button ---------- */
  primaryButton: {
    backgroundColor: '#E10600',
    marginTop: 10,
    padding: 15,
    borderRadius: 10,
    width: 350,
    alignItems: 'center',
    justifyContent: 'center',
  },
   pressedButton: {
    backgroundColor: '#E10600',
    marginTop: 10,
    padding: 15,
    borderRadius: 15,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    opacity:0.8
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  }

})