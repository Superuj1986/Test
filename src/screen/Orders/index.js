import { useEffect, useState, useLayoutEffect } from "react";
import { View, Image, Text } from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";
import MenuImage from "../../component/MenuImage";
import HeaderBag from "../../component/Bag_Header";
import MainButton from "../../component/MainButton";

export default function OrdersScreen(props){
    const { navigation } = props;
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
    return(
            <ScrollView>
                    <View>
                        <Image
                            style={{
                                width:"100%",
                                height:100
                            }}
                            source={require("../../../assets/purchase.png")}/>
                        <View style={{ marginTop: 20}}>
                            <View style={{flexDirection:'row', marginBottom: 20}}>
                                <Image 
                                    style={{
                                        width:100,
                                        height: 150
                                    }}
                                    source={require("../../../assets/product/mini.png")}/>
                                <Text>Sweet Never Salty Mini Dress</Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <Image 
                                    style={{
                                        width:100,
                                        height: 150
                                    }}
                                    source={require("../../../assets/product/ruched.png")}/>
                                <Text>Aiyana Ruched Mini Dress - Leopard</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row',justifyContent:'space-between', margin:10}}>
                            <Text style={{fontWeight: 'bold',fontSize:20}}>Total: $59.98</Text>
                            <MainButton
                                title={"       REORDER       "}
                            />
                        </View>
                    </View>
                    <View>
                        <Image
                            style={{
                                width:"100%",
                                height:100
                            }}
                            source={require("../../../assets/purchase.png")}/>
                        <View style={{ marginTop: 20}}>
                            <View style={{flexDirection:'row', marginBottom: 20}}>
                                <Image 
                                    style={{
                                        width:100,
                                        height: 150
                                    }}
                                    source={require("../../../assets/product/mini.png")}/>
                                <Text>Sweet Never Salty Mini Dress</Text>
                            </View>
                            
                        </View>
                        <View style={{flexDirection: 'row',justifyContent:'space-between', margin:10}}>
                            <Text style={{fontWeight: 'bold',fontSize:20}}>Total: $39.98</Text>
                            <MainButton
                                title={"       REORDER       "}
                            />
                        </View>
                    </View>
            </ScrollView>
    )
}