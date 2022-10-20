import React, { useState } from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import Logo from '../../../assets/img/qms-logo-300x200.png'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
import { useTranslation } from 'react-i18next'


const NotificationScreen = () => {

    const [un, setUn] = useState('');
    const [isLoarding, setLoarding] = useState(false);
    const { t, i18n } = useTranslation();

    const getUserName = async () => {

        const username = await AsyncStorage.getItem('username');

        if (username) {
            setUn(username);
            setLoarding(true)

        }

    }



    useFocusEffect(
        React.useCallback(() => {
            getUserName();
        }, []),
    );

    return (

        <View style={styles.root}>
            <Image source={Logo}
                style={[styles.logo]}
                resizeMode="contain"
            />
            <Text
                style={[styles.hello]}
            >{t('welcomeText')}</Text>
            { isLoarding ?(
            <Text
                style={[styles.un]}
            >{un}</Text>
            ):null
            }
            <Text
            style={[styles.notifications]}
            >
                {t('noti')}
            </Text>
            <TouchableOpacity style={[styles.notific]}>
                <Text style={[styles.info]}>You are the next number in the requested queue.Please be prepare</Text>
            </TouchableOpacity>
        </View>

    );


};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 5
    },
    info:{
        fontSize:18,
        color:'#fff'
    },
    notific:{
        backgroundColor: '#3871F3',

        width: '95%',
        height:80,
        padding: 15,
        alignItems: 'center',
        borderRadius: 25,
        top:50
    },
    logo: {
        right: 125,
        top: 25,
        width: '100%',
        maxWidth: 300,
        maxHeight: 100
    },
    hello: {
        fontSize: 25,
        bottom: 50,
        fontWeight: 'bold',
        color: 'black'
    },
    un: {
        fontSize: 15,
        bottom: 50,
    },
    notifications:{
        fontSize: 25,
        color: 'black',
        right: 115,
        fontWeight:'bold'
    }
})

export default NotificationScreen