import { useNavigation } from "@react-navigation/native";
import React,{ useEffect, useState } from "react";
import {Image, View} from "react-native";

const Splash = ()=>{

    const [isGo, setIsGo] = useState(true);
    const Navigation = useNavigation();

    

    useEffect(() => {
        if (isGo == true) {
            setTimeout(() => {
                Navigation.navigate("SignIn");
                setIsGo(false);
            }, 3000);

        }
    });

    return(
        <View style={{flex:1,justifyContent:"center",alignItems:'center',backgroundColor:"#fff"}}>
            <Image source={require('../../../assets/img/qms-logo-300x200.png')} style={{width:200,height:100}}/>
        </View>
    )
}

export default Splash;