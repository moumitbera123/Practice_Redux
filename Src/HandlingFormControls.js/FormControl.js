import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'

const FormControl = () => {
    const [nameVal, setNameVal] = useState("")
    const [email, setEmail] = useState("")
    return (
        <View>
            <Text style={{ fontSize: 30 }}>Handling Form Controls</Text>
            <View style={{ marginTop: 30, alignItems: 'center' }}>
                <TextInput
                    value={nameVal}
                    onChangeText={setNameVal}
                    placeholder='Enter Your Name'
                    style={{ borderWidth: 1, width: 300 }}
                />
                <TextInput
                    value={email}
                    onChangeText={setEmail}
                    placeholder='Enter Your Email'
                    style={{ borderWidth: 1, width: 300, marginTop: 20 }}
                />
            </View>
            <View style={{ marginTop: 30, alignItems: 'center' }}>
                <Text style={{ fontSize: 25 }}>Output</Text>
                <Text style={{ fontSize: 20 }}>Name : {nameVal}</Text>
                <Text style={{ fontSize: 20 }}>Email : {email}</Text>
            </View>

        </View>
    )
}

export default FormControl

const styles = StyleSheet.create({})