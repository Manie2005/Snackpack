import { StyleSheet, Text, Image } from 'react-native'
import Logo from '../assets/Noodle-logo.png'
import { Link } from 'expo-router'

// themed view component
import ThemedView from '../components/ThemedView'

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      
      <Image source={Logo} style={styles.img} resizeMode="contain" />

      <Text style={styles.title}>kupa</Text>

      <Link href="/shop" style={styles.card}>
        <Text style={styles.cardText}>Get Started</Text>
      </Link>

    </ThemedView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  img: {
    height: 200,
    width: '100%',
    marginBottom:-40
  },

  title: {
    fontWeight: 'bold',
    fontSize: 32,
    color: '#000',
    marginTop: 5, // controls spacing between logo and text
  },

  card: {
    backgroundColor: "#E10600",
    marginTop: 50,
    padding: 15,
    borderRadius: 15,
  },

  cardText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center'
  },

  links: {
    marginTop: 10,
    borderBottomWidth: 1,
  },
})