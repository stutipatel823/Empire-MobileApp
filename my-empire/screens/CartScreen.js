import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useFonts } from "expo-font";
import Feather from "react-native-vector-icons/Feather"; // Import FontAwesome from react-native-vector-icons

const { width, height } = Dimensions.get("window");

export default function CartScreen() {
  useFonts({
    "Plus Jakarta Sans": require("@fontsource/plus-jakarta-sans").default,
  });

  const [cartItems, setCartItems] = useState([
    {
      id: "1",
      name: "Chopard Happy",
      price: 249.0,
      image: require("../assets/Figure1.png"),
      quantity: 1,
    },
    {
      id: "2",
      name: "BVLGARI Rose Goldea",
      price: 229.0,
      image: require("../assets/Figure1.png"),
      quantity: 1,
    },
    {
      id: "3",
      name: "Dior Happy",
      price: 229.0,
      image: require("../assets/Figure1.png"),
      quantity: 1,
    },
    {
      id: "4",
      name: "Dior Happy",
      price: 229.0,
      image: require("../assets/Figure1.png"),
      quantity: 1,
    },
    {
      id: "5",
      name: "Dior Happy",
      price: 229.0,
      image: require("../assets/Figure1.png"),
      quantity: 1,
    },
    {
      id: "6",
      name: "Dior Happy",
      price: 229.0,
      image: require("../assets/Figure1.png"),
      quantity: 1,
    },
  ]);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image
        source={item.image}
        style={styles.itemImage}
        resizeMode="contain"
      />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>${item.price}</Text>
      </View>
      <View style={styles.quantityContainer}>
        <TouchableOpacity
          style={styles.quantityButton}
          onPress={() =>
            item.quantity > 1 &&
            setCartItems((prevItems) =>
              prevItems.map((cartItem) =>
                cartItem.id === item.id
                  ? { ...cartItem, quantity: cartItem.quantity - 1 }
                  : cartItem
              )
            )
          }
        >
          <Text style={styles.quantityButtonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantity}>{item.quantity}</Text>
        <TouchableOpacity
          style={styles.quantityButton}
          onPress={() =>
            setCartItems((prevItems) =>
              prevItems.map((cartItem) =>
                cartItem.id === item.id
                  ? { ...cartItem, quantity: cartItem.quantity + 1 }
                  : cartItem
              )
            )
          }
        >
          <Text style={styles.quantityButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const calculateTotalPrice = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total.toFixed(2); // Ensure total is formatted to two decimal places
  };

  const handleButtonPress = () => {
    // Implement your button press logic here
  };
  
  const handleCheckoutPress = () => {
    // Implement your button press logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Cart 🛒</Text>
      <Text
        style={{
          color: "#212121",
          fontWeight: "bold",
          marginBottom: "1%",
          marginLeft: "2%",
        }}
      >
        {cartItems.length} Items
      </Text>
      {/* Grid */}
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={1}
        contentContainerStyle={styles.listContainer}
        style={{ height: height * 0.5 }} // Adjust FlatList height here
      />
      <View style={styles.bottomContainer}>
        {/* Total Amount */}
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total Amount:</Text>
          <Text style={styles.totalAmount}>${calculateTotalPrice()}</Text>
        </View>
        {/* Promo Code*/}
        <View style={styles.promoContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter Promo Code"
            placeholderTextColor="#d9d9d9"
            selectionColor={"#212121"}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress()}
          >
            <Text style={styles.buttonText}>Apply</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.freeShippingContainer}>
          <Feather name="truck" size={20} color="#333" />
          <Text style={styles.freeShippingText}>
            Free Shipping applied over $299.00
          </Text>
        </View>
        <View style={styles.checkoutButtonContainer}>
          <TouchableOpacity
            style={styles.checkoutButton}
            onPress={() => handleCheckoutPress()}
          >
            <Text style={styles.checkoutButtonText}>Checkout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // borderWidth: 1,
    backgroundColor: "#FFFCF5",
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
    // marginBottom: 10, // Add margin bottom to separate from bottomContainer
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
    // borderWidth: 1,
    // borderColor: "red",
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
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityButton: {
    // borderWidth: 1,
    // borderColor: "#333",
    // borderRadius: 5,
    // paddingHorizontal: 10,
    // paddingVertical: 5,
    marginHorizontal: 10,
  },
  quantityButtonText: {
    fontSize: 25,
    color: "#333",
  },
  quantity: {
    fontSize: 18,
    fontWeight: "bold",
    borderWidth: 1,
    borderColor: '#d9d9d9',
    paddingHorizontal: 25,
    paddingVertical: 2,
    borderRadius: 10,
  },
  bottomContainer: {
    height: "30%",
    // borderWidth: 1,
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    // borderTopWidth: 1,
    // borderBottomWidth: 1,
    borderColor: "#d9d9d9",
    width: "95%",
    marginLeft: "2%",
  },
  totalText: {
    fontFamily: "Plus Jakarta Sans",
    fontSize: 15,
    color: "#333",
    fontWeight: "bold",
  },
  totalAmount: {
    fontFamily: "Plus Jakarta Sans",
    fontSize: 15,
    fontWeight: "bold",
  },
  promoContainer: {
    // marginTop: '2%', // Adjust as needed
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    paddingHorizontal: 10,
    fontSize: 16,
    color: "#d9d9d9",
    borderColor: "#d9d9d9",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    width: "55%",
    height: 50, // Adjust height as needed
    marginLeft: "2%",
  },
  button: {
    backgroundColor: "#000",
    borderWidth: 1,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
    height: 50, // Adjust height to match input field
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
  freeShippingContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: '2%', // Adjust as needed
  },
  freeShippingText: {
    marginLeft: 5,
    fontFamily: "Plus Jakarta Sans",
    fontSize: 14,
    color: "#333",
  },
  checkoutButtonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: '4%', // Add margin bottom to separate from bottomContainer
  },
  checkoutButton: {
    // padding: 10,
    width: "95%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    height: "50%",
    backgroundColor: "#212121",
  },
  checkoutButtonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});
