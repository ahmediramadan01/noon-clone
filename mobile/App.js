import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import ElectronicsScreen from "./screens/ElectronicsScreen";
import AccountScreen from "./screens/AccountScreen";
import CartScreen from "./screens/CartScreen";
import { View, StyleSheet } from "react-native";
import APPbar from "./components/appbar";

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Categories" component={ElectronicsScreen} />
          <Stack.Screen name="Account" component={AccountScreen} />
          <Stack.Screen name="Cart" component={CartScreen} />
        </Stack.Navigator>
        <APPbar styles={styles.appBar}/>
      </NavigationContainer>
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
  }
});
