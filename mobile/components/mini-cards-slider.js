import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';

const ItemCard = ({ imageSource, text }) => (
  <View style={styles.cardContainer}>
    <Image source={imageSource} style={styles.image} />
    <Text style={styles.text}>{text}</Text>
  </View>
);

const MiniCardsSlider = ({ data }) => (
  <FlatList
    data={data.flat()}
    renderItem={({ item }) => (
      <ItemCard imageSource={item.imageSource} text={item.text} />
    )}
    keyExtractor={(item, index) => index.toString()}
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={styles.contentContainer}
  />
);

const styles = StyleSheet.create({
  contentContainer: {
    justifyContent: 'left',
    alignItems: 'center',
    flexGrow: 1,
    width: 400,
    paddingVertical: 10,
  },
  cardContainer: {
    alignItems: 'center',
    marginHorizontal: 5,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  text: {
    fontSize: 12,
    marginTop: 5,
    textAlign: 'center',
  },
});

export default MiniCardsSlider;
