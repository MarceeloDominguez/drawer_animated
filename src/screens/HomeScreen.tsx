import React from "react";
import { ScrollView } from "react-native";
import Banner from "../components/Banner";
import Products from "../components/Products";

export default function HomeScreen() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Banner />
      <Products />
    </ScrollView>
  );
}
