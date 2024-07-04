import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
} from "react-native";
import Feather from "react-native-vector-icons/Feather"; // Import FontAwesome from react-native-vector-icons

const { width, height } = Dimensions.get("window");

export default function HomeScreen() {
  const [activeButton, setActiveButton] = useState("Best Sellers");

  const handleButtonPress = (buttonTitle) => {
    setActiveButton(buttonTitle);
    // You can add logic here to perform actions when a button is pressed
  };

  const perfumes = [
    {
      id: "1",
      name: "Chopard Happy",
      price: "$249.00",
      image: require("../assets/Figure1.jpg"),
    },
    {
      id: "2",
      name: "BVLGARI Rose Goldea",
      price: "$229.00",
      image: require("../assets/Figure1.jpg"),
    },
    {
      id: "3",
      name: "Dior Happy",
      price: "$229.00",
      image: require("../assets/Figure1.jpg"),
    },
    {
      id: "4",
      name: "Lancome Idol",
      price: "$109.00",
      image: require("../assets/Figure1.jpg"),
    },
    {
      id: "5",
      name: "YSL Mon Paris",
      price: "$149.00",
      image: require("../assets/Figure1.jpg"),
    },
    {
      id: "6",
      name: "YSL Libre",
      price: "$139.00",
      image: require("../assets/Figure1.jpg"),
    },
    {
      id: "7",
      name: "YSL Libre",
      price: "$139.00",
      image: require("../assets/Figure1.jpg"),
    },
    {
      id: "8",
      name: "YSL Libre",
      price: "$139.00",
      image: require("../assets/Figure1.jpg"),
    },
    {
      id: "9",
      name: "YSL Libre",
      price: "$139.00",
      image: require("../assets/Figure1.jpg"),
    },
  ];

  const renderItem = (
    { item, index } // parameters are provided by "FlatList" reactnative component
  ) => (
    <View
      style={[
        styles.itemContainer, // Base style for item container
        index % 2 === 0 && styles.itemContainerRightBorder, // Conditional style for odd indices, if index is even, then it applies itemContainerRightBorder
      ]}
    >
      <Image
        source={item.image}
        style={styles.itemImage}
        resizeMode="contain"
      />
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>{item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Feather
          name="search"
          size={20}
          color="#d9d9d9"
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.input}
          placeholder="Search..."
          placeholderTextColor="#d9d9d9"
          selectionColor={"#212121"}
        />
      </View>

      {/* Suggestions */}
      <View style={styles.suggestions}>
        <TouchableOpacity
          style={[
            styles.button,
            activeButton === "Best Sellers" && styles.activeButton,
          ]}
          onPress={() => handleButtonPress("Best Sellers")}
        >
          <Text style={styles.buttonText}>Best Sellers</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            activeButton === "Just Arrived" && styles.activeButton,
          ]}
          onPress={() => handleButtonPress("Just Arrived")}
        >
          <Text style={styles.buttonText}>Just Arrived</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            activeButton === "Trending" && styles.activeButton,
          ]}
          onPress={() => handleButtonPress("Trending")}
        >
          <Text style={styles.buttonText}>Trending</Text>
        </TouchableOpacity>
      </View>

      {/* Grid */}
      <FlatList
        data={perfumes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.gridContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFCF5",
    alignItems: "center",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    paddingHorizontal: 10,
    marginTop: "15%",
    backgroundColor: "#f2f2f2",
    borderRadius: 8,
    borderColor: "#d9d9d9",
    borderWidth: 1,
  },
  searchIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    fontSize: 16,
    color: "#333",
  },
  suggestions: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: "1%",
    borderBottomWidth: 1,
    borderBottomColor: "#d9d9d9",
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  buttonText: {
    fontSize: 16,
    color: "#212121",
  },
  activeButton: {
    borderBottomWidth: 2,
    borderBottomColor: "#212121",
  },
  gridContainer: {
    // borderTopColor:'#212121',
    // borderTopWidth:1,
    width: width,
    paddingHorizontal: 16,
    // marginTop: 16,
    paddingBottom: "10%", // Adjusted padding to create space between suggestions and bottom of screen
  },
  itemContainer: {
    height: height / 4,
    borderBottomWidth: 1,
    borderBottomColor: "#d9d9d9",
    flex: 1,
    alignItems: "center",
  },
  itemContainerRightBorder: {
    borderRightColor: "#d9d9d9",
    borderRightWidth: 1,
  },
  itemImage: {
    width: 130,
    height: 130,
    margin: 10,
  },
  itemName: {
    fontSize: 16,
    color: "#212121",
    textAlign: "center",
  },
  itemPrice: {
    fontSize: 14,
    color: "#757575",
    textAlign: "center",
  },
});
