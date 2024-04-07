import { View, StyleSheet, Image,Text,TouchableOpacity, ScrollView  } from "react-native";
import CircleCardItem from "../components/squareCardItem.js";
import SquareBrandItems from "../components/squareBrandItem.js";
import CircleTitlesScroll from "../components/circle-title-scroll.js";
import VerticalCardSlide from "../components/cardSlider-vertical.js";
import Footer from "../components/footer.js";
import { Icon, IconButton } from "react-native-paper";
import TitlesLink from "../components/titles-link.js";
import FooterToolbar from "../components/toolBars.js";
// import TitlesLink from "../components/titles-link.js";

const Category = () => {
    const squareImg_Filterd_Price = [
        require("../assets/imagePrice_1.avif"),
        require("../assets/imagePrice_2.avif"),
        require("../assets/imagePrice_3.avif"),
        require("../assets/imagePrice_4.avif"),
        require("../assets/imagePrice_5.avif"),
        require("../assets/imagePrice_6.avif")
    ];
    const squareImg_Brands = [
        require("../assets/oppo_Brand.avif"),
        require("../assets/realme_Brand.avif"),
        require("../assets/xi_Brand.avif"),
        require("../assets/samsung_Brand.avif"),
        require("../assets/infinix_Brand.avif"),
        require("../assets/Huawei_Brand.avif")
    ];

    const chipsData = [
        'Brand',
        'Mobile Ram Size',
        'Mobile Internal Mobile',
        'Mobile Phones',
        'Mobile Pam Size : 8 GB'
    ];
    const headerTitle=[
        'Home',
        'Elecrtonic && Mobiles',
        'Mobiles && Accessories',
        'Mobile Phones'
        
    ]



    return (
        // Page Electronic Category 
        <View style={styles.container}>
            <View style={{display:'flex' ,flexDirection:'row',justifyContent:'center',width:360,marginLeft:25}}>
               {/* <TitlesLink titles={headerTitle}/> */}
               {/* {TitlesLink(headerTitle)} */}
               <TitlesLink titles={headerTitle}/>

                
            </View>
            {/* Section Two ==>( Main Slider ) */}
            <View style={{width:400,justifyContent:'center'}}>
                <Image
                    style={styles.sliderSqrImg}
                    source={require('../assets/category_Mobile_Slider.avif')}
                    resizeMode='stretch'
                />
            </View>
            {/* End Of Section Two */}

            {/* Section Three ==>( Square Imgs Filter Price  ) */}
            <View style={styles.filterdPriceSec}>
                <View style={styles.sliderSqrImg}>
                    <Image
                        style={styles.sliderSqrImg}
                        source={require('../assets/BuyinyPriceImg.avif')}
                        resizeMode="contain"
                    />
                </View>
                {/* horezental scroll of Picees Filterd */}
                <View style={styles.SquarSliderContainer}>
                    <CircleCardItem items={squareImg_Filterd_Price} />
                </View>
                {/* End Of Scroll */}
            </View>
            {/* End Of Section Three */}

            {/* Section Four ==>( Square Imgs Brand   ) */}
            <View style={styles.filterdPriceSec}>
                <View style={styles.sliderSqrImg}>
                    <Image
                        style={styles.sliderSqrImg}
                        source={require('../assets/sliderBrand.avif')}
                        resizeMode="contain"
                    />
                </View>
                {/* horezental scroll of Brands */}
                <View style={styles.SquarSliderContainer}>
                    <SquareBrandItems items={squareImg_Brands} />
                </View>
                {/* End Of Scroll */}
            </View>
            {/* End Of Section Four */}
           <View style={styles.SquarSliderContainer}>
            <CircleTitlesScroll titles={chipsData} />
           </View>
           <View style={{ width:400,marginTop:10,marginBottom:2,marginLeft:20}}>
            <VerticalCardSlide/>
           </View>
           <View>
           <View style={{ width:400,marginTop:10,marginBottom:2,justifyContent:'center'}}>
            <FooterToolbar />
            </View>
           <Footer />
           </View>

        </View>
    );

    }

    // function TitlesLink(items) {
    //     return (
    //         <>
    //          <ScrollView
    //     horizontal
    //     pagingEnabled
    //     showsHorizontalScrollIndicator={false}
    //     contentContainerStyle={styles.cardsContainer}
    //   >
    //             {items.map((item, index) => (
    //                 <TouchableOpacity key={index} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center',margin:0,padding:0}}>
    //                     <Text style={{ fontSize: 13, color: 'gray' }}>{item}</Text>
    //                     <IconButton icon="chevron-right" size={20} />
    //                 </TouchableOpacity>
    //             ))}
    //             </ScrollView>
    //         </>
    //     );
    // }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#fff",
        marginBottom: 20,
    },
    sliderImg1: {
        width: '100%',
        padding: 0,
        margin: 0

    },
    sliderImg: {
        flex: 2,
        padding: 0,
        width: '100%', // Set width to 100%
        height: 100,
        padding: 0,
        margin: 0
    },
    filterdPriceSec: {
        display: 'flex',
        flexDirection: 'column'
    },
    slidermainIMG:{

    },
    sliderSqrImg: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%', // Set width to 100%
        height: 45,
    },
    SquarSliderContainer: {
        flex: 1,
        width: 425,
        overflow: "hidden",
        marginBottom: 10,
        marginTop:10,
    },
    cardsContainer:{
        margin:0,
        padding:0
    }
});

export default Category;
