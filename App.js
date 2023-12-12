import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import DrawerContainer from './src/screen/Drawer/DrawerContainer';
import HomeScreen from './src/screen/Home';
import Starter from './src/screen/StarterScreen';
import SignInScreen from './src/screen/SignIn';
import SignUpScreen from './src/screen/SignUp';
import DressDetails from './src/screen/DressDetail';
import Category from './src/screen/Category';
import Cart from './src/screen/Cart';
import Search from './src/screen/Search';
import Profile from './src/screen/Profile';
import DressScreen from './src/screen/DressScreen.js';
import Intro from './src/screen/Onboarding/index.js';
import OrdersScreen from './src/screen/Orders/index.js';
import Wishlist from './src/screen/Wishlist/index.js';

const Stack = createStackNavigator();
function MainNavigator(){
  return(
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle:{
          fontWeight: 'bold',
            textAlign: 'center',
            alignSelf: 'center',
            alignItems: 'center'
        }
      }}
    >
      <Stack.Screen name='Slider' component={Intro}/>
      <Stack.Screen name='Welcome' component={Starter}/>
      <Stack.Screen name='Sign In' component={SignInScreen}/>
      <Stack.Screen name='Sign Up' component={SignUpScreen}/>
      <Stack.Screen name='Shopertino' component={HomeScreen}/>
      <Stack.Screen name='Shop' component={Category}/>
      <Stack.Screen name='Dress Details' component={DressDetails}/>
      <Stack.Screen name='Shopping Bag' component={Cart}/>
      <Stack.Screen name='Search' component={Search}/>
      <Stack.Screen name='Profile' component={Profile}/>
      <Stack.Screen name='Dresses' component={DressScreen}/>
      <Stack.Screen name='Orders' component={OrdersScreen}/>
      <Stack.Screen name='Wishlist' component={Wishlist}/>
    </Stack.Navigator>
  )
}
const Drawer = createDrawerNavigator();

function DrawerStack(){
  return(
    <Drawer.Navigator
    drawerPosition='left'
    initialRouteName='Main'
    drawerStyle={{
      width: 250
    }}
    screenOptions={{headerShown: false}}
    drawerContent={({navigation})=> <DrawerContainer navigation={navigation}/>}
    >
          <Drawer.Screen name='Main' component={MainNavigator}/>
        </Drawer.Navigator>
  )
}

export default function App(){
  return(
      <NavigationContainer>
        <DrawerStack/>
      </NavigationContainer>
  )
}
