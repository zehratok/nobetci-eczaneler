import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './About.style'
import { Header } from '../../components'

const About = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header text='Hakkında' />
      <View style={styles.aboutCard} >
        <Image source={require('../../assets/images/marker.png')} style={styles.image} />
        <Text style={styles.textHeader}> Nöbetçi Eczaneler uygulaması, </Text>
        <Text style={styles.text}> Türkiye'deki nöbetçi eczaneleri göstermektedir. </Text>
        <Text style={styles.text}> Uygulama içerisinde bulunan veriler, </Text>
        <Text style={styles.text}> NosyApi üzerinden alınmaktadır. </Text>
        <View style={styles.footer}>
          <Text style={styles.textFooter}> React Native ile geliştirilmiştir. </Text>
          <Text style={styles.textFooter}> @zehratok Kasım,2022 </Text>
        </View>
      </View>
    </SafeAreaView >

  )
}

export default About