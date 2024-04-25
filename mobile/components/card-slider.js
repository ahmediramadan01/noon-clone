import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import ProductCard from "../components/product-card";

const CardSlider = ({ title, products }) => {

  if (!products) {
    return null; // or you can return a loading indicator or default message
  }
  
  const renderCards = () => {
    return products.map((product, index) => (
      <View key={index} style={styles.cardContainer}>
        <ProductCard product={product} />
      </View>
    ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{title}</Text>
      </View>

      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.cardsContainer}
      >
        {renderCards()}
      </ScrollView>
    </View>
  );
};;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  headerContainer: {
    paddingHorizontal: 5,
    marginBottom: 5,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cardsContainer: {
    flexGrow: 1,

  },
  cardContainer: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 5,
  },
});

export default CardSlider;
