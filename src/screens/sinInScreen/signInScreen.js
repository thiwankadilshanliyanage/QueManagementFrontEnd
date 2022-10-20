import React,{useContext, useState} from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, TouchableOpacity, ScrollView } from 'react-native';
import Logo from '../../../assets/img/qms-logo-300x200.png'
import CustomInput from '../../componets/CustomInput';
import CustomButton from '../../componets/CustomButton/CustomButton';
import CustomButtonWithoutBorder from '../../componets/CustomButton/CustomButtonWithoutBorder';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from "axios";
import { AuthContext } from '../../context/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay';

const SignInScreen = () => {

    const [email, setEmil] = useState('');
    const [password, setPassword] = useState('');
    

    const navigation = useNavigation();
    const { isLoading, login } = useContext(AuthContext);
    

    const { height } = useWindowDimensions()

    const onSignInPressed = () => {
        axios({
            method: 'post',
            url: 'http://192.168.8.102:8082/login',
            data: {
                "email": email,
                "password": password
            }
        }).then(async function (response) {
            if (response.status == 202) {
                let userInfo = (response.data)
                console.log(userInfo)
                AsyncStorage.setItem('userInfo', JSON.stringify(userInfo))
                 await AsyncStorage.setItem('token', response.data.token);
                await AsyncStorage.setItem('username', response.data.userName);
                alert("login success");
                navigation.navigate('TabManger');
            } else {
                alert(response.data.msg);
            }
        })

    }

    return (
        <ScrollView>
        <View style={styles.root}>
                <Spinner visible={isLoading} />
            <Image source={Logo}
             style={[styles.logo, { height: height * 0.3 }]} 
             resizeMode="contain"
            />
            <Text style={styles.title}>Sign In</Text>

            {/* emailField */}
            <CustomInput 
            placeholder={"User Email"} 
            value={email} 
            setValue={setEmil}/>

            {/* passwordField */}
            <CustomInput 
            placeholder={"User Password"} 
            value={password} 
            setValue={setPassword} 
            secureTextEntry/>
            
                <CustomButton text={"Sign In"} onPress={onSignInPressed}/>
                <CustomButtonWithoutBorder 
                onPress={() => { navigation.navigate("SignUp")}}
                text={"Don't have an account? Sign Up Here"} />
            </View></ScrollView>
    );
};

const styles = StyleSheet.create({
    root: {
        marginTop:140,
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: '50%',
        maxWidth: 300,
        maxHeight: 100
    }, title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051060',
        margin: 10,
    }
})

export default SignInScreen