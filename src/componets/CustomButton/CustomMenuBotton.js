import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'


const CustomMenuButton = ({ onPress, text, icon}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Icon style={styles.ico} name={icon} size={50} color="black"/>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#8F98F0',

        width: '80%',
        height: '45%',
        padding: 15,
        alignItems: 'center',
        borderColor:'black',
        borderRadius: 5,
        
    },
    text: {
        top:40,
        fontWeight: 'bold',
        color: 'white',
    },
    ico:{
        top:30
    }

})

export default CustomMenuButton