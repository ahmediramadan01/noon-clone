import * as React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { Appbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { connect } from 'react-redux';
import { useSelector } from 'react-redux';

const APPbar = ( { itemCount } ) => {
  const navigation = useNavigation();

  return (
    <Appbar style={styles.bottom}>
      <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate("Home")}>
        <Appbar.Action icon="home-outline" label="Home" style={styles.icon} />
        <Text style={styles.label}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate("Categories")}>
        <Appbar.Action icon="cards-outline" style={styles.icon} />
        <Text style={styles.label}>Categories</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate("Account")}>
        <Appbar.Action icon="account-outline" style={styles.icon} />
        <Text style={styles.label}>Account</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate("Cart")}>
        <Text style={styles.itemsCount}>{itemCount}</Text>
        <Appbar.Action icon="cart-outline" style={styles.icon} />
        <Text style={styles.label}>Cart</Text>
      </TouchableOpacity>
    </Appbar>
  );
};

const styles = StyleSheet.create({
  bottom: {
    position: "fixed",
    bottom: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  iconContainer: {
    alignItems: "center",
  },
  icon: {
    margin: 0,
    padding: 2,
  },
  itemsCount: {
    position: "absolute",
    top: 0,
    fontWeight: "bold",
  },
  label: {
    fontSize: 12,
    marginTop: 4,
    textAlign: "center",
  },
});

const mapStateToProps = (state) => ({
  itemCount: state.cart.items.length, 
});

export default connect(mapStateToProps)(APPbar);
