import { View, Text, StyleSheet, Pressable, TouchableOpacity} from 'react-native'
import React from 'react'

const CustomButton = ({onPress, text}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#3871F3',

    width:'100%',

    padding:15,
    alignItems:'center',
    borderRadius:5,
  },
  text:{
    fontWeight:'bold',
    color:'white',
  }
})

export default CustomButton