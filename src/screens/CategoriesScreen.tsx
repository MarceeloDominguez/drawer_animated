import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function CategoriesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    overflow: "hidden",
    paddingLeft: 22,
    marginTop: 50,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
