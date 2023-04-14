import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation, CommonActions } from "@react-navigation/native";
import Icon from "@expo/vector-icons/Ionicons";

const list = [
  { name: "Shop", route: "HomeScreen" },
  { name: "Categories", route: "CategoriesScreen" },
  { name: "My Cart", route: "CartScreen" },
  { name: "Wishlist", route: "WishlistScreen" },
  { name: "Track Order", route: "TrackOrder" },
  { name: "Support", route: "SupportScreen" },
  { name: "FAQ", route: "FAQScreen" },
];

type Prop = {
  onPress: () => void;
};

export default function DrawerScreen({ onPress }: Prop) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.wrapIconClose}>
        <Icon
          name="add-outline"
          size={30}
          color="#fefefe"
          onPress={onPress}
          style={styles.iconClose}
        />
      </View>
      <View style={styles.wrapItems}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <Image
              source={{ uri: "https://randomuser.me/portraits/women/10.jpg" }}
              style={styles.avatar}
            />
            <Text style={styles.nameUser}>Lillie Morgan</Text>
            <View style={styles.line} />
            {list.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  activeOpacity={0.8}
                  onPress={() =>
                    navigation.dispatch(CommonActions.navigate(item.route))
                  }
                >
                  <Text style={styles.nameItem}>{item.name}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
        <View style={{ paddingBottom: 14 }}>
          <View style={styles.line} />
          <Text style={styles.nameItem}>Logout</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: "#252326",
    height: "100%",
    width: "100%",
    paddingVertical: 30,
  },
  wrapItems: {
    justifyContent: "space-between",
    flex: 1,
    paddingLeft: 30,
  },
  nameUser: {
    color: "#fefefe",
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 0.4,
    marginBottom: 40,
  },
  nameItem: {
    color: "#fefefe",
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 0.4,
    marginBottom: 20,
  },
  line: {
    height: 1,
    backgroundColor: "#fefefe",
    width: "45%",
    marginBottom: 40,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 10,
  },
  wrapIconClose: {
    width: 30,
    height: 30,
    marginLeft: 28,
    marginBottom: 20,
    marginTop: 15,
  },
  iconClose: {
    transform: [{ rotate: "45deg" }],
  },
});
