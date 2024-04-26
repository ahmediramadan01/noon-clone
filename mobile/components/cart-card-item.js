import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { IconButton, Paragraph, Text } from "react-native-paper";
import { connect } from 'react-redux';
import { removeItemFromCart } from '../actions/cartActions';

const CartItem = ({ item, onRemoveItem }) => {
  const handleRemoveItem = () => {
    onRemoveItem(item.id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.cartContainer}>
        <View style={styles.cartLogo}>
          <Image
            source={{ uri: item.images[0] }}
            style={styles.cartImg}
            resizeMode="contain"
          />
        </View>
        <View style={styles.cartBody}>
          <TouchableOpacity onPress={handleRemoveItem} style={styles.closeIcon}>
          <IconButton
                icon="close"
                color="#fff"
                size={20}
              />
          </TouchableOpacity>
          <View style={styles.detailBodyCart}>
            <View style={styles.mainTitle}>
              <Text style={styles.brand}>{item.brand}</Text>
            </View>
            <View style={styles.cartDescription}>
              <Text>{item.title}</Text>
            </View>
            <View style={styles.price}>
              <Paragraph style={{ fontWeight: "600" }}>
                EGP{" "}
                <Text style={{ fontWeight: "bold", marginRight: 10 }}>
                  {item.price}
                </Text>

                <Text style={{ color: "green", fontWeight: "bold" }}>
                  {item.discountPercentage}% OFF
                </Text>
              </Paragraph>
            </View>

            {/* Additional item details */}
            <View style={styles.details}>
              <Text>Available Quantity: {item.quantityInStock}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#f7f9fe",
  },
  cartContainer: {
    flexDirection: "row",
    width: "100%",
    padding: 10,
    borderRadius: 5,
    elevation: 3,
    backgroundColor: "#f7f9fe",
  },
  cartLogo: {
    width: "35%",
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  cartImg: {
    width: 100,
    height: 100,
    padding: 10,
    margin: 10,
  },
  cartBody: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
  },
  detailBodyCart: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    margin: 10,
    padding: 10,
  },
  mainTitle: {
    fontStyle: "italic",
  },
  brand: {
    color: "#878a93",
    fontSize: 14,
  },
  cartDescription: {
    marginVertical: 5,
  },
  price: {
    marginVertical: 5,
  },
  details: {
    marginTop: 10,
  },
  closeIcon: {
    position: "absolute",
    top: 5,
    right: 5,
    padding: 10,
    paddingTop: 12,
    borderRadius: 50,
    width: 25,
    height: 25,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const mapDispatchToProps = (dispatch) => ({
  onRemoveItem: (itemId) => dispatch(removeItemFromCart(itemId)),
});

export default connect(null, mapDispatchToProps)(CartItem);
