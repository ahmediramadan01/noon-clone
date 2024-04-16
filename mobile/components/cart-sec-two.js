import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View, } from 'react-native';
import {  IconButton, Text, TextInput } from 'react-native-paper';
import CartItem from '../components/cart-card-item';

export default function SectionTwoCart() {
    return <View style={styles.containerInput}>
           
        <View>
            <Text style={styles.mainTitleVisa}> Order Summary</Text>
        </View>
        <View style={styles.couponSearch}>
            <TextInput
                placeholder=" Coupon Code"
                style={styles.searchCart} />
            <TouchableOpacity style={{ fontWeight: '900', padding: 10, backgroundColor: '#ffffff' }}> | APPLY</TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.btnCart2}>
            <View style={{ display: 'flex', flexDirection: 'row', padding: 20 }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_4078_124046)">
                        <path d="M7.5 12.5L12.5 7.5" stroke="#3866DF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M7.91667 8.33333C8.14679 8.33333 8.33333 8.14679 8.33333 7.91667C8.33333 7.68655 8.14679 7.5 7.91667 7.5C7.68655 7.5 7.5 7.68655 7.5 7.91667C7.5 8.14679 7.68655 8.33333 7.91667 8.33333Z" fill="#3866DF" stroke="#3866DF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12.0834 12.4993C12.3135 12.4993 12.5001 12.3128 12.5001 12.0827C12.5001 11.8526 12.3135 11.666 12.0834 11.666C11.8533 11.666 11.6667 11.8526 11.6667 12.0827C11.6667 12.3128 11.8533 12.4993 12.0834 12.4993Z" fill="#3866DF" stroke="#3866DF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M4.16656 6.00038C4.16656 5.51415 4.35972 5.04784 4.70353 4.70402C5.04735 4.36021 5.51367 4.16705 5.9999 4.16705H6.83323C7.31731 4.16677 7.78164 3.97505 8.1249 3.63372L8.70823 3.05038C8.8786 2.87905 9.08116 2.74309 9.30426 2.65031C9.52737 2.55753 9.76661 2.50977 10.0082 2.50977C10.2499 2.50977 10.4891 2.55753 10.7122 2.65031C10.9353 2.74309 11.1379 2.87905 11.3082 3.05038L11.8916 3.63372C12.2348 3.97505 12.6991 4.16677 13.1832 4.16705H14.0166C14.5028 4.16705 14.9691 4.36021 15.3129 4.70402C15.6567 5.04784 15.8499 5.51415 15.8499 6.00038V6.83372C15.8502 7.3178 16.0419 7.78213 16.3832 8.12538L16.9666 8.70872C17.1379 8.87909 17.2739 9.08165 17.3666 9.30475C17.4594 9.52785 17.5072 9.76709 17.5072 10.0087C17.5072 10.2503 17.4594 10.4896 17.3666 10.7127C17.2739 10.9358 17.1379 11.1383 16.9666 11.3087L16.3832 11.8921C16.0419 12.2353 15.8502 12.6996 15.8499 13.1837V14.0171C15.8499 14.5033 15.6567 14.9696 15.3129 15.3134C14.9691 15.6572 14.5028 15.8504 14.0166 15.8504H13.1832C12.6991 15.8507 12.2348 16.0424 11.8916 16.3837L11.3082 16.9671C11.1379 17.1384 10.9353 17.2743 10.7122 17.3671C10.4891 17.4599 10.2499 17.5077 10.0082 17.5077C9.76661 17.5077 9.52737 17.4599 9.30426 17.3671C9.08116 17.2743 8.8786 17.1384 8.70823 16.9671L8.1249 16.3837C7.78164 16.0424 7.31731 15.8507 6.83323 15.8504H5.9999C5.51367 15.8504 5.04735 15.6572 4.70353 15.3134C4.35972 14.9696 4.16656 14.5033 4.16656 14.0171V13.1837C4.16629 12.6996 3.97456 12.2353 3.63323 11.8921L3.0499 11.3087C2.87856 11.1383 2.7426 10.9358 2.64982 10.7127C2.55704 10.4896 2.50928 10.2503 2.50928 10.0087C2.50928 9.76709 2.55704 9.52785 2.64982 9.30475C2.7426 9.08165 2.87856 8.87909 3.0499 8.70872L3.63323 8.12538C3.97456 7.78213 4.16629 7.3178 4.16656 6.83372V6.00038Z" stroke="#3866DF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_4078_124046">
                            <rect width="20" height="20" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                <Text style={{ marginLeft: 20, fontSize: 16, fontWeight: '600' }}>View Avaliable Offers</Text>
            </View>
            <View>
                <IconButton
                    icon="arrow-right"
                    color="#fff"
                    size={15} />
            </View>
        </TouchableOpacity>
        <View style={{ width: '100%', marginLeft: 10, justifyContent: 'space-between', flexDirection: 'row', marginTop: 15, alignContent: 'center', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', paddingLeft: 25 }}>
                <Text style={{ color: 'gray', marginRight: 6 }}>SubTotal</Text>
                <Text style={{ color: 'gray' }}>(4 Items)</Text>
            </View>
            <View style={{ marginRight: 25, padding: 5 }}>
                <Text>EGP 15010</Text>
            </View>
        </View>
        <View style={{ width: '100%', marginLeft: 10, justifyContent: 'space-between', flexDirection: 'row', marginTop: 15, alignContent: 'center', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', paddingLeft: 25 }}>
                <Text style={{ color: 'gray', marginRight: 6 }}>Shipping</Text>
            </View>
            <View style={{ marginRight: 25, padding: 5 }}>
                <Text style={{ fontWeight: '700', color: '#3866df' }}>Free</Text>
            </View>
        </View>
        <View style={{ width: '100%', marginLeft: 10, justifyContent: 'space-between', flexDirection: 'row', marginTop: 15, alignContent: 'center', alignItems: 'center', marginBottom: 15 }}>
            <View style={{ display: 'flex', flexDirection: 'row', paddingLeft: 25, alignItems: 'center', alignContent: 'center' }}>
                <Text style={{ color: '#000', marginRight: 6, fontWeight: '600', fontSize: 19 }}>Total</Text>
                <Text style={{ color: 'gray', marginLeft: 10 }}>Vat  Included</Text>

            </View>
            <View style={{ marginRight: 25, padding: 5 }}>
                <Text style={{ fontWeight: '700', fontSize: 19 }}>EGP  1509.00</Text>
            </View>
        </View>
        <TouchableOpacity style={styles.btnCart3}>
            <View style={{ display: 'flex', flexDirection: 'row', padding: 20 }}>
                <Image
                    source={require("../assets/val.png")}
                    style={styles.btnimage}
                    resizeMode="stretch" />
            </View>
            <View>
                <Text style={{ marginLeft: 5, fontSize: 14, fontStyle: 'normal', fontWeight: 'normal' }}> Monthly installments plans available</Text>

            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnCart4}>

            <View>
                <Text style={{ marginLeft: 20, fontSize: 16, fontStyle: 'normal', fontWeight: '700', color: 'blue' }}> Continue Shopping</Text>

            </View>
        </TouchableOpacity>
        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', alignContent: 'center',marginLeft:7,marginRight:7 }}>
            <Image
                source={require("../assets/card-mastercard.svg")}
                style={styles.cartImage}
                resizeMode="stretch" />
            <Image
                source={require("../assets/card-visa.svg")}
                style={styles.cartImage}
                resizeMode="stretch" />
            <Image
                source={require("../assets/valu.svg")}
                style={styles.cartImage}
                resizeMode="stretch" />
            <Image
                source={require("../assets/card-amex.svg")}
                style={styles.cartImage}
                resizeMode="stretch" />
            <Image
                source={require("../assets/cod-en.svg")}
                style={styles.cartImage}
                resizeMode="stretch" />
        </View>
    </View>;
}
const styles = StyleSheet.create({
containerInput:{
    marginTop: 20, 
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'flex-start', 
    alignItems: 'center',
     width: '90%', 
    marginLeft: 15,
     marginRight: 15, 
    paddingLeft: 10,
     paddingRight: 10,
     backgroundColor:'#f7f9fe',
     paddingBottom:25,
},
searchCart: {
    flex: 1, 
    backgroundColor: '#ffffff', 
    borderTopLeftRadius: 5, 
    borderTopRightRadius: 5, 
    height: 40, 
    alignSelf: 'center', 
      
},
couponSearch:{
    width:'100%', 
    borderRadius: 5,
    borderColor: '#f7f9fe',
    borderWidth: 0.5, 
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignContent:'center',
    alignItems:'center',
    backgroundColor:'#ffffff',
    marginBottom:20
},
mainTitleVisa:{
    fontSize:17,
    fontWeight:900,
    paddingTop:25,
    paddingBottom:10,
    paddingRight:170,
    width:'100%',
    alignSelf:'flex-start',
    marginBottom:12
    
},
btnCart2:{
    borderRadius: 5,
    borderColor: '#f7f9fe',
    borderWidth: 0.5,
    backgroundColor:'#ffffff',
    height:40,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    width:'100%',
    alignItems:'center',
    alignContent:'center',
},
btnimage:{
   width:50,
   height:40 
},
btnCart3:{
    borderRadius: 5,
    borderColor: 'green',
    borderWidth: 1.5,
    backgroundColor:'#ffffff',
    height:60,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    width:'100%',
    alignItems:'center',
    alignContent:'center',
    padding:20,
    paddingBottom:15,
    paddingTop:15,
    marginBottom:15
},
btnCart4:{
    borderRadius: 5,
    borderColor: 'blue',
    borderWidth: 1.5,
    backgroundColor:'#ffffff',
    height:35,
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    width:'100%',
    alignItems:'center',
    alignContent:'center',
},
cartImage:{
    width:50,
    height:45,
    marginRight:20,
    marginLeft:5,
}
})