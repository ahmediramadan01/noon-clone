import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const OfferZone = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.title}>OFFER ZONE</Text>
      </View>
      <View style={styles.row}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/offer-banner.avif')}
            style={styles.image}
          />
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/offer-banner2.avif')}
            style={styles.image}
          />
        </View>

      </View>

      <View style={styles.row}>
      <View style={styles.imageContainer}>
          <Image
            source={require('../assets/offer-banner2.avif')}
            style={styles.image}
          />
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/offer-banner.avif')}
            style={styles.image}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DDD',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    borderRadius: 5,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 90,
    borderRadius: 5,
  },
});

export default OfferZone;
