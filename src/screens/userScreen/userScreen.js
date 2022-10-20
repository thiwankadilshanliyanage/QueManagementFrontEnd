import React, { useContext, useState } from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import Logo from '../../../assets/img/qms-logo-300x200.png'
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomUserButton from "../../componets/CustomButton/CustomUserButton";
import { AuthContext } from "../../context/AuthContext";
import { NavigationContainer, useFocusEffect, useNavigation } from '@react-navigation/native';
import {Dropdown} from 'react-native-material-dropdown';
import { useTranslation } from 'react-i18next'


const UserScreen = () => {
    const navigation = useNavigation();
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

    const changeLang = () => {
        navigation.navigate('lang')
    }

    useFocusEffect(
        React.useCallback(() => {
            getUserName();
        }, []),
    );

    const handleLogout = () => {
        AsyncStorage.clear();
        navigation.navigate('SignIn');
    };
    
    return (

        <View style={styles.root}>
            <Image source={Logo}
                style={[styles.logo]}
                resizeMode="contain"
            />
            <Text
                style={[styles.hello]}
            >{t('welcomeText')}</Text>
            {isLoarding ? (
            <Text
                style={[styles.un]}
            >{un}</Text>
            ) : null
            }
            <Text
                style={[styles.user]}
            >
                {t('user')}
            </Text>
            
            
            <CustomUserButton text={t('logout')} onPress={handleLogout}  icon={"sign-out-alt"}></CustomUserButton>
            <CustomUserButton text={t('lang')} onPress={changeLang} icon={"language"}></CustomUserButton>

        </View>

    );


};
const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 5
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
        color: 'black',
        fontWeight: 'bold'
    },
    un: {
        fontSize: 15,
        bottom: 50,
    },
    user: {
        fontSize: 25,
        color: 'black',
        right: 140,
        fontWeight: 'bold'
    }
})

export default UserScreen