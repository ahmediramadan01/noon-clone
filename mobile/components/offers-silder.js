import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper/src';

const OffersSlider = () => {
  const images = [
    { id: '1', source: require('../assets/offer-banner.png') },
    { id: '2', source: require('../assets/offer-banner.png') },
    { id: '3', source: require('../assets/offer-banner.png') },
  ];

  return (
    <Swiper
      style={styles.wrapper}
      showsButtons={true}
      showsPagination={false}
      loop={true}
      autoplay={true}
      autoplayTimeout={2}
    >
      {images.map((item) => (
        <View key={item.id} style={styles.slide}>
          <Image source={item.source} style={styles.image} />
        </View>
      ))}
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 150,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '98%',
    height: '100%',
    borderRadius: 10,
  },
});

export default OffersSlider;
