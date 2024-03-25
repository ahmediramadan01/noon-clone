import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Icon, IconButton } from 'react-native-paper';

const TitlesLink = ({ titles }) => {
  return (
    <>
     <ScrollView
horizontal
pagingEnabled
showsHorizontalScrollIndicator={false}
contentContainerStyle={styles.cardsContainer}
>
        {titles.map((item, index) => (
            <TouchableOpacity key={index} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center',margin:0,padding:0}}>
                <Text style={{ fontSize: 13, color: 'gray',marginRight:0,paddingRight:0 }}>{item}</Text>
                <IconButton icon="chevron-right" size={15} style={styles.iconStyle} />
            </TouchableOpacity>
        ))}
        </ScrollView>
    </>
);
}

const styles = StyleSheet.create({
  iconStyle:{
    paddingLeft:0,
    marginLeft:0,
    width:15
  },
  cardsContainer: {
    flexGrow: 1,
    paddingHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    margin:0,
    padding:0
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
