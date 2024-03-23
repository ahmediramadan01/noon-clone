import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  IconButton,
} from "react-native-paper";

const ProductCard = () => {
  const imageHeight = 100;
  const coverHeight = Math.round((imageHeight * 16) / 9);

  return (
    <Card style={styles.card}>
      <View style={styles.coverContainer}>
        <Card.Cover
          source={require("../assets/ps5.png")}
          style={{ height: coverHeight }}
        />
        <IconButton
          icon="heart"
          color="#fff"
          size={15}
          style={styles.topRightButton}
        />
        <IconButton
          icon="cart"
          color="#fff"
          size={15}
          style={styles.bottomRightButton}
        />
      </View>

      <Card.Content>
        <Title style={styles.title}>
          Sony PlayStation 5 Console (Disc Version) With Controller
        </Title>
        <Paragraph style={styles.subtitle}>
          EGP <Text style={{ fontWeight: "bold" }}>38,700</Text>
        </Paragraph>

        <Paragraph style={styles.subtitle}>
          <Text style={{ textDecorationLine: "line-through", flex: "1" }}>
            40,999
          </Text>
          <Text style={{ color: "green", fontWeight: "bold" }}>5%</Text>
        </Paragraph>
      </Card.Content>

      <View style={styles.imageContainer}>
        <Image source={require("../assets/express.svg")} style={styles.image} />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: "gray",
    margin: 5,
    padding: 5,
    width: 170,
  },
  coverContainer: {
    position: "relative",
  },
  topRightButton: {
    position: "absolute",
    top: 2,
    right: 2,
    backgroundColor: "#fff",
    borderRadius: 30,
    width: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  bottomRightButton: {
    position: "absolute",
    bottom: 5,
    right: 5,
    backgroundColor: "#fff",
    borderRadius: 30,
    width: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 10,
    marginBottom: 0,
    lineHeight: 15,
  },
  subtitle: {
    fontSize: 10,
    color: "#888",
    marginBottom: 0,
  },

  imageContainer: {
    alignItems: "left",
    justifyContent: "center",
    marginTop: 5,
    paddingLeft: 15,
  },
  image: {
    width: 60,
    height: 20,
    marginBottom: 10,
  },
});

export default ProductCard;
