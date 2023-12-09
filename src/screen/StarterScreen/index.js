import { View, Text, Image, StyleSheet} from "react-native";
import MainButton from "../../component/MainButton";

export default function Starter({navigation}){
    return(
        <View
            style={{
                flex:1,
                justifyContent: "center",
                alignItems:'center',
                paddingHorizontal: 12
            }}
        >
            <Image
                source={require("../../../assets/icons/logo.png")}
            />
            <Text
                style={{
                    fontSize: 30,
                    fontWeight:'bold',
                    marginTop: 50,
                    marginBottom: 40
                }}
            >Welcome to Shopertino</Text>
            <Text>Shop & get updates on new products,</Text>
            <Text>promotions and sales with our mobile app.</Text>
            <MainButton
                style={{ marginTop: 50, marginBottom: 30}}
                title={'                             Log In                             '}
                onPress={() => navigation.navigate('Sign In')}
            />
            <MainButton
                style={{ marginBottom: 50, textColor: '#0b5394'}}
                title={'                             Sign Up                             '}
                onPress={() => navigation.navigate('Sign Up')}
            />
        </View>
    )
}