import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import ProductCard from "../components/product-card";

const CardSlider = () => {
  const numCards = 6;
  const cards = [];

  for (let i = 0; i < numCards; i++) {
    cards.push(
      <View key={i} style={styles.cardContainer}>
        <ProductCard />
      </View>
    );
  }

  return (
    
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>More from Sony</Text>
      </View>

      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.cardsContainer}
      >
        {cards}
      </ScrollView>
    </View>
  );
};

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
