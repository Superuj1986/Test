import React, { useState, useEffect, useLayoutEffect } from "react";
import { FlatList, Text, View, Image, TouchableHighlight, Pressable, StyleSheet } from "react-native";
import MenuImage from "../../component/MenuImage";
import { TextInput } from "react-native-gesture-handler";
import { GetDressByItsName } from "../../data/getData";

export default function Search(props){
    const { navigation } = props;
    const [ value, setValue ] = useState("");
    const [ data,setData ] = useState([]);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <MenuImage
                  onPress={() => {
                    navigation.openDrawer();
                  }}
                />
              ),
              headerTitle: () => (
                <View style={styles.searchContainer}>
                    <Image style={styles.searchIcon} source={require("../../../assets/icons/search.png")}/>
                    <TextInput
                        style={styles.searchInput}
                        onChangeText={handleSearch}
                        value={value}
                    />
                    <Pressable onPress={() => handleSearch("")}>
                        <Image style={styles.searchIcon} source={require("../../../assets/icons/close.png")}/>
                    </Pressable>
                </View>
              ),
        });
    },[value]);
    useEffect(() => {},[value]);

    const handleSearch = (text) => {
        setValue(text);
        var dressArray1 = GetDressByItsName(text);
        var dressArray = [...new Set(dressArray1)];

        if (text == ""){
            setData([])
        }else{
            setData(dressArray);
        }
    };
    const goToPD = (item) => {
        navigation.navigate("Dress Details",{item});
    };
    const renderItem = ({ item }) => (
        <TouchableHighlight onPress={() => goToPD(item)}>
            <View>
                <Image source={item.image}/>
                <Text style={{ fontWeight:'bold'}}>{item.price}</Text>
                <Text>{item.name}</Text>
            </View>
        </TouchableHighlight>
    )
    return(
        <View>
            <FlatList vertical showsVerticalScrollIndicator={false} numColumns={2} data={data} renderItem={renderItem} keyExtractor={(item) => `${item.id}`}/>
        </View>
    )
}

const styles = StyleSheet.create({
    btnIcon: {
      height: 14,
      width: 14,
    },
    searchContainer: { 
      flexDirection: "row", 
      alignItems: "center", 
      backgroundColor: "#EDEDED", 
      borderRadius: 10, 
      width: 250,
      justifyContent: "space-around"
    },
    searchIcon: { 
      width: 20, 
      height: 20, 
      tintColor: 'grey' 
    },
    searchInput: {
      backgroundColor: "#EDEDED",
      color: "black",
      width: 200,
      height: 50,
    }
  });
  