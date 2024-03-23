import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const RoundedContainer = ({ imageSource, description }) => {
  return (
    <View style={styles.container}>
      <View style={styles.roundedView}>

        <View style={styles.textContainer}>
          <Text style={styles.description}>{description}</Text>
        </View>

        <View style={styles.imageContainer}>
          <Image source={imageSource} style={styles.image} resizeMode="contain" />
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
  roundedView: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    borderColor: "red", 
    borderWidth: 1, 
    overflow: "hidden",
    width: "100%",
    paddingHorizontal: 20,
    marginBottom: 10,
    elevation: 5,
  },
  imageContainer: {
    width: "30%",
  },
  image: {
    width: "100%",
    height: 40,
    marginTop: 10,
    marginLeft: 20,
  },
  textContainer: {
    width: "70%",
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
  },
});

export default RoundedContainer;
