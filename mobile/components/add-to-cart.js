import React from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";

const AddToCartButton = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          label="QTY"
          mode="outlined"
          keyboardType="numeric"
          defaultValue="1"
          style={styles.quantityInput}
        />
      </View>
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
  inputContainer: {
    marginRight: 20,
  },
  quantityInput: {
    width: 60,
  },
  button: {
    flex: 1,
    borderRadius: 5,
    marginVertical: 5,
  },
});

export default AddToCartButton;
