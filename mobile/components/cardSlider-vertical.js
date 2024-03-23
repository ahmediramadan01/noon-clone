import React from "react";
import { View, Text, FlatList, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import ProductCard from "./product-card";

const VerticalCardSlide = () => {
  const numCards = 12;
  const cards = [];

  for (let i = 0; i < numCards; i += 2) {
    cards.push(
      <View key={i} style={styles.rowContainer}>
        <View style={styles.cardContainer}>
        <TouchableOpacity>
              <ProductCard />
            </TouchableOpacity>        </View>
        {i + 1 < numCards && (
          <View style={styles.cardContainer}>
            <TouchableOpacity>
              <ProductCard />
            </TouchableOpacity>
            </View>
        )}
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={cards}
        renderItem={({ item }) => item}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.cardsContainer}
      />
    </View>
  );
};

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 1,
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
    paddingHorizontal: 5,
    alignItems: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  cardContainer: {
    width: (screenWidth - 30) / 2, // Subtracting paddings and dividing by 2 for two cards per row
  },
  cardsContainer: {
    flexGrow: 1,

  },
});

export default VerticalCardSlide;


