import { StyleSheet, Text, View } from "react-native";
import Category from "./category/category.js";
import Footer from "./components/footer.js";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Category />
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