import React, { useState } from "react";
import { View, Text,  StyleSheet, Image, TouchableOpacity} from 'react-native';
import Logo from '../../../assets/img/qms-logo-300x200.png'
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabManger from '../../TabManager/TabManger'
import axios from "axios";
import CustomTextArea from "../../componets/CustomTextArea/CustomTextArea";
import CustomButton from "../../componets/CustomButton/CustomButton";
import notifee from '@notifee/react-native';
import { useTranslation } from 'react-i18next'

const AddIssue = ({ route, navigation })=>{
    const {issueType, id} = route.params;
    
    const [issue, setIssue] = useState('');
    const { t, i18n } = useTranslation();

    const [un, setUn] = useState('');
    const [isLoarding, setLoarding] = useState(false);

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


    const submitIssue = async()=>{
        const jwt = await AsyncStorage.getItem('token');
        console.log(jwt)

        axios({
            method: 'post',
            url:`http://192.168.8.102:8082/home/createIssue?issutype=${id}`,
            data: {
               "issue":issue 
            },
            headers: {
                Authorization: "Bearer " + jwt
            }

        }).then(async function (response){

            if(response.status==202){
                console.log("work")
                let issueInfo = (response.data)
                try {
                    const jsonValue = JSON.stringify(response.data.queue_no)
                    console.log(jsonValue)
                    await AsyncStorage.setItem('Queue Number', jsonValue);
                    navigation.navigate('TabManger')
                } catch (error) {
                    
                }
                // AsyncStorage.setItem('issueInfo', JSON.stringify(issueInfo))
                
            }else{
                alert(response.data.msg);
            }
            
        })
        // Request permissions (required for iOS)
        await notifee.requestPermission()

        // Create a channel (required for Android)
        const channelId = await notifee.createChannel({
            id: 'default',
            name: 'Default Channel',
        });

        // Display a notification
        await notifee.displayNotification({
            title: 'Your Issue Added Our Counter',
            body: 'please be prepare',
            android: {
                channelId,
                pressAction: {
                    id: 'default',
                },
            },
        });
    }

    return(
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
                style={[styles.notifications]}
            >
                {t('issueType')}
            </Text>
            <Text
                style={[styles.issueType]}
            >
                {issueType}
            </Text>
            <Text
                style={[styles.remark]}
            >
                {t('remark')}
            </Text>
            <CustomTextArea
                placeholder={t('review')}
                value={issue}
                setValue={setIssue}
            />
            <TouchableOpacity onPress={submitIssue} style={[styles.btn]} >
                <Text style={[styles.btnText]}>{t('submit')}</Text>
            </TouchableOpacity>
        </View>
    ); issueType
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 5
    },
    remark:{
        fontSize: 15,
        right: 140,
        fontWeight: 'bold',
        top:20
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
    notifications: {
        fontSize: 22,
        color: 'black',
        right: 115,
        fontWeight: 'bold'
    },
    issueType:{
        fontSize: 15,
        color: '#6D1BF2',
        right: 115,
        fontWeight: 'bold'
    },
    btn:{
        backgroundColor: '#3871F3',

        width: '45%',
        height:50,

        padding: 15,
        alignItems: 'center',
        borderRadius: 5,
        top:15,
        left:100
    },
    btnText:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:14


    }
    
})
export default AddIssue;