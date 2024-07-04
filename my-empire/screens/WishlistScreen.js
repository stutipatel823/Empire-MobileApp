import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { useFonts } from "expo-font";
import Entypo from "react-native-vector-icons/Entypo";

const { width, height } = Dimensions.get("window");
const wishlistItems = [
  {
    id: "1",
    name: "Chopard Happy",
    price: 249.0,
    image: require("../assets/Figure1.png"),
    quantity: 1,
  },
  {
    id: "2",
    name: "Chopard Happy",
    price: 249.0,
    image: require("../assets/Figure7.png"),
    quantity: 1,
  },
  {
    id: "3",
    name: "Chopard Happy",
    price: 249.0,
    image: require("../assets/Figure2.png"),
    quantity: 1,
  },
  {
    id: "4",
    name: "Chopard Happy",
    price: 249.0,
    image: require("../assets/Figure5.png"),
    quantity: 1,
  },
  {
    id: "5",
    name: "Chopard Happy",
    price: 249.0,
    image: require("../assets/Figure6.png"),
    quantity: 1,
  },
  {
    id: "6",
    name: "Chopard Happy",
    price: 249.0,
    image: require("../assets/Figure3.png"),
    quantity: 1,
  },
];

const handleAddToCart = () => {
  // Add to cart logic here
};

const WishlistItem = ({ item }) => {
  const [heartIcon, setHeartIcon] = useState("heart");

  const handleAddToWishlist = () => {
    setHeartIcon((prevIcon) => (prevIcon === "heart" ? "heart-outlined" : "heart"));
  };

  return (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} resizeMode="contain" />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>${item.price}</Text>
        <TouchableOpacity style={styles.addToCartBTN} onPress={handleAddToCart}>
          <Entypo
            name="shopping-cart"
            size={15}
            color="white"
            style={{ marginRight: "5%" }}
          />
          <Text style={{ color: "white" }}>Add to cart</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleAddToWishlist}>
        <Entypo name={heartIcon} size={25} color="#212121" />
      </TouchableOpacity>
    </View>
  );
};

export default function WishlistScreen() {
  useFonts({
    "Plus Jakarta Sans": require("@fontsource/plus-jakarta-sans").default,
  });


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wishlist❤️</Text>
      <FlatList
        data={wishlistItems}
        renderItem={({ item }) => <WishlistItem item={item} />}
        keyExtractor={(item) => item.id}
        numColumns={1}
        contentContainerStyle={styles.listContainer}
        style={{ height: height * 0.5 }} // Adjust FlatList height here
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor:'#FFFCF5',
  },
  title: {
    fontFamily: "Plus Jakarta Sans",
    fontSize: 20,
    textAlign: "center",
    color: "#212121",
    fontWeight: "bold",
    marginTop: "15%",
    marginBottom: 10,
  },
  listContainer: {
    width: "95%",
    marginLeft: "2%",
    borderTopWidth: 1,
    borderColor: "#d9d9d9",
    marginBottom: 10, // Add margin bottom to separate from bottomContainer
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#d9d9d9",
    paddingVertical: "5%",
    paddingHorizontal: "2%",
  },
  itemImage: {
    width: 100,
    height: 100,
  },
  itemDetails: {
    flex: 1,
    marginLeft: 10,
  },
  itemName: {
    fontFamily: "Plus Jakarta Sans",
    fontSize: 18,
    color: "#212121",
  },
  itemPrice: {
    fontFamily: "Plus Jakarta Sans",
    fontSize: 16,
    color: "#808080",
    fontWeight: "bold",
  },
  addToCartBTN: {
    padding: 6,
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "50%",
    backgroundColor: "#212121",
  },
});
