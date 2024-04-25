import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import CircleCardItem from "../components/squareCardItem.js";
import SquareBrandItems from "../components/squareBrandItem.js";
import CircleTitlesScroll from "../components/circle-title-scroll.js";
import VerticalCardSlide from "../components/cardSlider-vertical.js";
import Footer from "../components/footer.js";
import TitlesLink from "../components/titles-link.js";
import FooterToolbar from "../components/toolBars.js";
import CardSlider from "../components/card-slider.js";
import axios from "axios";
import { ActivityIndicator } from "react-native-paper";

const ElectronicsScreen = () => {
  const squareImg_Filterd_Price = [
    require("../assets/imagePrice_1.avif"),
    require("../assets/imagePrice_2.avif"),
    require("../assets/imagePrice_3.avif"),
    require("../assets/imagePrice_4.avif"),
    require("../assets/imagePrice_5.avif"),
    require("../assets/imagePrice_6.avif"),
  ];
  const squareImg_Brands = [
    require("../assets/oppo_Brand.avif"),
    require("../assets/realme_Brand.avif"),
    require("../assets/xi_Brand.avif"),
    require("../assets/samsung_Brand.avif"),
    require("../assets/infinix_Brand.avif"),
    require("../assets/Huawei_Brand.avif"),
  ];

  const chipsData = [
    "Brand",
    "Mobile Ram Size",
    "Mobile Internal Mobile",
    "Mobile Phones",
    "Mobile Pam Size: 8 GB",
  ];
  const headerTitle = [
    "Home",
    "Electronics & Mobiles",
    "Mobiles & Accessories",
    "Mobile Phones",
  ];

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [electronicsProducts, setElectronicsProducts] = useState([]);
  const [beautyProducts, setBeautyProducts] = useState([]);
  const [fashionProducts, setFashionProducts] = useState([]);
  const [groceryProducts, setGroceryProducts] = useState([]);
  const [stationaryProducts, setStationaryProducts] = useState([]);

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

  //   filter data by category
  useEffect(() => {
    if (data) {
      setElectronicsProducts(
        data.filter((product) => product.category === "electronics")
      );
      setBeautyProducts(
        data.filter((product) => product.category === "beauty")
      );
      setFashionProducts(
        data.filter((product) => product.category === "fashion")
      );
      setGroceryProducts(
        data.filter((product) => product.category === "grocery")
      );
    }
  }, [data]);

  if (loading) {
	return (
		<View style={styles.spinner}>
			<ActivityIndicator size="large" color="#0000ff" />
		</View>
	)
};

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TitlesLink titles={headerTitle} />
      </View>

      <View style={styles.sliderContainer}>
        <Image
          style={styles.sliderImage}
          source={require("../assets/category_Mobile_Slider.avif")}
          resizeMode="stretch"
        />
      </View>

      <View style={styles.section}>
        <Image
          style={styles.sectionImage}
          source={require("../assets/BuyinyPriceImg.avif")}
          resizeMode="contain"
        />
        <View style={styles.squareSliderContainer}>
          <CircleCardItem items={squareImg_Filterd_Price} />
        </View>
      </View>

      <View style={styles.section}>
        <Image
          style={styles.sectionImage}
          source={require("../assets/sliderBrand.avif")}
          resizeMode="contain"
        />
        <View style={styles.squareSliderContainer}>
          <SquareBrandItems items={squareImg_Brands} />
        </View>
      </View>

      <View style={styles.section}>
        <CircleTitlesScroll titles={chipsData} />
      </View>

      {/* electronics slider */}
      <View style={styles.cardsSliderContainer}>
        <CardSlider title={"Electronics"} products={electronicsProducts} />
      </View>

      {/* Beauty slider */}
      <View style={styles.cardsSliderContainer}>
        <CardSlider title={"Beauty"} products={beautyProducts} />
      </View>

      {/* fashion slider */}
      <View style={styles.cardsSliderContainer}>
        <CardSlider title={"Fashion"} products={fashionProducts} />
      </View>

      {/* grocery slider */}
      <View style={styles.cardsSliderContainer}>
        <CardSlider title={"Grocery"} products={groceryProducts} />
      </View>


      <View style={styles.footerContainer}>
        <FooterToolbar />
        <Footer />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  sliderContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  sliderImage: {
    width: 400,
    height: 100,
  },
  section: {
    flexDirection: "row",
    marginBottom: 20,
  },
  sectionImage: {
    width: "30%",
    height: 45,
  },
  squareSliderContainer: {
    flex: 1,
    marginLeft: 10,
    overflow: "hidden",
  },
  verticalSliderContainer: {
    width: 400,
    marginBottom: 20,
  },
  cardsSliderContainer: {
    flex: 1,
    // width: 400,
    marginTop: 30,
    marginBottom: 10,
    paddingBottom: 10,
  },
  footerContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  spinner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ElectronicsScreen;
