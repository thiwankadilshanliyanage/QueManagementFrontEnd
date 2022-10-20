import React, { useEffect,useState } from "react";
import { Text, View, Image, StyleSheet, Button, SafeAreaView } from "react-native";
import Logo from '../../../assets/img/qms-logo-300x200.png'
import CustomMenuButton from "../../componets/CustomButton/CustomMenuBotton";
import { useNavigation } from '@react-navigation/native';
import Spinner from 'react-native-loading-spinner-overlay';
import { AuthContext } from "../../context/AuthContext";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer, useFocusEffect} from '@react-navigation/native';
import {useTranslation} from 'react-i18next'


const HomeScreen =()=>{
    const [un, setUn] = useState('');
    const [isLoarding,setLoarding] = useState(false);
    const {t,i18n} = useTranslation();
    
    const[qn, setQn] = useState('');
    const [isHave, setIsHave]= useState(false)

    const navigation = useNavigation();
    const getUserName = async () => {
        
        const username = await AsyncStorage.getItem('username');
        

        if(username){
            setUn(username);
            setLoarding(true)

        }

    }
    const getQueuNum = async ()=>{
    const queueNum = await AsyncStorage.getItem('Queue Number');

    if(queueNum){
        setQn(queueNum);
        setIsHave(true)
    }
    }

    useFocusEffect(
        React.useCallback(() => {
      getUserName();
      getQueuNum();
}, []),
  );


   // alert(un);
    const Header = ()=>{
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
                {isHave ? (
                   
                    <Text style={[styles.que]}>Your ongoing Queue Number Is {qn}</Text>
                
                ):null
                }
            </View>

        );
    }

const newSimRequest=()=>{
    navigation.navigate('AddIssue', { issueType: t("newSim") , id:'1'})
}
const simNotWorking = () => {
    navigation.navigate('AddIssue', { issueType: t("simNotWork"), id:'2'})
}
const simRegistration = () => {
    navigation.navigate('AddIssue', { issueType: t("simRegi"), id:'3' })
}
const others = () => {
    navigation.navigate('AddIssue', { issueType: t("other") ,id:'4' })
}


    const Boxes =()=>{
        return(
            <View style={styles.boxContainer}>

               <View style={styles.box}>
                <View style={styles.inner}>
                        <CustomMenuButton onPress={newSimRequest} text={t('newSim')} icon={"sim-card"}>
                    </CustomMenuButton>
                </View>
               </View>

                <View style={styles.box}>
                    <View style={styles.inner}>
                        <CustomMenuButton onPress={simNotWorking} text={t('simNotWork')} icon={"window-close"}>
                            
                        </CustomMenuButton>
                    </View>
                </View>

                <View style={styles.box}>
                    <View style={styles.inner2}>
                        <CustomMenuButton onPress={simRegistration} text={t('simRegi')} icon={"user-plus"}></CustomMenuButton>
                    </View>
                </View>

                <View style={styles.box}>
                    <View style={styles.inner2}>
                        <CustomMenuButton onPress={others} text={t('other')} icon={"question-circle"}></CustomMenuButton>
                    </View>
                </View>
            </View>
        );
    }

    return(
        <SafeAreaView style={styles.container}>
            <Header/>
            <Boxes/>
        </SafeAreaView>
    );

   
};

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    boxContainer:{
        width:'100%',
        height:'85%',
        padding:5,
        flexDirection:'row',
        flexWrap:'wrap'
    },
    inner:{
        width:'100%',
        flex:1,
        top:50,
        alignItems:'center',
        justifyContent:'center'
    },
    inner2:{
        width: '100%',
        flex: 1,
        
        alignItems: 'center',
    },
    box:{
        width:'50%',
        height:'51%',
        padding:5,
       
    },
    root:{
        alignItems:'center',
        padding:5,
        width:'100%',
        height:'20%',
        justifyContent:'center'
    },
    logo:{
        right:125,
        top:25,
        width: '100%',
        maxWidth: 300,
        maxHeight: 100
    },
    hello:{
        fontSize:25,
        bottom:50,
        color: 'black',
        fontWeight: 'bold'
    },
    un:{
        fontSize: 15,
        bottom: 50,
    },
    btn1:{
        right:20
    },
    que:{
        fontSize:15,
        color:'red',
        fontWeight:'bold'
    }
})



export default HomeScreen