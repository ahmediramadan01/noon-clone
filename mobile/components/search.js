import * as React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import { TextInput } from 'react-native-paper';
const SearchBar = () => {
    const [text, setText] = React.useState("");
    return (
        <>
            <View style={styles.container}>
                <View style={{display:'flex',flexDirection:'row', alignItems:'center',padding:15,margin:10}}>
                <View style={styles.wishlistStyle}>
                    <Image
                        style={styles.wishlistStyle}
                        source={require('../assets/wishlist.png')}
                    />
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        padding: 10,
                        borderRadius: 13,
                        borderWidth: 0.5,
                        borderColor: '#cccccc',
                        marginLeft:10,
                        marginRight:15
                    }}>
                    <TextInput
                        style={{ flex: 1, paddingHorizontal: 5, fontSize: 16,backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                        placeholder="Search"

                    />

                </View>
                <View style={styles.noonLogoStyle}>
                    <Image
                        source={require('../assets/noon.png')}
                    />
                </View>
             </View>


            </View>
        </>
    );
}
const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            padding: 2,
            justifyContent: 'center',
            alignItems: 'start',
            backgroundColor: '#fff',
            borderWidth: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
        },
        wishlistStyle: {
            textAlign: 'center',
            marginTop: 5,
            width:30,
            height:30,
        },
        textInputStyle: {
            backgroundColor: '#FDD7E4',
            borderRadius: 51,
            marginRight: 10,
            marginLeft: 10
        },
        inputRadius: {
            borderRadius: 20,
            backgroundColor: '#fff',
            border: 50
        },
        noonLogoStyle: {
            textAlign: 'center',
            color: '#333333',
            marginBottom: 5,
            borderWidth: 0,
            border: 0
        },
    }
)

export default SearchBar;
