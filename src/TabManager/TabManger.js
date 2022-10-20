import react, { useEffect, useState } from "react";
import HomeScreen from "../screens/homeScreen/homeScreen";
import NotificationScreen from "../screens/notificationScreen/notificationScreen";
import UserScreen from "../screens/userScreen/userScreen";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Image, View, StyleSheet, Text } from "react-native";
import { useTranslation } from 'react-i18next'

const BottomNavigator =()=>{
    const Tab = createBottomTabNavigator();
    const { t, i18n } = useTranslation();
    return(
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
            }}
        >
            <Tab.Screen options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                        {/* <Text>Home</Text>  */}
                        <Image
                            source={require('../../assets/img/home.png')}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                bottom: 5,
                                tintColor: focused ? '#e32f45' : '#748c94'
                            }}
                        />
                        <Text
                            style={{
                                color: focused ? '#e32f45' : '#748c94',
                                bottom: 8
                            }}>{t('home')}</Text>
                    </View>
                ),

            }} name="Home" component={HomeScreen} />

            <Tab.Screen options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                        {/* <Text>Home</Text> */}
                        <Image
                            source={require('../../assets/img/noti.png')}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                bottom: 5,
                                tintColor: focused ? '#e32f45' : '#748c94'
                            }}
                        />
                        <Text
                            style={{
                                color: focused ? '#e32f45' : '#748c94',
                                bottom: 8
                            }}>{t('noti')}</Text>
                    </View>
                ),

            }} name="Notification" component={NotificationScreen} />

            <Tab.Screen options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                        {/* <Text>Home</Text> */}
                        <Image
                            source={require('../../assets/img/Users.png')}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                bottom: 5,
                                tintColor: focused ? '#e32f45' : '#748c94'
                            }}
                        />
                        <Text
                            style={{
                                color: focused ? '#e32f45' : '#748c94',
                                bottom: 8
                            }}>{t('user')}</Text>
                    </View>
                ),

            }} name="User" component={UserScreen} />
        </Tab.Navigator>
    )
}
export default BottomNavigator