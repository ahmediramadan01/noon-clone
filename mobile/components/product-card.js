import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Card, Title, Paragraph, IconButton } from "react-native-paper";

const ProductCard = ({ title, price, images }) => {
  // const { title = "Default Title", price = "N/A", images = [] } = product;

  return (
    <Card style={styles.card}>
      <View style={styles.coverContainer}>
        <Card.Cover
          source={{ uri: images[0] || "" }}
          style={styles.cover}
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

      <Card.Content style={styles.cardContent}>
        <Title style={styles.title}>{title}</Title>
        <Paragraph style={styles.price}>
          EGP <Text style={styles.priceValue}>{price}</Text>
        </Paragraph>
      </Card.Content>
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
    height: 300
  },
  coverContainer: {
    position: "relative",
  },
  cover: {
    height: 200,
    objectFit: "cover",
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
  cardContent: {
    paddingTop: 10,
  },
  title: { 
    fontSize: 10,
    marginBottom: 0,
    lineHeight: 15,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 10,
    color: "#888",
    marginBottom: 0,
  },
  priceValue: {
    fontWeight: "bold",
  },
});

export default ProductCard;
