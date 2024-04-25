import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";
import CartItem from "../components/cart-card-item";
import SectionTwoCart from "../components/cart-sec-two";

const CartScreen = () => {
	return (
		<>
			<View style={styles.container}>
				<View
					style={{
						width: "100%",
						height: 50,
						marginLeft: 10,
						justifyContent: "space-between",
						flexDirection: "row",
						marginTop: 15,
						alignContent: "center",
						alignItems: "center",
						backgroundColor: "#f7f9fe",
						marginBottom: 7,
					}}>
					<View style={{ flexDirection: "row", paddingLeft: 25 }}>
						<Text style={{ marginRight: 15, fontWeight: "700", fontSize: 18 }}>Cart</Text>
						<Text style={{ color: "gray" }}>(4 Items)</Text>
					</View>
					<View style={{ marginRight: 25, padding: 5 }}>
						<Text style={{ marginRight: 15, fontWeight: "700", fontSize: 18 }}>EGP 15010</Text>
					</View>
				</View>
				<View>
					<Image
						source={require("../assets/sliderCart.avif")}
						style={styles.sliderIMG}
						resizeMode="stretch"
					/>
				</View>
				<CartItem />
				<CartItem />
				<CartItem />
				<SectionTwoCart />
			</View>
			<View style={styles.checkBtnContainer}>
				<TouchableOpacity style={styles.checkBtn}>
					<Text
						style={{ marginLeft: 20, fontSize: 16, fontStyle: "normal", fontWeight: "700", color: "#fff" }}>
						{" "}
						Check Out
					</Text>
				</TouchableOpacity>
			</View>
		</>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		// width: "100%",
		justifyContent: "flex-start",
		alignItems: "center",
		marginBottom: 95,
	},
	sliderIMG: {
		width: 400,
		height: 150,
	},
	checkBtn: {
		margin: "auto",
		borderRadius: 5,
		borderColor: "#fff",
		borderWidth: 1.5,
		backgroundColor: "#3866df",
		height: 49,
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		width: "90%",
		alignItems: "center",
		alignContent: "center",
	},
	checkBtnContainer: {
		width: "100%",
		backgroundColor: "#fff",
		height: 80,
		position: "fixed",
		bottom: 0,
		left: 0,
		right: 0,
	},
});

export default CartScreen;
