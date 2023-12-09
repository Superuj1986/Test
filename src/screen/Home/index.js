import React, { useEffect, useLayoutEffect} from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Image, Button, Alert, FlatList } from "react-native";
import MenuImage from "../../component/MenuImage";
import HeaderBag from "../../component/Bag_Header";
import dress from "../../data/dress";
import DressProduct from "../../component/DressPD";
import cgr from "../../data/category";
import MainButton from "../../component/MainButton";

export default function HomeScreen(props){
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
    const createAlert = () =>
        Alert.alert(
        '"Shopertino" Would Like To Send You Notifications',
        'Notifications may include alerts, sounds and icon badges.These can be configured in Settings.',
        textAlign='center'
        [
            {
                text: "Don't allow",
                onPress: () => {},
                style:'cancel',
            },
            {
                text: 'OK', 
                onPress: () => {},
            }
        ]
    );
    useEffect(() => { 
        createAlert();
    });
    const renderItem = ({ item, index }) => {
        return <DressProduct item={item} index={index} navigation={navigation}/>;
    }
    return(
        <ScrollView>
            <View style={{ marginBottom: 30, marginTop: 20 }}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginLeft:10}}>
                    {cgr.slice(0, 10).map((e, i) => (
                        <TouchableOpacity
                            style={{ marginRight: 10 }}
                            key={i}
                        >
                            <View>
                                <Image
                                    style={{
                                    width: 200,
                                    height: 70,
                                    borderRadius: 12,
                                    resizeMode:'contain',
                                    marginRight: 20
                                }}
                                source={e.image}
                                />
                                <Text>{e.title}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
            <View>
                <Text style={{ fontSize: 17, marginBottom: 20, textAlign:'center', fontWeight: 'bold'}}>New Arrivals</Text>
            </View>
            <View style={{ height: 280}}>
                <FlatList
                    data={dress}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item,index) => item + index}
                    renderItem={renderItem}
                >    
                </FlatList>
            </View>
            <View>
                <Text style={{ fontSize: 17, marginBottom: 20, marginLeft: 10, fontWeight: 'bold'}}>Featured</Text>
            </View>
            <View style={{ height: 280}}>
                <FlatList
                    data={dress}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item,index) => item + index}
                    renderItem={renderItem}
                >    
                </FlatList>
            </View>
            <View>
                <Text style={{ fontSize: 17, marginBottom: 20, marginLeft: 10, fontWeight: 'bold'}}>Best Seller</Text>
            </View>
            <View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ margin: 20}}>
                    {dress.slice(3,5).map((e,i) =>(
                        <TouchableOpacity key={i} style={styles.container}>
                            <Image
                                style={{
                                    height:200,
                                    resizeMode:'contain'
                                }}
                                source={e.image}
                            />
                            <View>
                                <Text style={{fontWeight:"bold", textAlign:'center'}}>${e.price}</Text>
                                <Text style={{ textAlign:'center'}}>{e.name}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{margin: 20}}>
                    {dress.slice(5, 7).map((e, i) => (
                                    <TouchableOpacity key={i} style={styles.container} renderItem={renderItem}>
                                        <Image
                                            style={{
                                                height:200,
                                                resizeMode:'contain',
                                                alignItems:'center'
                                            }}
                                            source={e.image}
                                        />
                                        <View>
                                            <Text style={{fontWeight:"bold", textAlign:'center'}}>${e.price}</Text>
                                            <Text style={{ textAlign:'center'}}>{e.name}</Text>
                                        </View>
                                    </TouchableOpacity>
                                ))}
                </ScrollView>
            </View>
            <MainButton
                title={"BROWSE ALL"}
                onPress={() => {
                    navigation.navigate("Shop");
                }}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
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