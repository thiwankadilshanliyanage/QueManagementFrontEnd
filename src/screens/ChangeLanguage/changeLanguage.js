import React, { useContext, useState } from "react";
import { Text, View,  StyleSheet,  } from "react-native";
import SelectList  from "react-native-dropdown-select-list";
import { useTranslation } from 'react-i18next'
import SwitchSelector from 'react-native-switch-selector'
import { NavigationContainer } from '@react-navigation/native';
const options = [
    { label: 'English', value: 'en' },
    { label: 'Sinhala', value: 'si' }
]

const LanguageScreen = ({ route, navigation })=>{
   
    const { t, i18n } = useTranslation(); 

    return(
        <View>
            <Text>You can select your language</Text>
            <SwitchSelector styles={[styles.tab]}  options={options} onPress={(language)=>{
                i18n.changeLanguage(language);
                navigation.navigate('TabManger')
            }}/>
        </View>
    )
}

const styles = StyleSheet.create({
tab:{
  
}
})
export default LanguageScreen;