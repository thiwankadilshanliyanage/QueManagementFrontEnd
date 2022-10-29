import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import SignInScreen from './src/screens/sinInScreen';
import SignUpScreen from './src/screens/signupScreen/signupScreen';
import AppRouter from './src/router/router';
import { AuthProvider } from './src/context/AuthContext';
 import { requestUserPermission, notificationListner } from './src/NotificationServer/notificationServer'




const App =()=>{
  useEffect(() => {
     requestUserPermission()
     notificationListner()


   }, []);
  return (
   <SafeAreaView style={styles.root}>
  <AuthProvider>
   <AppRouter/> 
      </AuthProvider>  
     </SafeAreaView> 
  );
};

const styles = StyleSheet.create({
  root:{
        flex:1,
        backgroundColor:'#F9FBFC'
  },
});
export default App;