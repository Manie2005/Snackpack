import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { Colors } from '../constants/colors'
const Contact = () => {
  const colorScheme= useColorScheme()
     const theme= Colors[colorScheme] ?? Colors.light //Sets light theme as default
  return (
    <View style={[styles.container,{backgroundColor:theme.background, color: theme.text}]}>
      <Text style={styles.title}>Contact Us</Text>
      <Link href= "/" style={styles.links}>Back Home</Link>
      
    </View>
  )
}

export default Contact

const styles = StyleSheet.create({
    container:{
        flex:1,
justifyContent:'center',
alignItems:'center',
backgroundColor:'#fff'
    },
links:{
marginTop:10,
borderBottomWidth:1
},
    title:{
fontWeight:'bold',
fontSize:24
    },
})