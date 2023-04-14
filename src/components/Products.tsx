import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { produts } from "../data/products";

const { width } = Dimensions.get("window");

const WIDTH_IMAGE = width * 0.5 - 29;

const listCategory = [
  "recomended",
  "phone",
  "laptop",
  "headphones",
  "smart watches",
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("recomended");
  const [loading, setLoading] = useState(true);

  const dataFilterCategory = produts.filter(
    (item) => item.category === selectedCategory
  );

  const productCategory =
    dataFilterCategory.length === 0 ? produts : dataFilterCategory;

  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 300);
  }, [selectedCategory]);

  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.containerCategory}
      >
        {listCategory.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={[
                styles.wrapCategory,
                {
                  backgroundColor:
                    selectedCategory === item ? "#252326" : "#fefefe",
                },
              ]}
              activeOpacity={0.8}
              onPress={() => setSelectedCategory(item)}
            >
              <Text
                style={[
                  styles.nameCategory,
                  { color: selectedCategory === item ? "#fefefe" : "#252326" },
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          );
        })}
        <View style={styles.spaceFinalCategories} />
      </ScrollView>
      {loading ? (
        <View style={styles.containerLoading}>
          <ActivityIndicator size={20} color="#252326" />
        </View>
      ) : (
        <View style={styles.containerGrid}>
          {productCategory.map((item, index) => {
            return (
              <View key={index}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <View style={styles.wrapNameEndPrice}>
                  <Text style={styles.nameProduct} numberOfLines={2}>
                    {item.name}
                  </Text>
                  <Text style={styles.priceProduct} numberOfLines={2}>
                    $ {item.price}
                  </Text>
                </View>
              </View>
            );
          })}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  containerGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 14,
    marginTop: 10,
    marginBottom: 30,
  },
  image: {
    width: WIDTH_IMAGE,
    height: 200,
    borderRadius: 14,
  },
  wrapNameEndPrice: {
    flexDirection: "row",
    marginTop: 8,
    marginBottom: 10,
  },
  nameProduct: {
    color: "#252326",
    fontWeight: "bold",
    flex: 1,
    marginRight: 4,
    fontSize: 14,
  },
  priceProduct: {
    color: "#252326",
    fontWeight: "bold",
    fontSize: 14,
    opacity: 0.6,
  },
  containerCategory: {
    marginVertical: 20,
    paddingHorizontal: 22,
  },
  wrapCategory: {
    marginRight: 10,
    paddingHorizontal: 10,
    height: 30,
    justifyContent: "center",
    borderRadius: 30 / 2,
  },
  nameCategory: {
    color: "#fefefe",
    fontWeight: "bold",
    letterSpacing: 0.4,
    textTransform: "capitalize",
    fontSize: 12,
  },
  spaceFinalCategories: {
    width: 34,
  },
  containerLoading: {
    height: 200,
    justifyContent: "center",
  },
});
