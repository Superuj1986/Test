import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function DressProduct(props){
    const { item, navigation, index } = props;
    const goToDetail = () =>{
        if ( navigation ){
            navigation.navigate('Dress Details',{
                item:item,
            });
        }
    };
    return(
        <TouchableOpacity
            style={{...styles.container, marginLeft: index == 0 ? 12 : 22}}
            onPress={goToDetail}
        >
            <Image style={styles.imageStyle} source={item?.image}/>
            <View>
                <View>
                    <Text style={{textAlign: 'center', fontWeight: 'bold'}}>${item?.price}</Text>
                </View>
                <Text style={{fontSize: 11, textAlign: 'center'}}>
                    {item?.name}
                </Text>
            </View>
        </TouchableOpacity>
            
    )
}

const styles = StyleSheet.create({
    imageStyle:{
        width: '100%',
        height: 200,
    },
    container: {
        width: 150, 
        borderRadius: 14,
        overflow: 'hidden',
        backgroundColor: '#fff',
        marginLeft: 12,
        flex: 1,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,

        elevation: 8,
    },
})