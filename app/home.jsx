import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SearchBar() {
  const [search, setSearch] = useState('');

  return (
    <>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons
          name="search"
          size={20}
          color="#888"
          style={styles.icon}
        />

        <TextInput
          style={styles.input}
          placeholder="Search on Kupa"
          placeholderTextColor="#888"
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {/* Delivery Card */}
     <View style={styles.deliveryCard}>
  <Text style={styles.deliveryText}>
    Delivery to Home
  </Text>

  <Text style={styles.deliveryParagraph}>
    Plot 56 Oron road, Uyo.
  </Text>
  <Pressable href="/map" style={styles.secondaryButton}>
          <Text style={styles.secondaryButtonText}>2.4km</Text>
        </Pressable>
</View>

       {/* Promo Card */}
      <View style={styles.promoCard}>
        <Text style={styles.promoText}>
Chicken Teriyaki        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    borderRadius: 12,
  },

  icon: {
    marginRight: 8,
  },

  input: {
    flex: 1,
    fontSize: 16,
  },

  deliveryCard: {
    marginHorizontal: 20,
    backgroundColor: '#E10600',
    borderRadius: 16,
    padding: 20,
    height:150,
    marginTop:30
  },

  deliveryText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
      },

       deliveryParagraph: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 400,
    paddingTop:5
      },

      secondaryButton: {
    backgroundColor: '#fff',
    marginTop: 15,
    padding: 10,
    borderRadius: 15,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryButtonText: {
    color: '#E10600',
    fontSize: 8,
    fontWeight: '600',
    textAlign: 'center',
  },
    promoCard: {
    marginTop: 20,
    marginHorizontal: 20,
    backgroundColor: '#d4d4d4',
    borderRadius: 16,
    padding: 20,
    height:150,
    
  },

  promoText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
      },
});