import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const deliveryInfo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.roundedContainer}>
        <View style={styles.infoContainer}>
          <View style={styles.infoItem}>
            <Image
              source={require("../assets/delivery.png")}
              style={styles.icon}
              resizeMode="contain"
            />
            <Text style={styles.title}>Delivery by Noon</Text>
          </View>
          <View style={styles.infoItem}>
            <Image
              source={require("../assets/high-rate.png")}
              style={styles.icon}
              resizeMode="contain"
            />
            <Text style={styles.title}>High Rated Seller</Text>
          </View>
          <View style={styles.infoItem}>
            <Image
              source={require("../assets/low-return.png")}
              style={styles.icon}
              resizeMode="contain"
            />
            <Text style={styles.title}>Low Returns</Text>
          </View>
          <View style={styles.infoItem}>
            <Image
              source={require("../assets/secure-trans.png")}
              style={styles.icon}
              resizeMode="contain"
            />
            <Text style={styles.title}>Secure Transaction</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  roundedContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    borderColor: "red",
    borderWidth: 1,
    overflow: "hidden",
    marginBottom: 10,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  infoItem: {
    alignItems: "center",
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  title: {
    fontSize: 12,
    textAlign: "center",
    width: 60,
  },
});

export default deliveryInfo;
