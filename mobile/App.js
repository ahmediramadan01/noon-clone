import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import ElectronicsScreen from "./screens/ElectronicsScreen";
import AccountScreen from "./screens/AccountScreen";
import CartScreen from "./screens/CartScreen";
import { View, StyleSheet } from "react-native";
import APPbar from "./components/appbar";
import ProductScreen from "./screens/ProductScreen";
import { WishlistProvider } from "./context/WishlistContext";
import { CartProvider } from "./context/CartContext";
import Wishlist from "./screens/WishlistScreen";
import { Provider } from 'react-redux';
import store from './store';

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Categories" component={ElectronicsScreen} />
            <Stack.Screen name="Account" component={AccountScreen} />
            <Stack.Screen name="Cart" component={CartScreen} />
            <Stack.Screen name="Product" component={ProductScreen} />
            <Stack.Screen name="Wishlist" component={Wishlist} />
          </Stack.Navigator>
          <APPbar styles={styles.appBar} />
        </NavigationContainer>
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  appBar: {
    position: "fixed",
    top: 0,
  },
});
