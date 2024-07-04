import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome"; // Import FontAwesome from react-native-vector-icons

import HomeScreen from "./screens/HomeScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          activeTintColor: '#212121', // Set active tab color
          style: { backgroundColor: '#FFFCF5' }, // Set background color of tab navigator
        }}
      >
        <Tab.Screen
          name="HOME"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ size, focused }) => (
              <FontAwesome name={"home"} size={size} color={focused ? '#212121' : 'grey'} />
            ),
          }}
        />
        <Tab.Screen
          name="CART"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ size, focused }) => (
              <FontAwesome name={"shopping-cart"} size={size} color={focused ? '#212121' : 'grey'} />
            ),
          }}
        />
        <Tab.Screen
          name="WISHLIST"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ size, focused }) => (
              <FontAwesome name={"heart"} size={size} color={focused ? '#212121' : 'grey'} />
            ),
          }}
        />
        <Tab.Screen
          name="ACCOUNT"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ size, focused }) => (
              <FontAwesome name={"user"} size={size} color={focused ? '#212121' : 'grey'} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
});
