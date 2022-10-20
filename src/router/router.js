import react, { useContext, useEffect, useState } from "react";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from "../screens/sinInScreen/signInScreen";
import SignUpScreen from "../screens/signupScreen/signupScreen";
import Splash from "../screens/SplashScreen/SplashScreen";
import AddIssue from "../screens/AddIssue/AddIssue"
import BottomNavigator from "../TabManager/TabManger";
import LanguageScreen from "../screens/ChangeLanguage/changeLanguage";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Image, View, StyleSheet, Text } from "react-native";
import { AuthContext } from "../context/AuthContext";


const AppRouter =()=>{
    const Stack = createNativeStackNavigator();
    const { userInfo, splashLoading } =useContext(AuthContext);
    
    
return(
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
                <Stack.Screen options={{ headerShown: false }} name="Splash"  component={Splash} />
                    <Stack.Screen
                     options={{ headerShown: false }} 
                     name="TabManger"
                      component={BottomNavigator} />
     
            
            <Stack.Screen
             options={{ headerShown: false }} 
             name="SignIn"
              component={SignInScreen}
               />
            <Stack.Screen
            options={{ headerShown: false }}
            name="SignUp"
            component={SignUpScreen}
             />
             <Stack.Screen
                options={{ headerShown: false }}
                name="AddIssue"
                component={AddIssue}
             />
            <Stack.Screen
                options={{ headerShown: false }}
                name="lang"
                component={LanguageScreen}
            />
      </Stack.Navigator>
    </NavigationContainer>
);
};
export default AppRouter;
