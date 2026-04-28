import { StyleSheet, Text, View, TextInput, Pressable, useColorScheme } from 'react-native';
import React, { useState, useRef } from 'react';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { Colors } from '../../constants/colors';

const EmailAuth = () => {

  const { name, email, password } = useLocalSearchParams();

  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  const router = useRouter();

  const [otp, setOtp] = useState(['', '', '', '']);

  const inputs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null)
  ];

  const handleChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < 3) {
      inputs[index + 1].current.focus();
    }
  };

  const handleResend = () => {
    console.log("Resending OTP to:", email);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>

      <View style={styles.headerContainer}>
        <Text style={[styles.header, { color: theme.title }]}>
          Verification Email
        </Text>

       <Text style={[styles.subHeader, { color: theme.text }]}>
          Enter the code we sent to <Text style={{ fontWeight: 'bold', color: theme.text }}>
    {email}
  </Text>
        </Text>

        {/* OTP INPUT */}
        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={inputs[index]}
              style={[
                 styles.otpInput,
                { borderColor: theme.border, color: theme.text }
              ]}
              keyboardType="number-pad"
              maxLength={1}
              value={digit}
              onChangeText={(text) => handleChange(text, index)}
            />
          ))}
        </View>

        {/* RESEND */}
        <View style={styles.resendContainer}>
          <Text style={[styles.linkText, { color: theme.text,opacity:0.4 }]}>
            Didn't receive the code?
          </Text>

          <Pressable onPress={handleResend}>
            <Text style={{ color: theme.warning, paddingBottom:5, paddingLeft:5 }}>Resend Code</Text>
          </Pressable>
        </View>

        {/* VERIFY BUTTON */}
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
  );
};

export default EmailAuth;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
  },

  headerContainer: {
    marginTop: 20,
    marginBottom: 30,
  },
  

  header: {
    fontSize: 26,
    fontWeight: '900',
    textAlign: 'center'
  },

  subHeader: {
    fontSize: 14,
    opacity: 0.6,
    marginTop: 10,
    textAlign: 'center'
  },

  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
  },

  otpInput: {
    borderWidth: 1,
    borderRadius: 12,
    width: 60,
    height: 60,
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '700'
  },

  resendContainer: {
    marginTop: 40,
    alignItems: 'center',
    flexDirection:'row',
    justifyContent:'center'
  },

  linkText: {
    textAlign: 'center',
    fontWeight: '500',
    marginBottom: 5
  },

  verifyButton: {
    backgroundColor: '#E10600',
    padding: 10,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 40
  },

  verifyText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600'
  }

});