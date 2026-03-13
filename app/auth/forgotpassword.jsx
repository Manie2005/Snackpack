import { StyleSheet, Text, View, useColorScheme, Pressable } from 'react-native'
import React, {useState} from 'react'
import { Colors } from '../../constants/colors'

const ForgotPassword = () => {
  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];
    const [method, setMethod] = useState("email");


  return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
    
    <View>
      <Text style={[styles.header, { color: theme.title }]}>
        Forgot Password
      </Text>

       <Text style={[styles.subHeader, { color: theme.text, opacity: 0.5, margin:5,fontSize:13, lineHeight:20 }]}>
Select which contact details should we use to reset your password </Text>


      <Pressable
        onPress={() => setMethod("email")}
        style={[
          styles.optionCard,
          {
            borderColor: method === "email" ? theme.warning : theme.uiBackground,
            backgroundColor: theme.uiBackground, margin:5
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
        onPress={() => setMethod("phone")}
        style={[
          styles.optionCard,
          {
            borderColor: method === "phone" ? theme.warning: theme.uiBackground,
            backgroundColor: theme.uiBackground
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

<View style={{marginTop:-10}}>
      <Pressable
                style={styles.verifyButton}
                onPress={() => {
                  const code = otp.join('');
                  console.log("OTP:", code);
                }}
              >
                <Text style={styles.verifyText}>Continue</Text>
              </Pressable>
</View>
    </View>
</View>

  )
}

export default ForgotPassword

const styles = StyleSheet.create({
   container: {
    flex: 1,
    padding: 20,
  },

  header: {
    fontSize: 26,
    marginLeft:5,
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
    marginTop:10,
    height:100
  },
  verifyButton: {
    backgroundColor: '#E10600',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40
  },

  verifyText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600'
  }

})