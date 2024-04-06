import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import SearchBar from "../components/search-bar";
import OffersSlider from "../components/offers-silder";
import MiniCardsSlider from "../components/mini-cards-slider";
import CardSlider from "../components/card-slider";
import { Button } from "react-native-paper";
import OfferZone from "../components/offer-zone";
import BrandsSlider from "../components/brands-slider";

const miniCardsData = [
  { imageSource: require("../assets/ps5.png"), text: "Item 1" },
  { imageSource: require("../assets/ps5.png"), text: "Item 2" },
  { imageSource: require("../assets/ps5.png"), text: "Item 3" },
  { imageSource: require("../assets/ps5.png"), text: "Item 4" },
  { imageSource: require("../assets/ps5.png"), text: "Item 5" },
  { imageSource: require("../assets/ps5.png"), text: "Item 1" },
  { imageSource: require("../assets/ps5.png"), text: "Item 2" },
  { imageSource: require("../assets/ps5.png"), text: "Item 3" },
  { imageSource: require("../assets/ps5.png"), text: "Item 4" },
  { imageSource: require("../assets/ps5.png"), text: "Item 5" },
];

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <SearchBar />
      </View>

      <View style={styles.silder}>
        <OffersSlider />
      </View>

      {/* advert banner here */}
      <View>
        <Image
          source={require("../assets/advet.avif")}
          style={styles.offerBanner}
        />
      </View>
      {/* mini slider items */}
      <View style={styles.miniSlider}>
        <MiniCardsSlider data={miniCardsData} />
        <MiniCardsSlider data={miniCardsData} />
      </View>

      <View style={styles.cardsSliderContainer}>
        <CardSlider title={"Recommended for you"} />
      </View>
      {/* offers zone */}

      <View style={styles.offerZone}>
        <OfferZone />
      </View>

      {/* ramdnan deals */}
      <View style={styles.cardsSliderContainer}>
        <View style={styles.sliderTitleContainer}>
          <Text style={styles.silderTitle}>Top Ramadan Deals</Text>
          <Button mode="contained" style={styles.shopNowButton}>
            <Text style={styles.shopNowText}>Shop Now</Text>
          </Button>
        </View>
        <CardSlider />
      </View>

      {/* advert banner here */}
      <View>
        <Image
          source={require("../assets/advet2.avif")}
          style={styles.offerBanner}
        />
      </View>

      {/* ramdan groceries */}
      <View style={styles.cardsSliderContainer}>
        <View style={styles.sliderTitleContainer}>
          <Text style={styles.silderTitle}>Ramadan groceries</Text>
          <Button mode="contained" style={styles.shopNowButton}>
            <Text style={styles.shopNowText}>Shop Now</Text>
          </Button>
        </View>
        <CardSlider />
      </View>

      {/* Top Brands */}
      <View style={styles.brandsContainer}>
        <View >
          <Text style={styles.silderTitle}>TOP BRANDS</Text>
        </View>

        <BrandsSlider />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    overflowY: "hidden",
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },
  silder: {
    width: 400,
  },

  offerBanner: {
    height: 80,
    marginVertical: 10,
    marginTop: 30,
  },

  miniSlider: {
    width: 400,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DDD",
    marginTop: 5,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  cardsSliderContainer: {
    flex: 1,
    width: 400,
    marginTop: 30,
    marginBottom: 10,
    paddingBottom: 10,
  },
  sliderTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  brandsContainer: {
    width: 400,
    marginTop: 30,
    marginBottom: 30,
    paddingBottom: 10,
  },

  silderTitle: {
    fontWeight: "bold",
    fontSize: 17,
  },
  offerZone: { 
    marginTop: 20
},

  shopNowButton: {
    height: 40,
    borderRadius: 2,
    backgroundColor: "black",
  },
  shopNowText: {
    fontSize: 12,
  },
});

export default HomeScreen;
