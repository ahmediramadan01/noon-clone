import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const WishlistContext = createContext();

export const useWishlist = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    loadWishlistData();
  }, []);

  const loadWishlistData = async () => {
    try {
      const wishlistData = await AsyncStorage.getItem("wishlist");
      if (wishlistData !== null) {
        setWishlist(JSON.parse(wishlistData));
      }
    } catch (error) {
      console.error("Error loading wishlist data:", error);
    }
  };

  const saveWishlistData = async (wishlistData) => {
    try {
      await AsyncStorage.setItem("wishlist", JSON.stringify(wishlistData));
    } catch (error) {
      console.error("Error saving wishlist data:", error);
    }
  };

  const addToWishlist = (product) => {
    const updatedWishlist = [...wishlist, product];
    setWishlist(updatedWishlist);
    saveWishlistData(updatedWishlist);
  };

  const removeFromWishlist = (productId) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== productId);
    setWishlist(updatedWishlist);
    saveWishlistData(updatedWishlist);
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};
