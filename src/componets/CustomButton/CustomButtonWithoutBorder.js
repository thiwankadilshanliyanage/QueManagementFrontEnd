import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const CustomButtonWithoutBorder = ({ onPress, text }) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: null,

        width: '100%',

        padding: 15,
        alignItems: 'center',
        border:null
    },
    text: {
        fontWeight: 'bold',
        color: 'black',
    }
})

export default CustomButtonWithoutBorder