import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const MainDeliveryInfo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <DeliveryInfoItem
          imageSource={require("../assets/delivery.png")}
          title="Free Delivery on Pickup Points"
        />
        <DeliveryInfoItem
          imageSource={require("../assets/high-rate.png")}
          title="1 year warranty"
        />
        <DeliveryInfoItem
          imageSource={require("../assets/low-return.png")}
          title="This item cannot be exchanged or returned"
        />
      </View>
    </View>
  );
};

const DeliveryInfoItem = ({ imageSource, title }) => {
  return (
    <View style={styles.infoItem}>
      <Image source={imageSource} style={styles.icon} resizeMode="contain" />
      <Text style={styles.title}>{title}</Text>
      <Ionicons name="arrow-forward" size={24} color="black" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingBottom: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    marginTop: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  column: {
    flexDirection: "column",
    marginBottom: 10,
  },
  infoItem: {
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: 10,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  title: {
    fontSize: 16,
    flex: 1,
  },
});

export default MainDeliveryInfo;
