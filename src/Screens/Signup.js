import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const Signup = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [badEmail, setBadEmail] = useState("");
    const [badPassword, setBadPassword] = useState("");
    const [badUsername, setBadUsername] = useState("");
    let isValid = false;

    const validateUsername = () => {
        if (username == "") {
            setBadUsername("Enter your username")
            return false
        } else {
            setBadUsername("")
            return true
        }
    }

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


        const isUsername = validateUsername()
        const isEmail = validateEmail()
        const isPassword = validatePassword()

        if (isUsername && isEmail && isPassword) {
            isValid = true
            // navigation.navigate("Otp")
        }

        return isValid;

    }
    return (
        <SafeAreaView>
            <View style={styles.wrapper}>
                <View style={styles.formContainer}>
                    <Text style={styles.text}>Create your account</Text>
                    <TextInput placeholder='Username' value={username} onChangeText={(text) => {
                        setUsername(text)
                    }} style={styles.textInput} />
                    <Text style={{ textAlign: "left", color: "red", marginLeft: 5, alignSelf: "flex-start" }}>{badUsername}</Text>

                    <TextInput placeholder='Email Addesss' value={email} onChangeText={(text) => {
                        setEmail(text)
                    }} style={styles.textInput} />
                    <Text style={{ textAlign: "left", color: "red", marginLeft: 5, alignSelf: "flex-start" }}>{badEmail}</Text>

                    <TextInput placeholder='Password' value={password} secureTextEntry={true} onChangeText={(text) => {
                        setPassword(text)
                    }} style={styles.textInput} />
                    <Text style={{ textAlign: "left", color: "red", marginLeft: 5, alignSelf: "flex-start" }}>{badPassword}</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                        <Text style={styles.text}>
                            Already have an account?
                        </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={{ backgroundColor: "orange", borderRadius: 5 }} onPress={validateInput}>
                        <Text style={[styles.text, { textAlign: "center", fontWeight: "700", color: "white" }]}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Signup

const styles = StyleSheet.create({
    wrapper: {
        padding: 30,
        display: "flex",
        height: "100%"
    },
    formContainer: {
        flex: 2,
        display: "flex",
        alignItems: "center",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 16,
        fontWeight: "500",
        color: "#656977",
        lineHeight: 50
    },
    textInput: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: "100%",
        borderColor: "#BECEFB",
        borderRadius: 5
    },
})