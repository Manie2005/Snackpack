import React, {useState} from 'react'
import { StyleSheet, Text, View, useColorScheme, Image,ScrollView,Dimensions } from 'react-native'
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
          Congratulation!
         </Text>
   
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

})