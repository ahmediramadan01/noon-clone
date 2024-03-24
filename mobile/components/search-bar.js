import React from 'react';
import { View, TextInput, StyleSheet, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/noon-logo-en.svg')}
        style={styles.logo}
      />
      <View style={styles.searchContainer}>
        <Feather name="search" size={24} color="black" />
        <TextInput
          style={styles.input}
          placeholder="What are you looking for?"
          placeholderTextColor="#888"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginHorizontal: 10,
    marginTop: 10,
  },
  logo: {
    width: 75,
    height: 20,
    marginRight: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    borderRadius: 7,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: 300,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  input: {
    flex: 1,
    marginLeft: 5,
    fontSize: 16,
  },
});

export default SearchBar;
