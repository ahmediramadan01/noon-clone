import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Account from "./account/Account";

export default function App() {
	return (
		<View style={styles.container}>
			<Account></Account>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		// alignItems: 'center',
		justifyContent: "space-between",
	},
});
