import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Icon } from 'react-native-paper';

const TitlesLink = ({ titles }) => {
  return (
    <ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.cardsContainer}
    >
      {titles.map((title, index) => (
        <TouchableOpacity key={index} style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          <Icon name="arrow-right" size={20} color="red" />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  cardsContainer: {
    flexGrow: 1,
    paddingHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5
  },
  title: {
    fontSize: 13,
    color: 'gray',
    marginRight: 5 // Add margin to separate title and icon
  }
});

export default TitlesLink;
