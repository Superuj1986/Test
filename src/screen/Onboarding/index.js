import React, { useState} from "react";
import { SafeAreaView, StyleSheet, View, Text, Image, Button } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";

export default function Intro(props){
    const { navigation } = props;
  const [showRealApp, setShowRealApp] = useState(false);

  const onDone = () => {
    setShowRealApp(true);
    navigation.navigate("Welcome");
  };

  const onSkip = () => {
    setShowRealApp(true);
    navigation.navigate("Welcome");
  };

  const RenderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'space-evenly',
          paddingBottom: 100,
        }}>
        <Image style={styles.introImageStyle} source={item.image} />
        <Text style={styles.introTitleStyle}>{item.title}</Text>
        <Text style={styles.introTextStyle}>{item.text}</Text>
      </View>
    );
  };

  return (
    <>
      {showRealApp ?(
        <SafeAreaView style={styles.container}>
          <View style={styles.container}>
            <Text style={styles.titleStyle}>
              React Native App Intro Slider using AppIntroSlider
            </Text>
            <Text style={styles.paragraphStyle}>
              This will be your screen when you click Skip from any slide or
              Done button at last
            </Text>
          </View>
        </SafeAreaView>
      ) : (
        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          onDone={onDone}
          showSkipButton={true}
          onSkip={onSkip}
        />
      )}
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    height: 20,
    padding: 10,

  },
  titleStyle: {
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  paragraphStyle: {
    padding: 20,
    textAlign: 'center',
    fontSize: 16,
  },
  introImageStyle: {
    width: 150,
    height: 150,
    marginBottom: -120,
  },
  introTextStyle: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    paddingVertical: 30,
    marginBottom: -90,
  },
  introTitleStyle: {
    fontSize: 25,
    color: 'white',
    marginBottom: -150,
    alignItems: 'center',
    fontWeight: 'bold',
  },
});

const slides = [
  {
    key: 's1',
    text: 'Welcome to Shopertino! Buy our products easily and get access to app only exclusives.',
    title: 'Shopertino',
    image: require("../../../assets/intro/Shopertino.png"),
    backgroundColor: '#505050',
  },
  {
    key: 's2',
    title: 'Shopping Bag',
    text: 'Add products to your shopping cart, and check them out later.',
    image: require("../../../assets/intro/ShoppingBag.png"),
    backgroundColor: '#505050',
  },
  {
    key: 's3',
    title: 'Quick Search',
    text: 'Quickly find the products you like the most.',
    image: require("../../../assets/intro/QuickSearch.png"),
    backgroundColor: '#505050',
  },
  {
    key: 's4',
    title: 'Wishlist',
    text: ' Build a wishlist with your favourite products to buy them later',
    image: require("../../../assets/intro/Wishlist.png"),
    backgroundColor: '#505050',
  },
  {
    key: 's5',
    title: 'Order Tracking',
    text: 'Monitor your orders and get updates when something changes',
    image: require("../../../assets/intro/OrderTracking.png"),
    backgroundColor: '#505050',
  },
  {
    key: 's6',
    title: 'Notifications',
    text: 'Monitor your orders and get updates when something changes',
    image: require("../../../assets/intro/Notifications.png"),
    backgroundColor: '#505050',
  },
  {
    key: 's7',
    title: 'Stripe Payments',
    text: 'We support all payments options, thanks to Stripe',
    image: require("../../../assets/intro/StripePayments.png"),
    backgroundColor: '#505050',
  },
  {
    key: 's8',
    title: 'Apple Pay',
    text: 'Pay with a single click with Apple Pay',
    image: require("../../../assets/intro/ApplePay.png"),
    backgroundColor: "#505050",
  },
];