import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import RoundedContainer from "../components/roundedContainer";
import DeliveryInfo from "../components/delivery-info";
import MainDeliveryInfo from "../components/main-delivery-info";
import Overview from "../components/overview";

import { connect } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import { IconButton, Snackbar } from "react-native-paper";

const ProductScreen = ({ route, addToCart }) => {

  const { product } = route.params;
  const [snackbarVisible, setSnackbarVisible] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setSnackbarVisible(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{product.brand}</Text>
          <Text style={styles.description}>{product.title}</Text>

          <View>
            <View style={styles.productIcons}>
              <IconButton
                icon="heart"
                color="#fff"
                size={20}
                style={styles.wishlistIcon}
                onPress={() => console.log("Add to Wishlist")} // Update this as needed
              />
              <IconButton
                icon="share"
                color="#fff"
                size={20}
                style={styles.shareIcon}
              />
            </View>

            <Image
              source={{ uri: product.images[0] }}
              style={styles.productImage}
              resizeMode="contain"
            />
          </View>

          <Text style={styles.price}>
            EGP <Text style={{ fontWeight: "bold" }}>{product.price}</Text>
            <Text
              style={{
                textDecorationLine: "line-through",
                flex: 1,
                marginLeft: 5,
              }}
            >
              {product.discountPercentage} %
            </Text>
          </Text>
          <View style={styles.expressBanner}>
            <Image
              source={require("../assets/express.svg")}
              style={styles.bannerImage}
            />
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
		  style={styles.Overview}
          title="Overview"
          content={product.description}
        />


        <Snackbar
          visible={snackbarVisible}
          onDismiss={() => setSnackbarVisible(false)}
          duration={1000} 
          style={styles.snackbar}
        >
          Item added to cart!
        </Snackbar>
        </View>

        <TouchableOpacity 
        onPress={handleAddToCart}
        style={styles.cartButtonContainer}
        >

        <View style={styles.cartButton}>
          <Text>Add to Cart</Text>
        </View>
      </TouchableOpacity>
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

  cartButtonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3866df",
    borderRadius: 5,
    position: "fixed",
    bottom: 70,
    width: "90%",
    padding: 20,
    height: 40,
  },
  
  cartButton: {
    color: "#fff",
  },
  snackbar: {
    marginBottom: 80,
    textAlign: "center",
    width: "50%" 
  }
});

const mapDispatchToProps = {
  addToCart,
};

export default connect(null, mapDispatchToProps)(ProductScreen);
