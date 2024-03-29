import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import APPbar from "./components/appbar";
import SearchBar from "./components/search";
import ProductPage from "./screens/product-page";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <View>
        <SearchBar/>
        </View>
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
