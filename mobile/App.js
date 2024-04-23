import { StyleSheet, Text, View } from "react-native";
import Navigation from "./Navigation";
import SearchBar from "./components/search-bar";
import APPbar from "./components/appbar";
import HomeScreen from "./screens/HomeScreen";
import ElectronicsScreen from "./screens/ElectronicsScreen";
import ProductScreen from "./screens/ProductScreen";
import AccountScreen from "./screens/AccountScreen";
import CartScreen from "./screens/CartScreen";
import ProfileScreen from "./screens/ProfileScreen";

export default function App() {
	return (
		<>
			<View style={styles.container}>
				<SearchBar />
				{/* <Navigation /> */}
				<HomeScreen></HomeScreen>
				{/* <ElectronicsScreen></ElectronicsScreen>
				<ProductScreen></ProductScreen>
				<AccountScreen></AccountScreen>
				<CartScreen></CartScreen>
				<ProfileScreen></ProfileScreen> */}
				<APPbar />
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
