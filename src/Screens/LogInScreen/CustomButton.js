import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({ onPress, text, type }) => {
    return (

        <Pressable onPress={onPress} style={[styles.container, styles[`container_${type}`]]}>
            <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
        </Pressable>

    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        padding: 15,
        marginVertical: 3,
        alignItems: "center",
        borderRadius: 25,

    },
    container_PRIMARY: {
        backgroundColor: "#FF8C00",
    },
    container_BLUE: {
        backgroundColor: "#4169E1"
    },
    container_PURPLE: {
        backgroundColor: "#6A5ACD"
    },
    container_SKYBLUE: {
        backgroundColor: "#00BFFF"
    },
    text: {
        fontWeight: "bold",
        color: "#fff",
    },
    text_TERTIARY: {
        color: "#FF8C00"
    },
    text_SECONDARY: {
        color: "gray",
        marginTop: -25
    }

})

export default CustomButton