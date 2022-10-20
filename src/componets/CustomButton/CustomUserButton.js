import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'

const CustomUserButton = ({ onPress, text, icon }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Icon style={styles.ico} name={icon} size={25} color="black"/>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container:{
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    width:"90%",
    height:"15%",
    },
    text:{
        bottom:"0%",
        left:"25%",
        fontSize:20,
        fontWeight:'bold'
    },
    ico:{
        top: "35%",
        left:"5%"
    }
})

export default CustomUserButton