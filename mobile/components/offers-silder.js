import React from 'react';
import { View, FlatList, Image, StyleSheet, Dimensions } from 'react-native';

const OffersSlider = () => {
  const images = [
    { id: '1', source: require('../assets/offer-banner.png') },
    { id: '2', source: require('../assets/offer-banner.png') },
    { id: '3', source: require('../assets/offer-banner.png') },
  ];

  return (
    <FlatList
      data={images}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <Image source={item.source} style={styles.image} />
        </View>
      )}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: 400,
    marginHorizontal: 10,
  },

  image: {
    width: 390,
    height: 150,
    borderRadius: 10,
  },
});

export default OffersSlider;
