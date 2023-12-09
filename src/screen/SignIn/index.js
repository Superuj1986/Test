import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect} from "react";
import { StyleSheet, Text, Image, View, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from "react-native";
import MainButton from "../../component/MainButton";
import MainInput from "../../component/MainInput";

export default function SignInScreen({navigation}){
    const [ acc, setAcc ] = useState('');
    const [ password, setpassword ] = useState('');
    const goToHome = () => {
        if ( acc.trim() == '' || !acc ){
            alert('Username cannot be blanked');
        }else if ( password.trim() == '' || !password ){
            alert('Password cannot be blanked');
        }else{
            login();
        }
    };
    const login = async () => {
        let userData = await AsyncStorage.getItem('userData');
        if ( userData ){
            userData = JSON.parse(userData);
            let a = [...userData];
            a = a.filter(
                (value) => 
                    value.acc.toLocaleLowerCase() == acc.toLocaleLowerCase() &&
                    value.password == password
            );
            if ( a.length > 0 ){
                let curUser = a[0];
                AsyncStorage.setItem('curUser',JSON.stringify(curUser));
                navigation.replace('Shopertino');
            }else alert('Username or passowrd are not accurate!');
        }else { alert('Username or passowrd are not accurate!'); }
    };
    const goToSignup = async () => {
        navigation.navigate('Sign Up');
    };
    const onGoBack = () => {
        navigation.goBack();
    };
    const checkLogin = async () => {
        let userData = await AsyncStorage.getItem('curUser');
        if ( userData ) navigation.replace('Shopertino');
    };
    useEffect(() => {
        checkLogin();
    },[]);
    return(
        <KeyboardAvoidingView
            behavior={Platform.OS==='android' ? 'padding' : 'height'}
            style={styles.container}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View
                    style={{
                        flex: 1,
                        justifyContent:'center',
                        paddingHorizontal: 12,
                        backgroundColor: '#fff',
                    }}
                >
                    <Text
                        style={{
                            alignItems: 'flex-start',
                            color: "#000",
                            fontWeight: "bold",
                            fontSize: 25,
                            marginBottom: 50,
                        }}
                    >Sign In</Text>
                    <MainInput
                        title={'Email or phone number'}
                        placeholder={'Nhập email hoặc số điện thoại'}
                        value={acc}
                        onChangeText={setAcc}
                    />
                    <MainInput
                        placeholder={'Nhập mật khẩu'}
                        title={'Password'}
                        value={password}
                        secureTextEntry={true}
                        onChangeText={setpassword}
                    />
                    <MainButton
                        style={{ marginTop: 20, marginBottom: 50}}
                        title={'Log In'}
                        onPress={goToHome}
                    />
                    <View
                        style={{
                            alignItems: 'center'
                        }}
                    >
                        <Text>OR</Text>
                    </View>
                    <MainButton
                        style={{ marginTop: 50, backgroundColor: '#0b5394'}}
                        title={'Facebook Login'}
                    />
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
})