import { StyleSheet, Text, View,useColorScheme, Image } from 'react-native'
import React from 'react'
import { Colors } from '../constants/colors'
import { Link  } from 'expo-router'
import Logo2 from '../assets/FoodDelivery.png'


const Shop = () => {
     const colorScheme= useColorScheme()
       const theme= Colors[colorScheme] ?? Colors.light //Sets light theme as default
  return (
     <View style={[styles.container,{backgroundColor:theme.background}]}>
         {/* <Text style={styles.title}></Text> */}
         {/* <Link href= "/" style={styles.links}>Back Home</Link> */}
             <Image source={Logo2} style={styles.img} resizeMode='contain' />

             <Text style={[styles.header,{color: theme.text}]}>
              Snack smarter with {"\n"} Snackpack
             </Text>
            <View style={{width:'90%', alignItems:'center'}}>
             <Text style={[styles.paragraph,{color: theme.text}]}>
Sign up to explore curated snacks, exclusive deals, and quick checkout. </Text></View>
             <Link href= "/shop" style={styles.cards}>

               <Text style ={styles.cardTexts}> Continue</Text>
         </Link>
              <Link href= "/shop" style={styles.card}>

               <Text style ={styles.cardText}> Sign in</Text>
         </Link>
        <Text></Text>
       </View>
  )
}

export default Shop

const styles = StyleSheet.create({ container:{
        flex:1,
justifyContent:'center',
alignItems:'center',
backgroundColor:'#fff'
    },
    card:{
    backgroundColor: '#E10600',
    marginTop:10,
    padding:15,
    borderRadius:15,
    width:'90%',
    fontWeight:'bold',
    alignItems:'center',
    justifyContent:'center'
},
 cards:{
    backgroundColor: '#fff',
    marginTop:5,
    padding:15,
    borderRadius:15,
    width:'90%',
    fontWeight:'bold',
    alignItems:'center',
    justifyContent:'center'
},
cardText:{
 color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
textAlign:'center'    
},
cardTexts:{
 color: '#E10600',
    fontSize: 18,
    fontWeight: '600',
textAlign:'center'    
},
links:{
marginTop:10,
borderBottomWidth:1,

},
paragraph:{
fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
    opacity: 0.6,
    marginBottom:20
},
header:{
fontWeight:'900',
    textAlign: 'center',

fontSize: 26,
paddingBottom:12,
},
img:{
paddingBottom:0,
height:500,
width:`100%`,
},
    title:{
fontWeight:'bold',
fontSize:24
    },})