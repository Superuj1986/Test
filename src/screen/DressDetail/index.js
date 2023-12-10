import React, { useState} from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { ScrollView, View, Image, Text, Button, TouchableOpacity, Alert } from "react-native"
import MainButton from "../../component/MainButton";
import { Picker } from "@react-native-picker/picker";

export default function DressDetails({ navigation, route }){
    const AddToWL = async () => {

    }
    const params = route.params;
    const { item } = params;
    const [ amount, setAmount ] = useState(1);
    const [ size, setSize ] = useState(item.size[0]);
    const [ color, setColor ] = useState(item.color[0]);
    const AddToCart = async () => {
        let cartData = await AsyncStorage.getItem("cartData");
        if ( cartData ){
            cartData = JSON.parse(cartData);
            cartData.push({
                id: item.id,
                name: item.name,
                image: item.image,
                price: item.price,
                size: size,
                color: color,
                amount: amount
            });
        }else{
            cartData = [];
            cartData.push({
                id: item.id,
                name: item.name,
                image: item.image,
                price: item.price,
                size: size,
                color: color,
                amount: amount
            });
        }
        AsyncStorage.setItem("cartData",JSON.stringify(cartData));
        Alert.alert("Product has been added to your shopping bag!");
        navigation.navigate("Shopping Bag");
    }
    return(
        <ScrollView>
            <View>
                <Image
                    style={{width: "100%", height: 500, marginTop: 10, position:'relative'}} 
                    source={item.image}   
                />
                <View style={{ position: 'absolute',  flex: 1, flexDirection:'row',alignItems:'flex-end',width:"100%",height:500,justifyContent:'space-between'}}>
                    <TouchableOpacity>
                        <Image
                            style={{
                                borderRadius: 20,
                                width:40,
                                height:40,
                                marginBottom: 10,
                                marginLeft: 10
                            }}
                            source={require("../../../assets/icons/heart.png")}
                        />
                    </TouchableOpacity>
                    <View>
                        <Picker
                            style={{ width: 130, height: 30, color:'red'}}
                            selectedValue={size}
                            onValueChange={(itemValue,itemIndex) => setSize(itemValue)}
                        >
                            {item.size.map((value, index) => (
                                <Picker.Item key={index} label={value} value={value}/>
                            ))}
                        </Picker>
                        <Picker
                            style={{
                                color:'red'
                            }}
                            selectedValue={color}
                            onValueChange={(itemValue,itemIndex) => setColor(itemValue)}
                        >
                            {item.color.map((value, index) => (
                                <Picker.Item key={index} label={value} value={value}/>
                            ))}
                        </Picker>
                    </View>
                </View>
                <Text style={{marginLeft:10, marginTop:20, fontSize: 20}}>{item.name}</Text>
                <Text style={{color:'#999999', marginTop: 5, marginLeft: 10, marginBottom: 20, fontSize: 20}}>${item.price}</Text>
                <View style={{ flexDirection:'row'}}>
                    <MainButton
                        title={"            ADD TO BAG             "}
                        onPress={AddToCart}
                    />
                    <MainButton
                        title={"                     Pay                      "}
                    />
                </View>
            </View>
        </ScrollView>
    )
}