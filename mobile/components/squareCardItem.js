import React from 'react';
import { View, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const CircleCardItem = ({ items }) => {
    return (
        <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.cardsContainer}
        >
            {items.map((item, index) => (
                <TouchableOpacity>
                <View key={index} style={styles.imgStyle}>
                    <Image
                        style={styles.tinyLogo}
                        source={item}
                        resizeMode="contain"
                    />
                </View>
                </TouchableOpacity>
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
        height: 65,
        borderRadius: 50, 

    },
});

export default CircleCardItem;
