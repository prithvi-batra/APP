import React,{useState} from "react";
import {
    View,
    Text,
    ScrollView,
    TextInput,
    StyleSheet  
} from 'react-native'
import BasicButton from "./BasicButton";
import LoginSignUpBtn from "./LoginSignUpBtn";

export default function Login (){
    const[email,setEmail]= useState("")
    const[password,setPassword]= useState("")
    function handleLoginBtnClick(){
        console.log("Login Btn Clicked")
    }
    function handleSignUpBtnClick(){
        console.log("SignUp Btn Clicked")
    }
    return(
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Login</Text>
        
        <View style={styles.form}>
            <Text style={styles.label}>Email Address : </Text>
            <TextInput
            placeholder="Enter Your Email Adresss"
            onChangeText={(text)=>{setEmail(text)}}
            style={styles.inputField}
            value={email}
            keyboardType="email-address"
            />
            <View style={styles.divider}></View>    
            <Text style={styles.label}>Password : </Text>
            <TextInput
            placeholder="Enter Your Password"
            onChangeText={(text)=>{setPassword(text)}}
            style={styles.inputField}
            value={password}
            secureTextEntry
            />
            
        </View>
        <BasicButton 
            text="Login"
            onPress={handleLoginBtnClick}
        />
        <LoginSignUpBtn 
            customStyle={styles.signup}
            text="Don't have an account?"
            btnText="Sign up"
            onPress={handleSignUpBtnClick}
      />        
    </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',         
        marginTop: 60,         
        paddingHorizontal: 30,     
    },
    title:{
        fontWeight:"bold",
        fontSize:20,
        letterSpacing:0.1,
        color:"#2e2e2e",
    },
    form:{
        marginVertical:35,
    },
    inputField:{
        fontSize:14,
        borderBottomWidth:1,
        borderBottomColor:"#bfbfbf",
        paddingVertical:6
    },
    label:{
        fontSize:16,
        lineHeight:18,
        color:"#666666",
        marginBottom:3,
    },
    divider:{
        paddingVertical:12,
    }
})