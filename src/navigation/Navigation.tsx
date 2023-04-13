import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import CartScreen from "../screens/CartScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import WishlistScreen from "../screens/WishlistScreen";
import TrackOrder from "../screens/TrackOrder";
import SupportScreen from "../screens/SupportScreen";
import FAQScreen from "../screens/FAQScreen";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, animation: "none" }}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ contentStyle: { backgroundColor: "transparent" } }}
      />
      <Stack.Screen
        name="CategoriesScreen"
        component={CategoriesScreen}
        options={{ contentStyle: { backgroundColor: "transparent" } }}
      />
      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{ contentStyle: { backgroundColor: "transparent" } }}
      />
      <Stack.Screen
        name="WishlistScreen"
        component={WishlistScreen}
        options={{ contentStyle: { backgroundColor: "transparent" } }}
      />
      <Stack.Screen
        name="TrackOrder"
        component={TrackOrder}
        options={{ contentStyle: { backgroundColor: "transparent" } }}
      />
      <Stack.Screen
        name="SupportScreen"
        component={SupportScreen}
        options={{ contentStyle: { backgroundColor: "transparent" } }}
      />
      <Stack.Screen
        name="FAQScreen"
        component={FAQScreen}
        options={{ contentStyle: { backgroundColor: "transparent" } }}
      />
    </Stack.Navigator>
  );
}
