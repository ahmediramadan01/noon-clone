import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const FooterToolbar = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 9; // Total number of pages

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Add logic to handle page change here
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <TouchableOpacity
          key={i}
          style={[styles.pageNumberButton, currentPage === i && styles.activePageNumber]}
          onPress={() => handlePageChange(i)}>
          <Text style={styles.pageNumberText}>{i}</Text>
        </TouchableOpacity>
      );
    }
    return pageNumbers;
  };

  return (
    <View style={styles.footerContainer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {renderPageNumbers()}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    marginLeft:'auto',
    marginRight:'auto'

  },
  pageNumberButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#aaa',
  },
  activePageNumber: {
    backgroundColor: '#007bff',
    borderColor: '#007bff',
  },
  pageNumberText: {
    color: '#333',
  },
});

export default FooterToolbar;
