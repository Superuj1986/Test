import { useState, useEffect, useLayoutEffect } from "react";
import { StyleSheet, Text, View, Pressable, SafeAreaView, ScrollView, TouchableOpacity, Image } from "react-native";
import cgr from "../../data/category";
import MenuImage from "../../component/MenuImage";
import HeaderBag from "../../component/Bag_Header";

export default function Category({ navigation }){
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
        <>
            <SafeAreaView>
                <ScrollView>
                    <View style={{ paddingVertical: 40, paddingHorizontal: 10}}>
                        <View style={{marginBottom: 0}}>
                            {cgr.slice(0, 5).map((e,i) => (
                                <TouchableOpacity key={i} style={{marginTop:10,marginBottom:10}}>
                                    <View>
                                        <Image
                                            style={{
                                                width:'100%',
                                                height:100,
                                                borderRadius:10
                                            }}
                                            source={e.image}
                                        />
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </View>
                        <View style={{marginBottom: 0}}>
                            {cgr.slice(5, 6).map((e,i) => (
                                <TouchableOpacity key={i} onPress={() => navigation.navigate('Dresses')} style={{marginTop:10,marginBottom:10}}>
                                    <View>
                                        <Image
                                            style={{
                                                width:'100%',
                                                height:100,
                                                borderRadius:10
                                            }}
                                            source={e.image}
                                        />
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </View>
                        <View style={{marginBottom: 0}}>
                            {cgr.slice(6, 10).map((e,i) => (
                                <TouchableOpacity key={i} style={{marginTop:10,marginBottom:10}}>
                                    <View>
                                        <Image
                                            style={{
                                                width:'100%',
                                                height:100,
                                                borderRadius:10
                                            }}
                                            source={e.image}
                                        />
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}