import React, {useLayoutEffect} from "react";
import { FlatList, View, Text, Image, TouchableOpacity } from "react-native";
import DressProduct from "../../component/DressPD";
import dress from "../../data/dress";
import MenuImage from "../../component/MenuImage";
import HeaderBag from "../../component/Bag_Header";

export default function DressScreen(props){
    const { navigation } = props;
    const renderItem = ({ item, index }) => {
        return <DressProduct item={item} index={index} navigation={navigation}/>;
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
    return(
        <View>
            <FlatList
                data={dress}
                vertical
                showsVerticalScrollIndicator={false}
                numColumns={2}
                keyExtractor={(item,index) => item + index}
                renderItem={renderItem}
            />
        </View>
    )
}