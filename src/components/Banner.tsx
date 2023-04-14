import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Banner() {
  return (
    <View>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 2.5, y: 1 }}
        colors={["#252326", "#fefefe"]}
        style={styles.containerBanner}
      >
        <Text style={styles.promo}>Promo</Text>
        <Text style={styles.subText}>Up to</Text>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Text style={styles.percentage}>30%</Text>
          <Text style={styles.subText}>off</Text>
        </View>
      </LinearGradient>
      <View>
        <Image
          source={require("../../assets/images/music1.png")}
          style={styles.imageBanner}
          resizeMode="contain"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerBanner: {
    marginHorizontal: 22,
    position: "absolute",
    top: 30,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 15,
    paddingTop: 20,
    paddingLeft: 15,
  },
  promo: {
    backgroundColor: "#fefefe",
    height: 24,
    width: 70,
    borderRadius: 12,
    color: "#252326",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 14,
    fontWeight: "bold",
    letterSpacing: 0.4,
    marginBottom: 30,
  },
  subText: {
    color: "#fefefe",
    fontSize: 13,
    letterSpacing: 0.4,
  },
  wrapPercentage: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  percentage: {
    fontSize: 34,
    color: "#fefefe",
    fontWeight: "bold",
  },
  imageBanner: {
    width: 200,
    height: 200,
    alignSelf: "flex-end",
  },
});
