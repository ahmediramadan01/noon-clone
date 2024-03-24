// import React from 'react';
// import { View, StyleSheet, Image } from 'react-native';
// import Swiper from 'react-native-swiper';

// const BrandsSlider = () => {
//   const brandsData = [
//     require('../assets/brand1.avif'),
//     require('../assets/brand2.avif'),
//     require('../assets/brand3.avif'),
//     require('../assets/brand4.avif'),
//     require('../assets/brand1.avif'),
//     require('../assets/brand2.avif'),
//     require('../assets/brand3.avif'),
//     require('../assets/brand4.avif'),
//     require('../assets/brand1.avif'),
//     require('../assets/brand2.avif'),
//     require('../assets/brand3.avif'),
//     require('../assets/brand4.avif'),
//   ];

//   // Group brands data into two rows
//   const firstRowBrands = brandsData.slice(0, 7);
//   const secondRowBrands = brandsData.slice(7, 14);

//   return (
//     <Swiper style={styles.container} showsPagination={false}>
//       <View style={styles.row}>
//         {firstRowBrands.map((brand, index) => (
//           <Image key={index} source={brand} style={styles.image} />
//         ))}
//       </View>
//       <View style={styles.row}>
//         {secondRowBrands.map((brand, index) => (
//           <Image key={index} source={brand} style={styles.image} />
//         ))}
//       </View>
//     </Swiper>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     height: 200, // Adjust height as needed
//   },
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     flexWrap: 'wrap',
//   },
//   image: {
//     width: 80, // Adjust width as needed
//     height: 80, // Adjust height as needed
//     marginVertical: 10,
//   },
// });

// export default BrandsSlider;
