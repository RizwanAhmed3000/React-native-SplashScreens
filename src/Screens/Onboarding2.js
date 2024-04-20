import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

export default function Onboarding2({ navigation }) {
    useEffect(() => {
        const timeOut = setTimeout(() => {
            navigation.navigate("Login")
        }, 3000)

        return () => clearTimeout(timeOut)
    }, [navigation])

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