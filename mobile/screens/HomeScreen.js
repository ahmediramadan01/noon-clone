import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import SearchBar from "../components/search-bar";
import OffersSlider from "../components/offers-silder";
import MiniCardsSlider from "../components/mini-cards-slider";
import CardSlider from "../components/card-slider";
import { ActivityIndicator, Button } from "react-native-paper";
import OfferZone from "../components/offer-zone";
import BrandsSlider from "../components/brands-slider";
import axios from "axios";

// const miniCardsData = [
//   { imageSource: require("../assets/ps5.png"), text: "Item 1" },
//   { imageSource: require("../assets/ps5.png"), text: "Item 2" },
//   { imageSource: require("../assets/ps5.png"), text: "Item 3" },
//   { imageSource: require("../assets/ps5.png"), text: "Item 4" },
//   { imageSource: require("../assets/ps5.png"), text: "Item 5" },
//   { imageSource: require("../assets/ps5.png"), text: "Item 1" },
//   { imageSource: require("../assets/ps5.png"), text: "Item 2" },
//   { imageSource: require("../assets/ps5.png"), text: "Item 3" },
//   { imageSource: require("../assets/ps5.png"), text: "Item 4" },
//   { imageSource: require("../assets/ps5.png"), text: "Item 5" },
// ];

const HomeScreen = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [electronicsProducts, setElectronicsProducts] = useState([]);
  const [beautyProducts, setBeautyProducts] = useState([]);
  const [fashionProducts, setFashionProducts] = useState([]);
  const [miniCardsData, setMiniCardsData] = useState([]);
  const [miniCardsData2, setMiniCardsData2] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/products");
        const products = response.data;
        setData(products);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (data) {
      const miniCards = data.slice(24, 34).map((product) => ({
        imageSource: { uri: product.images[0] },
        text: product.brand,
      }));

      const miniCards2 = data.slice(34, 44).map((product) => ({
        imageSource: { uri: product.images[0] },
        text: product.brand,
      }));

      setMiniCardsData(miniCards);
      setMiniCardsData2(miniCards2);
      setElectronicsProducts(
        data.filter((product) => product.category === "electronics")
      );
      setBeautyProducts(
        data.filter((product) => product.category === "beauty")
      );
      setFashionProducts(
        data.filter((product) => product.category === "fashion")
      );
    }
  }, [data]);

  if (loading) {
    return (
      <View style={styles.spinner}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

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
        <MiniCardsSlider data={miniCardsData2} />
      </View>

      {/* electronics slider */}
      <View style={styles.cardsSliderContainer}>
        <CardSlider
          title={"Recommended for you"}
          products={electronicsProducts}
        />
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
        <CardSlider products={beautyProducts} />
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
        <CardSlider products={fashionProducts} />
      </View>

      {/* Top Brands */}
      <View style={styles.brandsContainer}>
        <View>
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
    marginBottom: 40,
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
  silder: {
    marginBottom: 1,
    marginHorizontal: 10,
  },

  offerBanner: {
    height: 80,
    marginVertical: 10,
    marginHorizontal: 10,
    marginTop: 30,
  },

  miniSlider: {
    // width: 400,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DDD",
    marginTop: 5,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  cardsSliderContainer: {
    flex: 1,
    // width: 400,
    marginTop: 30,
    marginBottom: 10,
    paddingBottom: 10,
  },
  sliderTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    marginHorizontal: 10,
  },

  brandsContainer: {
    // width: 400,
    marginTop: 30,
    marginBottom: 30,
    paddingBottom: 10,
    marginHorizontal: 10,
  },

  silderTitle: {
    fontWeight: "bold",
    fontSize: 17,
  },
  offerZone: {
    marginTop: 20,
    marginHorizontal: 10,
  },

  shopNowButton: {
    height: 40,
    borderRadius: 2,
    backgroundColor: "black",
  },
  shopNowText: {
    fontSize: 12,
  },
  spinner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
