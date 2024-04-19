import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Splash = ({ navigation }) => {
    useEffect(() => {
        const timeOut = setTimeout(() => {
            navigation.navigate("Onboarding")
        }, 3000)

        return () => clearTimeout(timeOut)
    }, [navigation])

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Splash Screen</Text>
        </SafeAreaView>
    )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    text:{
        fontSize: 42,
        fontWeight: "600",
        color: "white",
    }
})