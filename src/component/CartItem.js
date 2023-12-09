import React, { useState } from "react";
import { TouchableOpacity, View, Image, Text, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AntDesign, Ionicons } from "@expo/vector-icons";

export default function CartItem( props ){
    const { item, index, onChange } = props;
    const [ amount, setAmount ] = useState(item.amount);
    const Delete = async () => {
        let cartData = await AsyncStorage.getItem("cartData");
        cartData = JSON.parse(cartData);
        let a = [...cartData];
        a.splice(index,1);
        AsyncStorage.setItem("cartData", JSON.stringify(a));
        onChange && onChange(a);
    }
    const Inc = async () => {
        let cartData = await AsyncStorage.getItem("cartData");
        cartData = JSON.parse(cartData);
        let a = [...cartData];
        a[index].amount = amount + 1;
        AsyncStorage.setItem("cartData",JSON.stringify(a));
        setAmount((val) => val + 1);
        onChange && onChange(a);
    }
    const Dec = async () => {
        let cartData = await AsyncStorage.getItem("cartData");
        cartData = JSON.parse(cartData);
        let a = [...cartData];
        a[index].amount = amount - 1;
        AsyncStorage.setItem("cartData",JSON.stringify(a));
        setAmount((val) => val - 1);
        onChange && onChange(a);
    }
    return(
        <ScrollView>
            <View 
                style={{ 
                    flexDirection:"row",
                    marginBottom:12,
                    marginHorizontal:10,
                    shadowColor:"#000",
                    shadowOffset:{
                        width:0,
                        height:4,
                    },
                    shadowOpacity: 0.3,
                    shadowRadius: 4.65,
                    elevation: 8,
                    borderRadius: 20,
                    backgroundColor: "#fff",
                    padding: 6,
                
                }}
            >
                <Image 
                    source={item.image}
                />
                <View style={{ flex: 1, marginRight: 4}}>
                    <Text style={{marginTop: 10, marginBottom: 10}}>{item.name}</Text>
                    <Text style={{ marginBottom: 10}}>Color: {item.color}</Text>
                    <Text style={{ marginBottom: 10}}>Size: {item.size}</Text>
                    <View style={{flexDirection:'row', justifyContent:'space-between', marginTop: 70}}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20}}>${item.price}</Text>
                        <TouchableOpacity onPress={Delete}>
                            <AntDesign name="delete" color="red" size={30}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ justifyContent:'space-around'}}>
                    <TouchableOpacity onPress={Inc}>
                        <Ionicons name="add"/>
                    </TouchableOpacity>
                    <Text style={{ fontWeight:'bold'}}>{amount}</Text>
                    <TouchableOpacity onPress={Dec}>
                        <Ionicons name="remove"/>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}