import React, { useState, useContext } from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, TouchableOpacity, ScrollView,  } from 'react-native';
import Logo from '../../../assets/img/qms-logo-300x200.png'
import CustomInput from '../../componets/CustomInput';
import CustomButton from '../../componets/CustomButton/CustomButton';
import CustomButtonWithoutBorder from '../../componets/CustomButton/CustomButtonWithoutBorder';
import { useNavigation } from '@react-navigation/native';
import axios from "axios";
import { BASE_URL } from '../../config';
import Spinner from 'react-native-loading-spinner-overlay';


const SignUpScreen = ({}) => {

    const [name, setName] = useState('');
    const [email, setEmil] = useState('');
    const [contact, setContact] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState(null);
    
    
     const { height } = useWindowDimensions();

    const navigation = useNavigation();

  
    const onSignUpPressed = () => {
        if (name, email, contact, password, confirmPassword) {
            if (password == confirmPassword) {
                axios({
                    method: 'post',
                    url: 'http://192.168.8.102:8082/register',
                    data: {
                        "name": name,
                        "contact": email,
                        "email": contact,
                        "password": password,
                        "confirmPassword": confirmPassword

                    }
                }).then(async function (response) {
                    console.log("work")
                    if (response.status == 201) {
                        navigation.navigate('SignIn');
                    } else if (response.status == 200) {
                        alert("Register Successful");
                        navigation.navigate('SignIn')
                    }
                });
            } else {
                alert('password and re-type password not match!')
            }
        } else {
            alert('enter all data')
        }


    } 

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
        
            <Image source={Logo}
             style={[styles.logo, { height: height * 0.3 }]} 
             resizeMode="contain"
                />
            <Text style={styles.title}>Sign Up</Text>

            {/* userName */}
            <CustomInput 
            placeholder={"User Name"} 
            value={name} 
            setValue={setName}/>

            {/* emailField */}
            <CustomInput
            placeholder={"User Email"}
            value={email}
            setValue={setEmil} />

            {/* Contact */}
            <CustomInput
            placeholder={"User Contact"}
            value={contact}
            setValue={setContact} />

            {/* passwordField */}
            <CustomInput 
            placeholder={"User Password"} 
            value={password} 
            setValue={setPassword} 
            secureTextEntry/>

            {/* passwordRepeatField */}
            <CustomInput
            placeholder={"Repeat User Password"}
            value={confirmPassword}
                    setValue={setConfirmPassword}
            secureTextEntry />
            
                <CustomButton text={"Sign Up"} onPress={onSignUpPressed}/>
                <CustomButtonWithoutBorder onPress={() => { navigation.navigate("SignIn") }} text={"Have an account? Sign in here"}/>
            </View></ScrollView>
    );
};

const styles = StyleSheet.create({
    root: {
        marginTop:10,
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: '50%',
        maxWidth: 300,
        maxHeight: 100
    },title:{
        fontSize:24,
        fontWeight:'bold',
        color:'#051060',
        margin:10,
    }
})

export default SignUpScreen;