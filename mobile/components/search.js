import * as React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';

const SearchBar = () => {
    const [text, setText] = React.useState("");
    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <View style={styles.noonLogoStyle}>
                    {/* Noon Logo */}
                    <Image
                        source={require('../assets/noon-logo-en.png')}
                        style={styles.logoImage}
                        resizeMode="contain"
                    />
                </View>
                <View style={styles.inputContainer}>
                    {/* Search Input */}
                    <TextInput
                        style={styles.textInputStyle}
                        placeholder="What Are You Looking For ?"
                        value={text}
                        onChangeText={setText}
                    />
                    <Image
                        source={require('../assets/search.png')}
                        style={styles.searchImg}
                        resizeMode="contain"
                    />
                    {/* Search Icon */}
                </View>
                {/* Wishlist Button */}
                <TouchableOpacity style={styles.wishlistStyle} onPress={() => {}}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.3667 3.84172C16.941 3.41589 16.4357 3.0781 15.8795 2.84763C15.3232 2.61716 14.7271 2.49854 14.125 2.49854C13.5229 2.49854 12.9268 2.61716 12.3705 2.84763C11.8143 3.0781 11.309 3.41589 10.8833 3.84172L10 4.72506L9.11666 3.84172C8.25692 2.98198 7.09086 2.49898 5.875 2.49898C4.65914 2.49898 3.49307 2.98198 2.63333 3.84172C1.77359 4.70147 1.29059 5.86753 1.29059 7.08339C1.29059 8.29925 1.77359 9.46531 2.63333 10.3251L3.51666 11.2084L10 17.6917L16.4833 11.2084L17.3667 10.3251C17.7925 9.89943 18.1303 9.39407 18.3608 8.83785C18.5912 8.28164 18.7099 7.68546 18.7099 7.08339C18.7099 6.48132 18.5912 5.88514 18.3608 5.32893C18.1303 4.77271 17.7925 4.26735 17.3667 3.84172V3.84172Z" stroke="#7E859B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#fff',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        margin:10,
        borderWidth: 1, // border width
        borderColor: 'grey', // border color
        borderRadius: 5,  
        height:28
        
    },
    textInputStyle: {
        flex: 1,
        backgroundColor: ' #00FFFFFF .',
        borderRadius: 20,
        margin: 8,
        border:2,
        borderWidth:3,
        fontSize:12
    },
    wishlistStyle: {
        width: 30,
        height: 30,
        marginTop:10,
        marginLeft:4
    },
    noonLogoStyle: {
        // Adjust styles as needed
    },
    searchImg:{
        width:25,
        height:20,
        margin:10
    },
    logoImage: {
        width: 100, // Adjust width as needed
        height: 40,
    },
    searchIcon: {
        width: 20,
        height: 20,
        // Adjust styles as needed
    },
    wishlistIcon: {
        width: 20,
        height: 20,
        // Adjust styles as needed
    },
});

export default SearchBar;

