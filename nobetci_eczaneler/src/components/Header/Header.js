import { View, Text } from 'react-native'
import React from 'react'
import styles from './Header.style'
import { SafeAreaView } from 'react-native-safe-area-context'
import Wave from '../../assets/images/wave.svg'
const Header = ({text}) => {
    return (
        <SafeAreaView style={styles.container}>
            <Wave width="100%" height='100' style={styles.wave} />
            <Text style={styles.title}>{text}</Text>
        </SafeAreaView>
    )
}

export default Header