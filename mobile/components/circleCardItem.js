import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const CircleCardItem = ({ items }) => {
    return (
        <>
            {items.map((item, index) => (
                <View key={index} style={styles.imageContainer}>
                    <Image
                        style={styles.tinyLogo}
                        source={item.image}
                    />
                </View>
            ))}
        </>
    );
};

const styles = StyleSheet.create({
    imageContainer: {
        width: 100,
        height: 100,
        borderRadius: 50, // half of width and height to make a circle
        backgroundColor: 'lightgray',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
});

export default CircleCardItem;
