import { StyleSheet, Text, View, useColorScheme, Pressable, Image } from "react-native";
import React, { useState } from "react";
import { Colors } from "../../constants/colors";

import EmailLogo from "../../assets/email-logo.png";
import PhoneLogo from "../../assets/phone-logo.png";

const ForgotPassword = () => {
  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];

  const [method, setMethod] = useState("email");

  const options = [
    {
      id: "email",
      label: "Email",
      description: "Send to your email",
      icon: EmailLogo,
    },
    {
      id: "phone",
      label: "Phone Number",
      description: "Send to your phone number",
      icon: PhoneLogo,
    },
  ];

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.header, { color: theme.title }]}>
        Forgot Password
      </Text>

      <Text style={[styles.subHeader, { color: theme.text }]}>
        Select which contact details we should use to reset your password
      </Text>

      {options.map((option) => {
        const isActive = method === option.id;

        return (
          <Pressable
            key={option.id}
            onPress={() => setMethod(option.id)}
            style={[
              styles.optionCard,
              {
                borderColor: isActive ? theme.warning : theme.uiBackground,
                backgroundColor: theme.uiBackground,
              },
            ]}
          >
            <Image source={option.icon} style={[styles.icon,{
              backgroundColor: colorScheme ==="dark" ?"rgba(255,255,255,0.5)"
          : "rgba(0,0,0,0.08)",
            }]} resizeMode="contain" />

            <View style={styles.optionTextContainer}>
              <Text style={[styles.optionTitle, { color: theme.text }]}>
                {option.label}
              </Text>

              <Text style={[styles.optionDescription, { color: theme.text }]}>
                {option.description}
              </Text>
            </View>
          </Pressable>
        );
      })}

      <Pressable style={styles.verifyButton}>
        <Text style={styles.verifyText}>Continue</Text>
      </Pressable>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  header: {
    fontSize: 26,
    marginTop: 20,
    fontWeight: "900",
  },

  subHeader: {
    opacity: 0.5,
    marginTop: 6,
    fontSize: 13,
    lineHeight: 20,
    marginBottom: 20,
  },

  optionCard: {
    borderWidth: 1,
    height:100,
    borderRadius: 8,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },

  icon: {
    width: 40,
    height: 40,
    marginRight: 12,
    backgroundColor: "rgba(0,0,0,0.08)",
    borderRadius: 20,
    padding: 8,
  },

  optionTextContainer: {
    flex: 1,
  },

  optionTitle: {
    fontSize: 16,
    fontWeight: "600",
  },

  optionDescription: {
    fontSize: 12,
    opacity: 0.5,
    marginTop: 4,
  },

  verifyButton: {
    backgroundColor: "#E10600",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 25,
  },

  verifyText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});