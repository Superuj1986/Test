import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState, useLayoutEffect } from "react";
import { useIsFocused } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import CartItem from "../../component/CartItem";
import MainButton from "../../component/MainButton";
import { FlatList, View , Text, Image} from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import MenuImage from "../../component/MenuImage";

export default function Cart(props){
    const { navigation } = props;
    const isFocused = useIsFocused();
    const [ cartList, setCartList ] = useState([]);
    const onFinish = async () => {
        if ( cartList.length > 0 ){
            alert("Purchase success!");
            let cartData = [];
            await AsyncStorage.setItem("cartData",JSON.stringify(cartData));
            setCartList([]);
        }
    };
    const getCartData = async () => {
        let cartData = await AsyncStorage.getItem("cartData");
        if ( cartData ){
            cartData = JSON.parse(cartData);
        }else{
            cartData = [];
        }
        setCartList(cartData);
    };
    useEffect(() =>{
        getCartData();
    },[isFocused]);
    const renderItem = ({ item,index }) => {
        return <CartItem item={item} index={index} onChange={setCartList}/>;
    };
    const Total = () => {
        let total = 0;
        cartList.map((value) => ( total += value.price * value.amount));
        return total;
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
        });
    },[],)
    return(
        <View style={{height:"100%"}}>
            <ScrollView>
                <View>
                    {cartList.length > 0 ? (
                        <FlatList
                            data={cartList}
                            keyExtractor={(item,index) => item + index}
                            renderItem={renderItem}
                        />
                    ):(
                        <View
                            style={{flex:1, justifyContent: "center", alignItems: "center"}}
                        >
                            <Ionicons name="cart-outline" size={130} color={"gray"}/>
                            <Text style={{ color: "gray", fontSize: 20}}>Add a product to purchase</Text>
                        </View>
                    )}
                </View>
            </ScrollView>
            <View style={{ backgroundColor:'#bcbcbc',justifyContent:'flex-end', bottom:0, width:"100%"}}>
                    <View style={{ flexDirection: 'row', justifyContent:'space-between', margin: 20}}>
                        <Text style={{ fontWeight:'bold', fontSize:20}}>Total:</Text>
                        <Text style={{ fontWeight:'bold', fontSize:20}}>${Total()}</Text>
                    </View>
                    <MainButton
                        title={"CONTINUE"}
                    />
                </View>
        </View>
    )
}