import { StyleSheet, Text, View,TextInput,Pressable,useColorScheme,Image } from 'react-native';
import React from 'react';
import {Link, useRouter} from 'expo-router';
import { Colors } from '../../constants/colors';

const EmailAuth = () => {
     const colorScheme = useColorScheme();
        const theme = Colors[colorScheme] ?? Colors.light;
            const router = useRouter();
        
  return (
    <View style={[styles.container,{backgroundColor: theme.background}]}>
     <View style={styles.headerContainer}>
      <Text style={[styles.header, { color: theme.title }]}>Verification Email</Text>
  <Text style={[styles.subHeader, { color: theme.text }]}>
                  Please send the code we just sent to
                  </Text>
    </View>
    </View>
  )
}

export default EmailAuth

const styles = StyleSheet.create({
     container: {
        flex: 1,
        padding: 20,
    },

    headerContainer: {
        marginTop: 20,
        marginBottom: 30,
    },
    subHeader: {
        fontSize: 14,
        opacity: 0.6,
        marginTop: 10,
        textAlign:'center'
    },
    header: {
        fontSize: 26,
        fontWeight: '900',
textAlign:'center' }
})