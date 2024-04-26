import React from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";

const AddToCartButton = ({ onPress }) => {
  return (
      <View style={styles.container} onPress={onPress}>
        <Button mode="contained" style={styles.button}>
          Add to Cart
        </Button>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
  button: {
    flex: 1,
    borderRadius: 5,
    marginVertical: 5,
  },
});

export default AddToCartButton;
