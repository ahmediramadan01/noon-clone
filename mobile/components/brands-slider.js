import React from 'react';
import { View, StyleSheet, Image, FlatList } from 'react-native';

const BrandsSlider = () => {
  const brandsData = [
    require('../assets/brand1.avif'),
    require('../assets/brand2.avif'),
    require('../assets/brand3.avif'),
    require('../assets/brand4.avif'),
    require('../assets/brand1.avif'),
    require('../assets/brand2.avif'),
    require('../assets/brand3.avif'),
    require('../assets/brand4.avif'),
    require('../assets/brand1.avif'),
    require('../assets/brand2.avif'),
    require('../assets/brand3.avif'),
    require('../assets/brand4.avif'),
    require('../assets/brand4.avif'),
    require('../assets/brand4.avif'),
  ];

  return (
    <FlatList
      data={brandsData}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={styles.imageContainer}>
          <Image source={item} style={styles.image} />
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    width: 80,
    height: 40,
    borderRadius: 5,
    marginRight: 10,
  },
});

export default BrandsSlider;
