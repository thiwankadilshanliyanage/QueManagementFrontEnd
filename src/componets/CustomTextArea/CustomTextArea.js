import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const CustomTextArea = ({value, setValue, placeholder})=>{
    return(
        <View style={styles.container}>
            <TextInput
                placeholder={placeholder}
                value={value}
                onChangeText={setValue}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        height:200,
        top:15,

        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,

        paddingHorizontal: 10,
        marginVertical: 10,
    }
});
export default CustomTextArea