import { StyleSheet, Text, View, useColorScheme, Pressable } from 'react-native'
import React, {useState} from 'react'
import { Colors } from '../../constants/colors'

const ForgotPassword = () => {
  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];
    const [method, setMethod] = useState("email");


  return (
    <View>
      <Text style={[styles.header, { color: theme.title }]}>
        Forgot Password
      </Text>

       <Text style={[styles.subHeader, { color: theme.text, opacity: 0.5, margin:18,fontSize:13, lineHeight:20 }]}>
Select which contact details should we use to reset your password </Text>


      <Pressable
        onPress={() => setMethod("email")}
        style={[
          styles.optionCard,
          {
            borderColor: method === "email" ? theme.warning : theme.uiBackground,
            backgroundColor: theme.uiBackground, margin:20
          }
        ]}
      >
        <Text style={{ color: theme.text, fontWeight: "600" }}>
          Email
        </Text>

        <Text style={{ color: theme.text, opacity: 0.5 }}>
          Send to your email
        </Text>
      </Pressable>




      <Pressable
        onPress={() => setMethod("email")}
        style={[
          styles.optionCard1,
          {
            borderColor: method === "email" ? theme.warning : theme.uiBackground,
            backgroundColor: theme.uiBackground, margin:20
          }
        ]}
      >
        <Text style={{ color: theme.text, fontWeight: "600" }}>
          Phone Number
        </Text>

        <Text style={{ color: theme.text, opacity: 0.5 }}>
          Send to your phone number
        </Text>
      </Pressable>

    </View>


  )
}

export default ForgotPassword

const styles = StyleSheet.create({
  header: {
    fontSize: 26,
    marginLeft:15,
    marginTop:20,
    fontWeight: "900",
  },
   optionCard: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 18,
    marginTop: 15,
    height:100
  },
  optionCard1: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 18,
    marginTop:0,
    height:100
  },
})