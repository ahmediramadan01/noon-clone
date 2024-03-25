import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View, } from 'react-native';
import {   Text } from 'react-native-paper';
import CartItem from '../components/cart-card-item';
import SectionTwoCart from '../components/cart-sec-two';

const Cart = () => {
    return (
        <View style={styles.container}>
            <View style={{ width: '100%',height:50, marginLeft: 10, justifyContent: 'space-between', flexDirection: 'row', marginTop: 15, alignContent: 'center', alignItems: 'center',backgroundColor:'#f7f9fe',marginBottom:7 }}>
            <View style={{ flexDirection: 'row', paddingLeft: 25 }}>
                <Text style={{ marginRight: 15 ,fontWeight:'700',fontSize:18}}>Cart</Text>
                <Text style={{ color: 'gray' }}>(4 Items)</Text>
            </View>
            <View style={{ marginRight: 25, padding: 5 }}>
                <Text style={{ marginRight: 15 ,fontWeight:'700',fontSize:18}}>EGP 15010</Text>
            </View>
        </View>
            <View >
                <Image 
                source={require("../assets/sliderCart.avif")}
                style={styles.sliderIMG} 
                resizeMode="stretch" 
                />
            </View>
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <SectionTwoCart />
           
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom:25
    },
    sliderIMG:{
        width:400,
        height:150
    },
    
});

export default Cart;