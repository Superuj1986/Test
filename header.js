import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Ionicons} from '@expo/vector-icons';

export default function Header({navigation}, props){
    const { title } = props;
    return(
        <View style={{ flexDirection: 'row', justifyContent:'space-between', marginBottom: 10}}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Ionicons name='menu' size={37}></Ionicons>
        </TouchableOpacity>
        <Text>{title}</Text>
        <TouchableOpacity>
            <Ionicons name="cart-outline" size={37}></Ionicons>
        </TouchableOpacity>
    </View>
    )
}