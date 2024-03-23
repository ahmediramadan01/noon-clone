import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Account from "./account/Account";
import Profile from "./profile/Profile";
import Wishlist from "./wishlist/Wishlist";
import Category from "./category/category";

export default function App() {
	return (
		<View style={styles.container}>
			<Category></Category>
			<StatusBar style="auto" />
		</View>
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
