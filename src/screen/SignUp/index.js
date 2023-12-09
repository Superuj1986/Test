import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState} from "react";
import { TouchableOpacity, Text, View, Image } from "react-native";
import MainButton from "../../component/MainButton";
import MainInput from "../../component/MainInput";

export default function SignUpScreen({ navigation }){
    const [name, setName] = useState("");
    const [acc, setAcc] = useState("");
    const [password, setpassword] = useState("");
    const onGoBack = () => {
        navigation.goBack();
    };
    const onSignUp = () => {
        if (name.trim() == "" || !name) {
            alert("Your name cannot be blanked !");
          } else if (acc.trim() == "" || !acc) {
            alert("Username cannot be blanked !");
          } else if (password.trim() == "" || !password) {
            alert("Password cannot be blanked !");
          } else {
            createAccount();
          }
    };
    const createAccount = async () => {
        let userData = await AsyncStorage.getItem("userData");
    if (userData) {
      userData = JSON.parse(userData);
      let arr = [...userData];
      arr = arr.filter(
        (value) => value.acc.toLocaleLowerCase() == acc.toLocaleLowerCase()
      );
      if (arr.length > 0) {
        alert("Email already registered!");
        return;
      } else {
        userData.push({
          name: name.trim(),
          acc: acc.trim(),
          password: password.trim(),
        });
      }
    } else {
      userData = [];
      userData.push({
        name: name.trim(),
        acc: acc.trim(),
        password: password.trim(),
      });
    }
    AsyncStorage.setItem("userData", JSON.stringify(userData));
    alert("Đăng ký thành công!");
    navigation.navigate("Welcome");
    };
    return(
        <View style={{flex: 1, backgroundColor: "#fff", paddingHorizontal: 12}}>
            <View style={{flexDirection: 'column', marginTop: 50}}>
                
                <Text
                    style={{
                        color: "#000",
                        fontSize: 25,
                        paddingLeft: 5,
                        fontWeight: "bold",
                        marginTop: 20,
                        marginBottom: 20
                    }}
                >
                Create An Account
                </Text>
                <MainInput
                    title={"Full Name"}
                    placeholder={"Full Name"}
                    value={name}
                    onChangeText={setName}
                />
                <MainInput
                    title={"Email or phone number"}
                    placeholder={"Email or phone number"}
                    value={acc}
                    onChangeText={setAcc}
                />
                <MainInput
                    style={{
                      textColor: "#fff"
                    }}
                    title={"Nhập mật khẩu"}
                    placeholder={"Nhập mật khẩu"}
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setpassword}
                />
                <MainButton
                    onPress={onSignUp}
                    style={{ marginTop: 12, backgroundColor: "#2986cc" }}
                    title={"Sign Up"}
                />
            </View>
        </View>
    )
}