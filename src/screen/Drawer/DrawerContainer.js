import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import MenuButton from "../../component/MenuButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function DrawerContainer(props){
    const { navigation } = props;
    const [user, setUser] = useState(null);
    const getUserData = async () => {
        let curUser = await AsyncStorage.getItem("curUser");
        curUser = JSON.parse(curUser);
        setUser(curUser);
    };
    const Logout = async () => {
        await AsyncStorage.removeItem("curUser")
        navigation.reset({
            index: 0,
            routes: [{ name: 'Sign In'}],
        });
    };
    useEffect(() => {
        getUserData(user);
    },[]);
    return(
        <View style={styles.content}>
            <View style={styles.container}>
                <MenuButton
                    title="HOME"
                    source={require("../../../assets/icons/home.png")}
                    onPress={() =>{
                        navigation.navigate("Shopertino");
                        navigation.closeDrawer();
                    }}
                />
                <MenuButton
                    title="SHOP"
                    source={require("../../../assets/icons/shop.png")}
                    onPress={() => {
                        navigation.navigate("Shop");
                        navigation.closeDrawer();
                    }}
                />
                <MenuButton
                    title="BAG"
                    source={require("../../../assets/icons/bag_in.png")}
                    onPress={() =>{
                        navigation.navigate("Shopping Bag");
                        navigation.closeDrawer();
                    }}
                />
                <MenuButton
                    title="SEARCH"
                    source={require("../../../assets/icons/search.png")}
                    onPress={() =>{
                        navigation.navigate("Search");
                        navigation.closeDrawer();
                    }}
                />
                <MenuButton
                    title="ORDERS"
                    source={require("../../../assets/icons/deliv.png")}
                    onPress={() =>{
                    }}
                />
                <MenuButton
                    title="WISHLIST"
                    source={require("../../../assets/icons/wishlist.png")}
                    onPress={() =>{
                        navigation.navigate("Wishlist");
                        navigation.closeDrawer();
                    }}
                />
                <MenuButton
                    title="PROFILE"
                    source={require("../../../assets/icons/profile.png")}
                    onPress={() =>{
                        navigation.navigate("Profile");
                        navigation.closeDrawer();
                    }}
                />
                <MenuButton
                    title="LOGOUT"
                    source={require("../../../assets/icons/logout.png")}
                    onPress={Logout}
                />
            </View>
        </View>
    )
}

DrawerContainer.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
    }),
};

const styles = StyleSheet.create({
    content:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    container:{
        flex: 1,
        alignItems: 'flex-start',
        paddingHorizontal: 20
    }
});