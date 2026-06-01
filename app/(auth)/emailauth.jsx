import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  useColorScheme,
} from 'react-native';
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
    useRef(null),
  ];
const handleKeyPress = (e, index) => {
  if (e.nativeEvent.key !== 'Backspace') return;

  // Current box is empty, go back and clear previous
  if (otp[index] === '' && index > 0) {
    const newOtp = [...otp];

    newOtp[index - 1] = '';
    setOtp(newOtp);

    inputs[index - 1].current?.focus();
  }
};

  const handleChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < 3) {
      inputs[index + 1].current?.focus();
    }
  };

  const handleResend = () => {
    console.log('Resending OTP to:', email);
  };

  const handleVerify = () => {
    const code = otp.join('');
    console.log('OTP:', code);

    router.push('/congrats');
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme.background },
      ]}
    >
      <View style={styles.headerContainer}>
        <Text style={[styles.header, { color: theme.title }]}>
          Verification Email
        </Text>

        <Text style={[styles.subHeader, { color: theme.text }]}>
          Enter the code we sent to{' '}
          <Text
            style={{
              fontWeight: 'bold',
              color: theme.text,
            }}
          >
            {email}
          </Text>
        </Text>

        {/* OTP INPUTS */}
        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
  key={index}
  ref={inputs[index]}
  style={[
    styles.otpInput,
    {
      borderColor: theme.border,
      color: theme.text,
    },
  ]}
  keyboardType="number-pad"
  maxLength={1}
  value={digit}
  onChangeText={(text) => handleChange(text, index)}
  onKeyPress={(e) => handleKeyPress(e, index)}
/>
          ))}
        </View>

        {/* RESEND */}
        <View style={styles.resendContainer}>
          <Text
            style={[
              styles.linkText,
              {
                color: theme.text,
                opacity: 0.4,
              },
            ]}
          >
            Didn't receive the code?
          </Text>

          <Pressable onPress={handleResend}>
            <Text
              style={{
                color: theme.warning,
                paddingLeft: 5,
              }}
            >
              Resend Code
            </Text>
          </Pressable>
        </View>

        {/* VERIFY BUTTON */}
        <View style={styles.verifyContainer}>
          <Pressable
            style={({ pressed }) => [
              styles.verifyButton,
              pressed && styles.pressedButton,
            ]}
            onPress={handleVerify}
          >
            <Text style={styles.verifyText}>
              Continue
            </Text>
          </Pressable>
        </View>
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
    textAlign: 'center',
  },

  subHeader: {
    fontSize: 14,
    opacity: 0.6,
    marginTop: 10,
    textAlign: 'center',
  },

  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
  },

  otpInput: {
    width: 65,
    height: 65,
    borderWidth: 1,
    borderRadius: 12,
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '700',
  },

  resendContainer: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  linkText: {
    fontWeight: '500',
  },

  verifyContainer: {
    marginTop: 50,
    alignItems: 'center',
    width: '100%',
  },

  verifyButton: {
    backgroundColor: '#E10600',
    width: '90%',
    maxWidth: 350,
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: 'center',
  },

  pressedButton: {
    opacity: 0.8,
    width: '70%'

  },

  verifyText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});