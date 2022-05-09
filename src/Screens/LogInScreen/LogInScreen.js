import React, { useState } from 'react'
import { View, Image, StyleSheet, useWindowDimensions } from 'react-native'
import jiffy from "../../../assets/images/jiffylogo.jpg"
import CustomButton from "../LogInScreen/CustomButton"
import CustomInput from '../LogInScreen/CustomInput';


const LogInScreen = ({navigation}) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const submit = () =>{
        if (username === "Ashu" && password ==="123456"){
            alert(`Welcome ${username} `)
            navigation.navigate("DrawerNavigator")
        }else{
            alert("Invalid ID or Password Try again")
        }
    }

    const { height } = useWindowDimensions()

 
    const onForgotPasswordPressed = () => {
        alert("Forgot Password Pressed")
    }

    const onLinkedInPressed = () => {
        alert("Linkedin Pressed")
    }

    const onFacebookPressed = () => {
        alert("Facebook Pressed")
    }

    const onTwitterPressed = () => {
        alert("Twitter Pressed")
    }

    return (
        <View style={styles.root}>
            {/* <Image source={jiffy} style={[styles.logo, { height: height * 0.3 }]} resizeMode="contain" /> */}

            <CustomInput
                placeholder="Email ID"
                value={username}
                setValue={setUsername} 
                
                />

            <CustomInput
                placeholder="Password"
                value={password}
                setValue={setPassword}
                secureTextEntry={true}
            />

            <CustomButton  text="Login" onPress={()=>submit()} type="PRIMARY"  />
            <CustomButton text="Forgot Password" onPress={onForgotPasswordPressed} type="TERTIARY" />
            <CustomButton text="or" type="SECONDARY" />
            <CustomButton text="Continue Using" type="SECONDARY" />
            <CustomButton text="Continue with Linkedin" onPress={onLinkedInPressed} type="BLUE" />
            <CustomButton text="Continue with Facebook" onPress={onFacebookPressed} type="PURPLE" />
            <CustomButton text="Continue with Twitter" onPress={onTwitterPressed} type="SKYBLUE" />
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: "center",
        padding: 20,
        marginVertical: 50,

    },
    logo: {
        width: "70%",
        maxHeight: 130,
        maxWidth: 200,
    }
})

export default LogInScreen