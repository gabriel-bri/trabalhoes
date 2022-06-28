import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export default function TitleScreen() {
    return (
    <View>
        <Text style={styles.titleText}>QUANTO FALTA?</Text>
    </View>   
    )
}

const styles = StyleSheet.create({
    titleText: {
        color: '#ffffff',
        fontSize: 12,
    }
})