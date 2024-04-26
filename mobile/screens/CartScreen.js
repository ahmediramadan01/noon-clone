import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { connect } from 'react-redux';
import CartItem from "../components/cart-card-item";
import SectionTwoCart from "../components/cart-sec-two";
import { removeItemFromCart } from '../actions/cartActions';
import { useEffect } from "react";


const CartScreen = ({ cartItems, removeItem }) => {

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
  
  useEffect(() => {
    
    console.log("Cart items updated:", cartItems);
  }, [cartItems]);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Cart</Text>
          <Text style={styles.itemCount}>({cartItems.length} Items)</Text>
        </View>
        <FlatList
          data={cartItems}
          renderItem={({ item }) => <CartItem item={item} onPress={removeItem} />}
          keyExtractor={(item, index) => index.toString()}
          ListEmptyComponent={<Text>No items in the cart</Text>}
        />
        <SectionTwoCart 
        item={cartItems} 
        itemsLength={cartItems.length}
        totalPrice={totalPrice}
        />
      </View>

      <View style={styles.checkBtnContainer}>
        <TouchableOpacity style={styles.checkBtn}>
          <Text style={styles.checkBtnText}>Check Out</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 95,
  },
  header: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f7f9fe",
    marginBottom: 7,
    paddingHorizontal: 10,
  },
  title: {
    fontWeight: "700",
    fontSize: 18,
    marginRight: 15,
  },
  itemCount: {
    color: "gray",
  },
  totalPrice: {
    fontWeight: "700",
    fontSize: 18,
  },
  checkBtn: {
    borderRadius: 5,
    borderColor: "#fff",
    borderWidth: 1.5,
    backgroundColor: "#3866df",
    height: 49,
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
  },
  checkBtnText: {
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "700",
    color: "#fff",
  },
  checkBtnContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#fff",
    height: 80,
    position: "absolute",
    bottom: 60,
  },
});

const mapStateToProps = (state) => ({
  cartItems: state.cart.items,
});

const mapDispatchToProps = (dispatch) => ({
  removeItem: (itemId) => dispatch(removeItemFromCart(itemId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);
