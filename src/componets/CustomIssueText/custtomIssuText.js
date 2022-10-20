import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const CustomIssueText =({textValue})=>{
    return(
        <View style={styles.container}>
        <Text style={styles.textVal} textValue={textValue}></Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#6D1BF2',
        borderRadius:15,
        width:'30%',
        height:30,
        right:120,
        top:10,
        alignItems:'center',
        
    },
    textVal:{
        color:'#fff',
        fontSize:20,
        
        
    }
})

export default CustomIssueText