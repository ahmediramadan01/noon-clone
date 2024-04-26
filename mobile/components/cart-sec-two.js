import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { IconButton, Text, TextInput } from "react-native-paper";
import CartItem from "../components/cart-card-item";

export default function SectionTwoCart({ item, itemsLength, totalPrice }) {
  return (
    <View style={styles.containerInput}>
      <View>
        <Text style={styles.mainTitleVisa}> Order Summary</Text>
      </View>
      <View style={styles.couponSearch}>
        <TextInput placeholder=" Coupon Code" style={styles.searchCart} />
        <TouchableOpacity
          style={{ fontWeight: "900", padding: 10, backgroundColor: "#ffffff" }}
        >
          {" "}
          | APPLY
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.btnCart2}>
        <View style={{ display: "flex", flexDirection: "row", padding: 20 }}>
          <Text style={{ marginLeft: 20, fontSize: 16, fontWeight: "600" }}>
            View Avaliable Offers
          </Text>
        </View>
        <View>
          <IconButton icon="arrow-right" color="#fff" size={15} />
        </View>
      </TouchableOpacity>
      <View
        style={{
          width: "100%",
          marginLeft: 10,
          justifyContent: "space-between",
          flexDirection: "row",
          marginTop: 15,
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row", paddingLeft: 25 }}>
          <Text style={{ color: "gray", marginRight: 6 }}>SubTotal</Text>

          <Text style={{ color: "gray" }}>{itemsLength}</Text>
        </View>
        <View style={{ marginRight: 25, padding: 5 }}>
          <Text>EGP {totalPrice}</Text>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          marginLeft: 10,
          justifyContent: "space-between",
          flexDirection: "row",
          marginTop: 15,
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row", paddingLeft: 25 }}>
          <Text style={{ color: "gray", marginRight: 6 }}>Shipping</Text>
        </View>
        <View style={{ marginRight: 25, padding: 5 }}>
          <Text style={{ fontWeight: "700", color: "#3866df" }}>Free</Text>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          marginLeft: 10,
          justifyContent: "space-between",
          flexDirection: "row",
          marginTop: 15,
          alignContent: "center",
          alignItems: "center",
          marginBottom: 15,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            paddingLeft: 25,
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <Text
            style={{
              color: "#000",
              marginRight: 6,
              fontWeight: "600",
              fontSize: 19,
            }}
          >
            Total
          </Text>
          <Text style={{ color: "gray", marginLeft: 10 }}>Vat Included</Text>
        </View>
        <View style={{ marginRight: 25, padding: 5 }}>
          <Text style={{ fontWeight: "700", fontSize: 19 }}>
            EGP {totalPrice}
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.btnCart3}>
        <View style={{ display: "flex", flexDirection: "row", padding: 20 }}>
          <Image
            source={require("../assets/val.png")}
            style={styles.btnimage}
            resizeMode="stretch"
          />
        </View>
        <View>
          <Text
            style={{
              marginLeft: 5,
              fontSize: 14,
              fontStyle: "normal",
              fontWeight: "normal",
            }}
          >
            {" "}
            Monthly installments plans available
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnCart4}>
        <View>
          <Text
            style={{
              marginLeft: 20,
              fontSize: 16,
              fontStyle: "normal",
              fontWeight: "700",
              color: "blue",
            }}
          >
            {" "}
            Continue Shopping
          </Text>
        </View>
      </TouchableOpacity>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          alignContent: "center",
          marginLeft: 7,
          marginRight: 7,
        }}
      >
        <Image
          source={require("../assets/card-mastercard.svg")}
          style={styles.cartImage}
          resizeMode="stretch"
        />
        <Image
          source={require("../assets/card-visa.svg")}
          style={styles.cartImage}
          resizeMode="stretch"
        />
        <Image
          source={require("../assets/valu.svg")}
          style={styles.cartImage}
          resizeMode="stretch"
        />
        <Image
          source={require("../assets/card-amex.svg")}
          style={styles.cartImage}
          resizeMode="stretch"
        />
        <Image
          source={require("../assets/cod-en.svg")}
          style={styles.cartImage}
          resizeMode="stretch"
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  containerInput: {
    marginTop: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "90%",
    marginLeft: 15,
    marginRight: 15,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#f7f9fe",
    paddingBottom: 45,
  },
  searchCart: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    height: 40,
    alignSelf: "center",
  },
  couponSearch: {
    width: "100%",
    borderRadius: 5,
    borderColor: "#f7f9fe",
    borderWidth: 0.5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    marginBottom: 20,
  },
  mainTitleVisa: {
    fontSize: 17,
    fontWeight: 900,
    paddingTop: 25,
    paddingBottom: 10,
    paddingRight: 170,
    width: "100%",
    alignSelf: "flex-start",
    marginBottom: 12,
  },
  btnCart2: {
    borderRadius: 5,
    borderColor: "#f7f9fe",
    borderWidth: 0.5,
    backgroundColor: "#ffffff",
    height: 40,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    alignContent: "center",
  },
  btnimage: {
    width: 50,
    height: 40,
  },
  btnCart3: {
    borderRadius: 5,
    borderColor: "green",
    borderWidth: 1.5,
    backgroundColor: "#ffffff",
    height: 60,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    alignItems: "center",
    alignContent: "center",
    padding: 20,
    paddingBottom: 15,
    paddingTop: 15,
    marginBottom: 15,
  },
  btnCart4: {
    borderRadius: 5,
    borderColor: "blue",
    borderWidth: 1.5,
    backgroundColor: "#ffffff",
    height: 35,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
    alignContent: "center",
  },
  cartImage: {
    width: 50,
    height: 45,
    marginRight: 20,
    marginLeft: 5,
  },
});
