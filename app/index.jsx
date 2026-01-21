import { StyleSheet, Text, View, Image } from 'react-native'
import Logo from '../assets/snackpack.png'
import { Link } from 'expo-router'

//themedview component import

import ThemedView from '../components/ThemedView'
const Home = () => {
  return (
    <ThemedView style={styles.container}>
    <Image source={Logo} style={styles.img} resizeMode='contain' />
          {/* <Text style ={styles.title}>Welcome everyone</Text>
            <Text style ={styles.secondtitle}>to the one-stop app for your treats</Text> */}
                         <Link href= "/shop" style={styles.card}>
                        
                                       <Text style ={styles.cardText}>Get Started </Text>
                                 </Link>

          

    </ThemedView>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
justifyContent:'center',
alignItems:'center',
// backgroundColor:'#fff'
    },

//     title:{
// fontWeight:'bold',
// fontSize:24
//     },
//  secondtitle:{
// marginTop:10,
// marginBottom:5
//     },
card:{
    backgroundColor: "#E10600",
    marginTop:15,
    padding:15,
    borderRadius:15,
    fontWeight:'bold'
},
img:{
marginTop:120,
height:250,
width:`100%`,
},
cardText:{
 color: '#FFF',
    fontSize: 14,
    fontWeight: '500',
textAlign:'center'    
},
links:{
marginTop:10,
borderBottomWidth:1,
},
})