import React from 'react';
import { View, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const SquareBrandItems = ({ items }) => {
    return (
        <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.cardsContainer}
        >
            {items.map((item, index) => (
                <View key={index} style={styles.imgStyle}>
                <TouchableOpacity>
                    <Image
                        style={styles.tinyLogo}
                        source={item}
                        resizeMode="contain"
                    />
                </TouchableOpacity>

                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    imgStyle: {
       display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
    },
    tinyLogo: {
        width: 85,
        height: 40,

    },
});

export default SquareBrandItems;
