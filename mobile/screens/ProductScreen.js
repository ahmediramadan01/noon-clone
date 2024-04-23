import React from "react";
import { ScrollView, View, Text, StyleSheet, Image } from "react-native";
import RoundedContainer from "../components/roundedContainer";
import DeliveryInfo from "../components/delivery-info";
import MainDeliveryInfo from "../components/main-delivery-info";
import Overview from "../components/overview";
import CardSlider from "../components/card-slider";
import AddToCartButton from "../components/add-to-cart";
import { IconButton } from "react-native-paper";

const ProductScreen = () => {
	return (
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				<View style={styles.detailsContainer}>
					<Text style={styles.title}>Sony</Text>
					<Text style={styles.description}>Sony PlayStation 5 Console (Disc Version) With Controller</Text>

					<View>
						<View style={styles.productIcons}>
							<IconButton icon="heart" color="#fff" size={20} style={styles.wishlistIcon} />
							<IconButton icon="share" color="#fff" size={20} style={styles.shareIcon} />
						</View>

						<Image source={require("../assets/ps5.png")} style={styles.productImage} resizeMode="contain" />
					</View>

					<Text style={styles.price}>
						EGP <Text style={{ fontWeight: "bold" }}>38,700</Text>
						<Text
							style={{
								textDecorationLine: "line-through",
								flex: "1",
								marginLeft: 5,
							}}>
							40,999
						</Text>
					</Text>
					<View style={styles.expressBanner}>
						<Image source={require("../assets/express.svg")} style={styles.bannerImage} />
					</View>
				</View>
			</View>

			<View style={styles.container}>
				<RoundedContainer
					imageSource={require("../assets/valu.svg")}
					description="Monthly payments available starting from EGP 13,000"
				/>
				<RoundedContainer
					imageSource={require("../assets/right-arrow.png")}
					description="Monthly payments plans from EGP 15,000"
				/>
				<DeliveryInfo />
				<Image
					source={require("../assets/visa-banner.avif")}
					style={styles.visaBannerImage}
					resizeMode="cover"
				/>
				<MainDeliveryInfo />
				<Overview
					title="Overview"
					content="This is the overview product content and explanation and all product info."
				/>
				<View style={styles.cardsSliderContainer}>
					<CardSlider title={"More From Sony"} />
				</View>
				<View style={styles.cartButton}>
					<AddToCartButton />
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: "#fff",
		marginBottom: 20,
	},
	imageContainer: {
		alignItems: "center",
		marginBottom: 20,
	},
	productImage: {
		width: 400,
		height: 400,
	},
	productIcons: {
		position: "absolute",
		top: 0,
		right: 10,
	},
	wishlistIcon: {
		color: "#fff",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
	shareIcon: {
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
	detailsContainer: {
		flex: 1,
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 10,
		color: "blue",
	},
	price: {
		fontSize: 20,
		marginBottom: 10,
	},
	description: {
		fontSize: 16,
		marginBottom: 20,
	},
	expressBanner: {
		alignItems: "left",
		justifyContent: "center",
		marginTop: 5,
		paddingLeft: 15,
	},
	bannerImage: {
		width: 60,
		height: 20,
		marginBottom: 10,
	},

	visaBannerImage: {
		width: "100%",
		height: 110,
		borderRadius: 10,
		marginBottom: 10,
	},

	cardsSliderContainer: {
		flex: 1,
		width: 400,
		overflow: "hidden",
		marginBottom: 50,
	},

	cartButton: {
		position: "fixed",
		bottom: 0,
		left: 0,
		right: 0,
	},
});

export default ProductScreen;
