import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
const Contact = () => {
  return (
    <View style={styles.container}>
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