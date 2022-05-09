import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const CustomInput = ({ value, setValue, placeholder, secureTextEntry }) => {
    return (
        <View style={styles.container}>
            <TextInput
                value={value}
                onChangeText={setValue}
                placeholder={placeholder}
                style={styles.input}
                secureTextEntry={secureTextEntry}>

            </TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        width: "100%",
        borderColor: "#C0C0C0",
        borderWidth: 2,
        borderRadius: 25,
        paddingHorizontal: 10,
        marginVertical: 10,
        justifyContent: "center",


    },
    input: {

    }
})

export default CustomInput