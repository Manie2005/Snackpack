import React, {useState} from 'react'
import { StyleSheet, Text, View, useColorScheme, Image,ScrollView,Dimensions } from 'react-native'
import { Link } from 'expo-router'
import { Colors } from '../constants/colors'

import LogoMain from '../assets/saladbowl.png'
import LogoBadge1 from '../assets/saladbowl2.png'
import LogoBadge2 from '../assets/saladbowl3.png'
import LogoBadge3 from '../assets/deliveryman.jpg'
import LogoBadge4 from '../assets/deliveryman2.jpg'
import LogoBadge5 from '../assets/deliveryman3.jpg'

const { width,height } = Dimensions.get('window')


const Shop = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light // default to light theme
  

  return (
    <View style={{flex:1}}>

    <ScrollView
  horizontal
  pagingEnabled
  showsHorizontalScrollIndicator={false}
  /* The onscroll dot effect */

 onScroll={(event) => {
    const slide = Math.round(
      event.nativeEvent.contentOffset.x / width
    )
    setActiveIndex(slide)
  }}
  scrollEventThrottle={16}
>
 
  {/* Slide 1 */}
    <View style={[styles.slide, { backgroundColor: theme.background }]}>

    <View style={[styles.container]}>

      {/* Main Salad Bowl */}
      <View style={styles.mainImageContainer}>
        <Image source={LogoMain} style={styles.mainImage} resizeMode="contain" />
      </View>

      {/* Badge Logos */}
      <View style={styles.badge1Container}>
        <Image source={LogoBadge1} style={styles.badgeImage} resizeMode="contain" />
      </View>

      <View style={styles.badge2Container}>
        <Image source={LogoBadge2} style={styles.badgeImage} resizeMode="contain" />
      </View>

      {/* Header */}
      <Text style={[styles.header, { color: theme.text }]}>
        All your {"\n"} favourite foods
      </Text>

      {/* Description */}
      <View style={styles.descriptionWrapper}>
        <Text style={[styles.paragraph, { color: theme.text }]}>
          Order your favourite menu with easy,{"\n"}on-demand delivery
        </Text>
      </View>

      {/* Action Buttons */}
      <Link href="/signin" style={styles.primaryButton}>
        <Text style={styles.primaryButtonText}>Continue</Text>
      </Link>

      <Link href="/signup" style={styles.secondaryButton}>
        <Text style={styles.secondaryButtonText}>Sign Up</Text>
      </Link>

    </View>
    </View>

    {/* Slide 2 */}

    <View style={[styles.slide, { backgroundColor: theme.background }]}>

    <View style={[styles.container]}>

      {/* Main Salad Bowl */}
      <View style={styles.circleContainer}>
        <Image source={LogoBadge3} style={styles.badgeImage1} resizeMode="cover" />
      </View>

      {/* Badge Logos */}
      <View style={styles.badge5Container}>
        <Image source={LogoBadge4} style={styles.badgeImage2} resizeMode="cover" />
      </View>

      <View style={styles.badge2Container}>
        <Image source={LogoBadge5} style={styles.badgeImage2} resizeMode="cover" />
      </View>

      {/* Header */}
      <Text style={[styles.header, { color: theme.text }]}>
        Get delivery at your {"\n"} doorstep
      </Text>

      {/* Description */}
      <View style={styles.descriptionWrapper}>
        <Text style={[styles.paragraph, { color: theme.text }]}>
         Your ready order will be delivered{"\n"}quickly by our courier
        </Text>
      </View>

      {/* Action Buttons */}
      <Link href="/auth/signup" style={styles.primaryButton}>
        <Text style={styles.primaryButtonText}>Get Started</Text>
      </Link>

      <Link href="/auth/signin" style={styles.secondaryButton}>
        <Text style={styles.secondaryButtonText}>Sign In</Text>
      </Link>

    </View>
    </View>
    </ScrollView>
  
   <View style={styles.pagination}>
  {[0,1].map((_, index) => (
    <View
      key={index}
      style={[
        styles.dot,
        activeIndex === index && styles.activeDot
      ]}
    />
  ))}
</View>
</View>
  )

}

export default Shop
