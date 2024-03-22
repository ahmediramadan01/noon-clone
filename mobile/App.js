import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ProductPage from "./screens/product-page";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <ProductPage />
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
