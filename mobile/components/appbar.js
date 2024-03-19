import * as React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Appbar, Text } from 'react-native-paper';

const APPbar = () => {
    const [activeIcon, setActiveIcon] = React.useState(null);

    const handleIconPress = (iconName) => {
        setActiveIcon(iconName);
    };

    const isIconActive = (iconName) => iconName === activeIcon;

    return (
        <Appbar style={styles.bottom}>
            <TouchableOpacity
                style={styles.iconContainer}

            >
                <Appbar.Action
                    icon="home-outline"
                    label="Home"

                    style={[styles.icon, isIconActive('home-outline') && styles.activeIcon]}
                    onPress={() => handleIconPress('home-outline')}
                />
                <Text style={styles.label}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.iconContainer}
                onPress={() => handleIconPress('cards-outline')}
            >
                <Appbar.Action
                    icon="cards-outline"

                    onPress={() => { }}
                    style={[styles.icon, isIconActive('cards-outline') && styles.activeIcon]}
                />
                <Text style={styles.label}>Categories</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.iconContainer}
                onPress={() => handleIconPress('account-outline')}
            >
                <Appbar.Action
                    icon="account-outline"

                    onPress={() => { }}
                    style={[styles.icon, isIconActive('account-outline') && styles.activeIcon]}
                />
                <Text style={styles.label}>Account</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.iconContainer}
                onPress={() => handleIconPress('cart-outline')}
            >
                <Appbar.Action
                    icon="cart-outline"

                    onPress={() => { }}
                    style={[styles.icon, isIconActive('cart-outline') && styles.activeIcon]}
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
    activeIcon: {
        color: 'yellow',
    },
    activeLabel: {
        color: 'yellow',
    },
});

export default APPbar;






