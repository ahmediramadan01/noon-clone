import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import * as React from 'react';

import { Appbar, Button } from 'react-native-paper';
import ProductCard from "../components/productCard";
const Wishlist = () => {

    return (<>
        <ScrollView>
            <View >
                <Text style={styles.text}>+ Create</Text>
                {/* <Image
                    source={require('./../assets/noon.png')}
                    style={styles.image}
                /> */}
                <View style={styles.container}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 11.6667H5" stroke="#404553" stroke-width="2" stroke-linecap="round" />
                        <path d="M9.66667 16.3333L5 11.6667L9.66667 7" stroke="#404553" stroke-width="2" stroke-linecap="round" />
                    </svg>
                    <svg width="100" height="24" viewBox="0 0 173 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={styles.noonsvg}>
                        <path d="M161.706 9.67833C158.639 9.67833 155.855 10.676 153.72 12.5128L153.105 10.3357H147.692V37.7063H154.573V22.8345C154.573 19.669 156.695 16.4615 160.746 16.4615C163.916 16.4615 165.804 18.6946 165.804 22.4289V37.711H172.685V21.9254C172.685 14.4849 168.378 9.67833 161.706 9.67833ZM106.709 24C106.709 28.3683 103.86 31.5385 99.9301 31.5385C96 31.5385 93.1515 28.3683 93.1515 24C93.1515 19.6317 96 16.4615 99.9301 16.4615C103.855 16.4615 106.709 19.6317 106.709 24ZM99.9254 9.67833C92.2098 9.67833 86.1632 15.9674 86.1632 23.9953C86.1632 32.0233 92.2051 38.317 99.9254 38.317C107.641 38.317 113.688 32.028 113.688 23.9953C113.688 15.9674 107.646 9.67833 99.9254 9.67833ZM136.779 24C136.779 28.3683 133.925 31.5385 130 31.5385C126.075 31.5385 123.221 28.3683 123.221 24C123.221 19.6317 126.075 16.4615 130 16.4615C133.93 16.4615 136.779 19.6317 136.779 24ZM130 9.67833C122.284 9.67833 116.238 15.9674 116.238 23.9953C116.238 32.0233 122.28 38.317 130 38.317C137.716 38.317 143.762 32.028 143.762 23.9953C143.762 15.9674 137.72 9.67833 130 9.67833ZM71.2587 9.67833C68.1958 9.67833 65.4079 10.676 63.2681 12.5128L62.6527 10.3357H57.2448V37.7063H64.1259V22.8345C64.1259 19.669 66.2471 16.4615 70.2984 16.4615C73.4685 16.4615 75.3566 18.6946 75.3566 22.4289V37.711H82.2377V21.9254C82.2377 14.4849 77.9301 9.67833 71.2587 9.67833Z" fill="#404553" />
                        <path d="M0 25.1375C0 38.0047 10.9371 48 23.6503 48C36.9604 48 47.7482 37.2634 47.7482 24.1492C47.7482 16.4802 44.0373 9.74825 38.5455 5.24942L34.5361 12.1772C37.8508 14.9977 40.1259 19.352 40.1259 24.2517C40.1259 33.1562 32.7552 40.4802 23.6503 40.4802C14.5967 40.4802 7.22144 33.1562 7.22144 24.0047C7.22144 22.9138 7.31935 21.8275 7.51981 20.7879L0 25.1375ZM31.0723 1.18881C28.7972 0.344988 26.7692 0 24.7413 0C23.2075 0 21.8695 0.195804 20.8811 0.39627L15.7343 9.3007C17.6131 8.21445 20.0373 7.61772 22.662 7.61772C24.1958 7.61772 25.5804 7.81352 27.0163 8.20979L31.0723 1.18881Z" fill="#404553" />
                    </svg>
                </View>
                <Text style={styles.text1}>menna ismail
                    <Appbar.Action
                        icon="lock"
                        onPress={{}}

                    />
                </Text>
                <View style={styles.line} />
                <View style={styles.container}>

                    <Text style={styles.text2}>3 items
                        <Appbar.Action
                            icon="lock"
                            onPress={{}}

                        />
                        <Button mode="contained" style={styles.btn} onPress={{}}>
                            <Text style={styles.text3}>Default</Text>
                        </Button>
                        <View style={styles.container1}>
                            <View style={styles.cir} ><Appbar.Action
                                icon="share-variant-outline"
                                onPress={{}}

                            /></View>
                            <View style={styles.cir} ><Appbar.Action
                                icon="dots-horizontal"
                                onPress={{}}

                            /></View>

                        </View>
                    </Text>

                </View>
                <View style={styles.line} />
                <View style={styles.container3}>
                    <ProductCard></ProductCard>
                    <ProductCard ></ProductCard>
                </View>
                <View style={styles.container3}>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                </View>
                <ProductCard></ProductCard>


            </View>
        </ScrollView>
    </>);
}
const styles = StyleSheet.create({
    view: {
        flex: 1,
    },
    text: {
        fontSize: 16,

        color: 'blue',
        marginRight: 10,
        marginTop: 10,
        textAlign: "right",


    },
    text1: {
        fontSize: 16,
        fontWeight: "500",
        color: 'blue',
        marginTop: 20,
        marginLeft: 20,
        textAlign: "left",
    },
    icon: {
        marginTop: 10,
        marginLeft: 44,
        textAlign: "left",
    },

    image: {
        width: 100,
        height: 50,
        marginTop: 0,
        marginLeft: 50,
        resizeMode: 'contain',



    },
    line: {
        width: '100%',
        height: 1,
        backgroundColor: 'gray',
        marginTop: 10
    },
    text2: {
        fontSize: 16,
        fontWeight: "bold",

        marginTop: 10,
        marginLeft: 20,
        textAlign: "left",
    },
    btn: {
        height: 28,
        backgroundColor: "blue",
        textAlign: "center"
    },
    text3: {
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",


    },
    cir: {


        borderRadius: "50%",
        borderColor: "gray",
        borderWidth: 1,

        borderStyle: "solid",
        marginRight: 10,
    },
    cir2: {


        borderRadius: "50%",
        borderColor: "gray",
        borderWidth: 1,

        borderStyle: "solid",

    },
    container: {
        flexDirection: 'row',

    },
    container1: {
        flexDirection: 'row',
        marginLeft: 120
    },
    container3: {
        flexDirection: 'row',

        margin: 10

    },
    card2: {
        marginLeft: 20
    },
    noonsvg: {
        marginTop: 0
    }
});
export default Wishlist;