import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Platform, PermissionsAndroid, } from 'react-native';
import React, { useEffect, useState } from 'react';
import Voice from '@react-native-voice/voice';


const VoiceScreen = ({ navigation }) => {
    const [started, setStarted] = useState('')
    const [ended, setEnded] = useState('')
    const [isListening, setIsListening] = useState(false)
    const [text, setText] = useState([])

    const androidPermission = async () => {
        if (Platform.OS === 'android') {
            const hasPermission = await PermissionsAndroid.check(
                PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
            )
        }
    }

    const onSpeechStart = (e) => {
        console.log(e, "===>>> onSpeechStart")
        setStarted("start")
    }
    const onSpeechEnd = (e) => {
        console.log(e, "==>>> onSpeechEnd")
        setEnded("ended")
    }
    const onSpeechResults = (e) => {
        console.log(e, "====>>>> onSpeechResults")
        setText(e.value)
    }

    const startRecogizing = async () => {
        setIsListening(true)
        try {
            await Voice.start("en-US");
            setStarted('')
            setEnded('')
            setText([])
        } catch (error) {
            console.log(e, "===>>> error in startRecogizing")
        }
    }
    const stopRecogizing = async () => {
        try {
            Voice.removeAllListeners();
            await Voice.stop()
            await Voice.destroy()
            setIsListening(false)
            setStarted('')
            setEnded('')
            setText([])
        } catch (error) {
            console.log(e, "===>>> error in stopRecogizing")
        }
    }


    useEffect(() => {
        Voice.onSpeechStart = onSpeechStart;
        Voice.onSpeechEnd = onSpeechEnd;
        Voice.onSpeechResults = onSpeechResults;

        androidPermission()
        return () => {
            Voice.destroy().then(Voice.removeAllListeners)
        }
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.header}>
                    <View style={{
                        position: "absolute",
                        left: 15
                    }}>
                        <TouchableOpacity style={[styles.icon, { top: "75%" }]} onPress={() => navigation.goBack()}>
                            <Text>Back</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.time}></Text>
                </View>
                <View style={styles.description}>
                    <Text style={styles.title}>Notes</Text>
                    <Text style={styles.text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Text>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <Text style={[styles.text, { color: "#7397fb", fontSize: 16 }]}>
                    Provide more information on this event
                </Text>
                <View style={styles.noteBox}>
                    <ScrollView>
                        {/* <Text style={styles.text}>
                            {started}
                        </Text> */}
                        <Text style={styles.text}>
                            {
                                text.map((e)=> (
                                    e
                                ))
                            }
                        </Text>
                        {/* <Text style={styles.text}>
                            {ended}
                        </Text> */}
                    </ScrollView>
                </View>
                <TouchableOpacity style={styles.icon} onPress={() => startRecogizing()}>
                    <Text style={{color: "black"}}>
                        Start
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.icon, { top: "75%" }]} onPress={() => stopRecogizing()}>
                    <Text style={{color: "black"}}>End</Text>
                </TouchableOpacity>

            </View>
            <View style={styles.wrapper}>
                <TouchableOpacity style={[styles.icon, { top: "75%" }]} >
                    <Text style={{ color: "black" }}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default VoiceScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    wrapper: {
        paddingHorizontal: 20,
    },
    header: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    time: {
        fontSize: 38,
        color: "black"
    },
    description: {
        padding: 16,
        alignItems: "center"
    },
    title: {
        fontSize: 25,
        fontWeight: 'normal',
        color: "black",
    },
    text: {
        color: "black",
        fontSize: 14,
    },
    buttonContainer: {
        padding: 16,
        height: "70%",
        position: "relative",
    },
    icon: {
        position: "absolute",
        right: 15,
        top: "65%"
    },
    noteBox: {
        width: "100%",
        height: "50%",
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#7397fb",
        marginTop: 15
    },
})