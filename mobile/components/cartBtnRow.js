import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View, } from 'react-native';
import { IconButton, Paragraph, Text } from 'react-native-paper';
const CartBtn=()=>{
return(
     
     <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', paddingLeft: 20, paddingRight: 20 }}>
    <View style={{ display: 'flex', flexDirection: 'row', marginLeft: 20, marginRight: 10 }}>
        <TouchableOpacity>
        <View style={styles.btnContainer}>
            <IconButton
                icon="arrow-down"
                color="#fff"
                size={15} />
            <View>
                <Text style={{ fontSize: 10 }}> 1</Text>
            </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.btnContainer}>
            <IconButton
                icon="cart-remove"
                color="#fff"
                size={15} />
            <View>
                <Text style={{ fontSize: 10 }}> Remove </Text>
            </View>
        </View>
        </TouchableOpacity>
    </View>
    <View style={{ marginRight: 20 }}>
    <TouchableOpacity>
        <View style={styles.btnContainer}>
            <IconButton
                icon="heart"
                color="#fff"
                size={15} />
            <View>
                <Text style={{ fontSize: 10 }}> Add Wishlist</Text>
            </View>
        </View>
        </TouchableOpacity>
    </View>
</View>
    
);
}
const styles = StyleSheet.create({
btnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 0.5, // Optionally add border width
    borderColor: 'black', // Optionally add border color
    backgroundColor: '#ffffff',
    fontSize: 10,
    height: 30,
    paddingRight: 10,
    marginRight: 10
}
})

export default CartBtn;