import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useState } from 'react'

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [badEmail, setBadEmail] = useState("");
    const [password, setPassword] = useState('');
    const [badPassword, setBadPassword] = useState("");
    let isValid = false;

    const validateEmail = () => {

        if (email == "") {

            setBadEmail("Enter Your Email")
            return false

        } else if (email != '' && !email.toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )) {

            setBadEmail("Email is not valid");
            return false

        } else if (email != "" && email.toLowerCase().match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )) {

            setBadEmail("");
            return true
        }
    }

    const validatePassword = () => {

        if (password == "") {

            setBadPassword("Enter Your password")
            return false

        } else if (password != '' && password.length < 8) {

            setBadPassword("Password must be atleast 8 character long");
            return false

        } else if (password != "" && password.length >= 8) {

            setBadPassword("");
            return true
        }
    }

    const validateInput = () => {
        const isEmail = validateEmail()
        const isPassword = validatePassword()
        if (isEmail && isPassword) {
            isValid = true
            navigation.navigate('Voice')
        } else {
            isValid = false
        }
    }

    return (
        <SafeAreaView style={{}}>
            <View style={styles.wrapper}>
                <View style={styles.formContainer}>
                    <Text style={styles.text}>Enter your email address to get started</Text>
                    <TextInput placeholder='Email Addesss' value={email} onChangeText={(text) => {
                        setEmail(text)
                    }} style={styles.textInput} />
                    <Text style={{ textAlign: "left", color: "red", marginLeft: 5, alignSelf: "flex-start" }}>{badEmail}</Text>
                    <TextInput placeholder='Password' value={password} secureTextEntry={true} onChangeText={(text) => {
                        setPassword(text)
                    }} style={styles.textInput} />
                    <Text style={{ textAlign: "left", color: "red", marginLeft: 5, alignSelf: "flex-start" }}>{badPassword}</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                        <Text style={styles.text}>
                            Create new Account
                        </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={{ backgroundColor: "orange", borderRadius: 5}} onPress={validateInput}>
                        <Text style={[styles.text, { textAlign: "center", fontWeight: "700", color: "white" }]}>
                            Login
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Login

const styles = StyleSheet.create({
    wrapper: {
        padding: 30,
        display: "flex",
        height: "100%",
        justifyContent: "center",
    },
    formContainer: {
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 17,
        fontWeight: "500",
        color: "#656977",
        lineHeight: 50,
    },
    textInput: {
        height: 40,
        margin: 10,
        borderWidth: 1,
        padding: 10,
        width: "100%",
        borderColor: "orange",
        borderRadius: 5
    },
})