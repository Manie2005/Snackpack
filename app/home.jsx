import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
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
    marginTop: 20,
    marginHorizontal: 20,
    backgroundColor: '#E10600',
    borderRadius: 16,
    padding: 20,
    height:150,
    
  },

  deliveryText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
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