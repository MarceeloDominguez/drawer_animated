import { useCallback } from "react";
import {
  StyleSheet,
  Dimensions,
  SafeAreaView,
  StatusBar,
  View,
  Text,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/navigation/Navigation";
import Icon from "@expo/vector-icons/Ionicons";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import DrawerScreen from "./src/screens/DrawerScreen";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default function App() {
  const translateX = useSharedValue(0);

  const screenStyle = useAnimatedStyle(() => {
    const borderRadius = interpolate(
      translateX.value,
      [0, SCREEN_WIDTH / 1.6],
      [0, 30],
      Extrapolate.CLAMP
    );

    const marginVertical = interpolate(
      translateX.value,
      [0, SCREEN_WIDTH / 1.6],
      [0, 30],
      Extrapolate.CLAMP
    );

    return {
      borderRadius,
      marginVertical,
      transform: [{ perspective: 100 }, { translateX: translateX.value }],
    };
  }, []);

  const onPress = useCallback(() => {
    if (translateX.value > 0) {
      translateX.value = withTiming(0);
    } else {
      translateX.value = withTiming(SCREEN_WIDTH / 1.6);
    }
  }, []);

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.containerDrawer}>
        <StatusBar />
        <DrawerScreen onPress={onPress} />
        <Animated.View style={[styles.containerScreen, screenStyle]}>
          <View style={styles.header}>
            <Icon name="menu-outline" size={26} onPress={onPress} />
            <Text style={styles.titleHeader}>Shopping</Text>
            <Icon name="cart-outline" size={26} />
          </View>
          <Navigation />
        </Animated.View>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  containerDrawer: {
    flex: 1,
  },
  containerScreen: {
    flex: 1,
    backgroundColor: "#fefefe",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginTop: 15,
    alignItems: "center",
    marginBottom: 10,
  },
  titleHeader: {
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 0.4,
    color: "#252326",
  },
});
