import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ProductPage from "./screens/product-page";
import Cart from "./cart/cart";
import CartItem from "./components/cart-card-item";
import Footer from "./components/footer";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Cart />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
