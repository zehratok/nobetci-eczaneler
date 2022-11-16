import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import styles from './Home.style'

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>Home</Text>
    </ScrollView>
  )
}

export default Home