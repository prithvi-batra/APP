import React from "react";
import {
    View,
    StyleSheet,
    ScrollView,
    Text,
    TextInput,
} from "react-native";
import BasicButton from "./BasicButton";
import LoginSignUpBtn from "./LoginSignUpBtn";
import ValidationComponent from 'react-native-form-validator';
import {Picker} from '@react-native-picker/picker';

export default class SignUp extends ValidationComponent{
    constructor(props){
    super(props);
    this.state={
        name:"",
        email:"",
        ageGroup:"",
        password:"",
        confirmPassword:""
    } 
};
    handleRegisterBtn=()=>{
      this.validate({
        name:{minlength:3, maxlength:10, required: true},
        email:{email:true , required:true},
        password:{required:true},
        confirmPassword:{required:true , equalPassword:this.state.password}
      })
      console.log("register btn was clicked")
}
    handleSignInBtn=()=>{ 
      console.log("sign in Btn clicked")
}
    render(){
         return(
            <ScrollView style={styles.container}>
                <Text style={styles.title}>Sign Up</Text>

                <View style={styles.form}>
            
                    <Text style={styles.label}>Name : </Text>
                    <TextInput
                    placeholder="Enter Your Name"
                    onChangeText={(text)=>{this.setState({name : text})}}
                    style={styles.inputField}
                    value={this.state.name}
                    />
                    
                    <View style={styles.divider}></View>    
                    
                    <Text style={styles.label}>E-Mail : </Text>
                    
                    <TextInput
                        placeholder="Enter Your Email Adresss"
                        onChangeText={(text)=>{this.setState({email : text})}}
                        style={styles.inputField}
                        value={this.state.email}
                        keyboardType="email-address"
                    />  
                    <Text style={styles.label}>Age Group : </Text>
                    
                    <Picker
                      selectedValue={this.state.ageGroup}
                      style={styles.inputField}
                      onValueChange={(ageGroup,itemIndex)=>{this.setState({ageGroup:ageGroup})}}
                    >
                      <Picker.item label="" value=""/>
                      <Picker.item label="1-4"   value="1-4"/>
                      <Picker.item label="5-12"  value="5-12"/>
                      <Picker.item label="13-18" value="13-18"/>
                    </Picker>
                    
                    <View style={styles.divider}></View>    
                    
                    <Text style={styles.label}>Password : </Text>
                        
                    <TextInput
                    placeholder="Enter Your Password"
                    onChangeText={(text)=>{this.setState({password:text})}}
                    style={styles.inputField}
                    value={this.state.password}
                    secureTextEntry
                    />
                   <View style={styles.divider}></View>    
                    
                    <Text style={styles.label}>Confirm Password : </Text>
                        
                    <TextInput
                    placeholder="Confirm Your Password"
                    onChangeText={(text)=>{this.setState({confirmPassword : text})}}
                    style={styles.inputField}
                    value={this.state.confirmPassword}
                    secureTextEntry
                    />
                    
                    <BasicButton
                    text="Register"
                    onPress={this.handleRegisterBtn}
                    />
                    <Text style={styles.log}>
                      {this.getErrorMessages()}
                    </Text>
                    <LoginSignUpBtn
                      text="Already have an account ?"
                      btnText="Sign In"
                      onPress={this.handleSignInBtn}
                      customStyle={styles.signin}
                    />
                </View>
            </ScrollView>
         );
     }
 }

 const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      marginTop: 60,
      paddingHorizontal: 30,
    },
  
    title: {
      fontWeight: '500',
      fontSize: 20,
      letterSpacing: 0.1,
      color: '#2E2E2E',
    },
  
    form: {
      marginVertical: 35,
    },
  
    label: {
      fontSize: 16,
      lineHeight: 18,
      color: '#666666',
      marginBottom: 3,
    },
  
    inputField: {
      fontSize: 14,
      borderWidth: 0,
      borderBottomWidth: 1,
      borderBottomColor: '#BFBFBF',
      paddingVertical: 6,
    },
  
    divider: {
      paddingVertical: 8,
    },
  
    log: {
      textAlign: 'center',
      marginVertical: 2,
      color: 'red',
    },
  
    signin: {
      marginVertical: 40,
    },
  });  
