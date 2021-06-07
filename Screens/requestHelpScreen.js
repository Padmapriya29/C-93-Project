import React from "react";
import {
    TouchableOpacity,
    View,
    StyleSheet,
    Text,
} from "react-native";
import db from "../config";
import MyHeader from "../Components/myHeader";

export default class RequestHelpScreen extends React.Component{
    render(){
        return(
            <View>
                <Text style={{padding:140, fontSize: 25,}}>
                Request Help Screen 🤝🏻
                </Text>
            </View>
        )
    }
}