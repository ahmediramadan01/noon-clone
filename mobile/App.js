import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import APPbar from "./components/appbar";
import SearchBar from "./components/search";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        {/* <Text>Hello</Text> */}
        <SearchBar></SearchBar >
        {/* <APPbar></APPbar> */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
