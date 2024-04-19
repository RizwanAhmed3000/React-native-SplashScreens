import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Onboarding2() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Onboarding 02</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "orange",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        fontSize: 42,
        fontWeight: "600",
        color: "white",
    }
})