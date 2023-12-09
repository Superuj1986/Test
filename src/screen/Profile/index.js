import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState, useLayoutEffect } from "react";
import { Pressable, TouchableOpacity, View, Image, Text} from "react-native";
import MainButton from "../../component/MainButton";
import MenuImage from "../../component/MenuImage";
import HeaderBag from "../../component/Bag_Header";

export default function Profile(props){
    const { navigation } = props;
    const [ user, setUser ] = useState(null);
    const getUserData = async () => {
        let curUser = await AsyncStorage.getItem("curUser");
        curUser = JSON.parse(curUser);
        setUser(curUser);
    };
    const Logout = async () => {
        await AsyncStorage.removeItem("curUser");
        navigation.reset({
            index: 0,
            routes: [{ name: 'Sign In'}],
        });
    };
    useLayoutEffect(() =>{
        navigation.setOptions({
            headerLeft: ()=>(
                <MenuImage
                    onPress={()=>{
                        navigation.openDrawer();
                    }}
                />
            ),
            headerRight:()=>(
                <HeaderBag
                onPress={()=>{
                    navigation.navigate("Shopping Bag");
                }}
                />
            ),
        });
    },[],)
    useEffect(() => {
        getUserData(user);
    },[]);
    return(
        <View style={{flex: 1, marginTop: 100}}>
            <View>
                <View style={{ alignItems: 'center'}}>
                    <Image 
                        style={{ justifyContent:'center', alignItems:'center',borderRadius: 100, marginBottom: 15}} 
                        source={require("../../../assets/avt/avt.png")}
                    />
                    <Text style={{ fontWeight: 'bold', fontSize: 20}}>{user && user.name}</Text>
                </View>
                <View style={{ marginTop: 20, marginLeft: 10}}>
                    <TouchableOpacity style={{ flexDirection: 'row'}}>
                        <Image style={{ borderRadius: 15}} source={require("../../../assets/avt/acc.png")}/>
                        <Text style={{ fontWeight: 'bold', marginLeft:10,fontSize: 20, marginBottom: 10}}>Account Details</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row'}}>
                        <Image style={{ borderRadius: 15}} source={require("../../../assets/avt/heart.png")}/>
                        <Text style={{ fontWeight: 'bold', marginLeft:10,fontSize: 20, marginBottom: 10}}>Wishlist</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row'}}>
                        <Image style={{ borderRadius: 15}} source={require("../../../assets/avt/order_pf.png")}/>
                        <Text style={{ fontWeight: 'bold', marginLeft:10,fontSize: 20, marginBottom: 10}}>Order History</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row'}}>
                        <Image style={{ borderRadius: 15}} source={require("../../../assets/avt/setting.png")}/>
                        <Text style={{ fontWeight: 'bold', marginLeft:10,fontSize: 20, marginBottom: 10}}>Settings</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row'}}>
                        <Image style={{ borderRadius: 15}} source={require("../../../assets/avt/phone.png")}/>
                        <Text style={{ fontWeight: 'bold', marginLeft:10,fontSize: 20, marginBottom: 10}}>Contact</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ position: 'absolute',bottom: 0, width:"100%"}}>
                <MainButton
                    title={"Logout"}
                    onPress={Logout}
                />
            </View>
        </View>
    )
}