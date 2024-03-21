import * as React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Appbar, Text } from 'react-native-paper';

const APPbar = () => {
    return (
        <Appbar style={styles.bottom}>
            <TouchableOpacity
                style={styles.iconContainer}

            >
                <Appbar.Action
                    icon="home-outline"
                    label="Home"
                    style={styles.icon}
                    onPress={{}}
                />
                <Text style={styles.label}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.iconContainer}

            >
                <Appbar.Action
                    icon="cards-outline"
                    onPress={{}}
                    style={styles.icon}
                />
                <Text style={styles.label}>Categories</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.iconContainer}

            >
                <Appbar.Action
                    icon="account-outline"
                    onPress={{}}
                    style={styles.icon}
                />
                <Text style={styles.label}>Account</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.iconContainer}

            >
                <Appbar.Action
                    icon="cart-outline"
                    onPress={{}}
                    style={styles.icon}
                />
                <Text style={styles.label}>Cart</Text>
            </TouchableOpacity>
        </Appbar>
    );
};

const styles = StyleSheet.create({
    bottom: {
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    iconContainer: {
        alignItems: 'center',
    },
    icon: {
        margin: 0,
        padding: 2,
        marginLeft: 12,
    },
    label: {
        fontSize: 12,
        marginTop: 4,
        marginLeft: 4,
    },

});

export default APPbar;
