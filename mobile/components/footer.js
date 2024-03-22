import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Appbar, List, Divider } from 'react-native-paper';
const Footer = () => {
    // const handlePress1 = () => {
    //     // Handle press event here
    //     console.log('Link clicked');
    //   };
    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);
    return (<>
        <ScrollView>
            <View>
                <View style={styles.container}>
                    <Text style={styles.texthero}>We're Always Here To Help</Text>
                    <TouchableOpacity style={styles.container1}>
                        <View style={styles.cir}>
                            <Appbar.Action
                                icon="alert-circle-outline"
                                onPress={{}}
                                style={styles.icon1}


                            />
                        </View>

                        <View style={styles.container2}>
                            <Text style={styles.texthelp}>HELP CENTER</Text>
                            <Text style={styles.texthelp2}>Help.noon.Com</Text>
                        </View>

                    </TouchableOpacity>
                    <View style={styles.line} />
                    <TouchableOpacity style={styles.container1}>
                        <View style={styles.cir}>
                            <Appbar.Action
                                icon="email-outline"
                                onPress={{}}
                                style={styles.icon1}


                            />
                        </View>

                        <View style={styles.container2}>
                            <Text style={styles.texthelp}>EMAIL SUPPORT</Text>
                            <Text style={styles.texthelp2}>egypt@noon.com</Text>
                        </View>

                    </TouchableOpacity>
                    <View style={styles.line} />
                    <TouchableOpacity style={styles.container1}>
                        <View style={styles.cir}>
                            <Appbar.Action
                                icon="phone-outline"
                                onPress={{}}
                                style={styles.icon1}


                            />
                        </View>

                        <View style={styles.container2}>
                            <Text style={styles.texthelp}>PHONE SUPPORT</Text>
                            <Text style={styles.texthelp2}>16358</Text>
                        </View>

                    </TouchableOpacity>
                    <View style={styles.line} />
                </View>
                <View style={styles.line2} />
                <View>
                    <List.Section style={styles.list} >
                        <List.Accordion
                            title="Electronics"
                        >
                            <TouchableOpacity onPress={handlePress}>
                                <Text style={styles.linkText}>Mobiles</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handlePress}>
                                <Text style={styles.linkText}>Tablets</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handlePress}>
                                <Text style={styles.linkText}>Labtops</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handlePress}>
                                <Text style={styles.linkText}>Mobiles</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handlePress}>
                                <Text style={styles.linkText}>Tablets</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handlePress}>
                                <Text style={styles.linkText}>Labtops</Text>
                            </TouchableOpacity>

                        </List.Accordion>
                        <Divider />

                        <List.Accordion
                            title="Fashion"

                            onPress={handlePress}>
                            <TouchableOpacity onPress={handlePress}>
                                <Text style={styles.linkText}>Women's Fasion</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handlePress}>
                                <Text style={styles.linkText}>Men's Fashion</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handlePress}>
                                <Text style={styles.linkText}>Girle's Fashion</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handlePress}>
                                <Text style={styles.linkText}>Boy's Fashion</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handlePress}>
                                <Text style={styles.linkText}>Bag's & Luggage</Text>
                            </TouchableOpacity>

                        </List.Accordion>
                        <Divider />

                        <List.Accordion
                            title="Beauty"

                            onPress={handlePress}>
                            <TouchableOpacity onPress={handlePress}>
                                <Text style={styles.linkText}>Women's Fasion</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handlePress}>
                                <Text style={styles.linkText}>Men's Fashion</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handlePress}>
                                <Text style={styles.linkText}>Girle's Fashion</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handlePress}>
                                <Text style={styles.linkText}>Boy's Fashion</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handlePress}>
                                <Text style={styles.linkText}>Bag's & Luggage</Text>
                            </TouchableOpacity>

                        </List.Accordion>
                        <Divider />

                        <List.Accordion
                            title="Home & Kitchen"

                            onPress={handlePress}>
                            <TouchableOpacity onPress={handlePress}>
                                <Text style={styles.linkText}>Women's Fasion</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handlePress}>
                                <Text style={styles.linkText}>Men's Fashion</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handlePress}>
                                <Text style={styles.linkText}>Girle's Fashion</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handlePress}>
                                <Text style={styles.linkText}>Boy's Fashion</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handlePress}>
                                <Text style={styles.linkText}>Bag's & Luggage</Text>
                            </TouchableOpacity>

                        </List.Accordion>
                    </List.Section>

                </View>
                <View style={styles.line2} />
            </View>
        </ScrollView>
    </>)
}
const styles = StyleSheet.create({
    texthero: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 20

    },
    container: {
        textAlign: "center",
    },
    container1: {
        flexDirection: "row",
        textAlign: "center",
        marginLeft: "30%",
        marginTop: 16
    },
    texthelp: {
        color: "gray"
    },
    texthelp2: {
        fontWeight: "500",
        fontSize: 20
    },
    container2: {
        flexDirection: "column",
        marginLeft: 10

    },
    icon1: {
        justifyContent: "center"
    },
    line: {
        width: '50%',
        height: 1,
        backgroundColor: 'gray',
        marginTop: 10,
        marginLeft: "25%"
    },
    line2: {
        width: '100%',
        height: 10,
        backgroundColor: '#dcdcdc',
        marginTop: 10,

    },
    cir: {
        borderRadius: "50%",
        borderColor: "gray",
        borderWidth: 1,

        borderStyle: "solid",

    },
    linkText: {
        textDecorationLine: 'underline', // Underline style for the link text
        marginLeft: 10,
        marginTop: 10
    },
    list: {
        backgroundColor: "white"
    }
});
export default Footer;