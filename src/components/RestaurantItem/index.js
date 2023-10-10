import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { useFonts } from "expo-font";
const [loaded] = useFonts({
  Satoshi: require("./assets/fonts/Satoshi-Black.otf"),
});

if (!loaded) {
  return null;
}
const RestaurantItem = ({ restaurant }) => {
  return (
    <View style={styles.restaurantContainer}>
      <Image
        source={{
          uri: restaurant.image,
        }}
        style={styles.image}
      />
      <Text style={styles.title}>{restaurant.name}</Text>
      <Text style={styles.subtitle}>
        {restaurant.minDeliveryTime}-{restaurant.maxDeliveryTime} minutes
      </Text>
    </View>
  );
};
export default RestaurantItem;

const styles = StyleSheet.create({
  restaurantContainer: {
    wide: "100%", //change to width if following tutorial
    marginVertical: 10,
  },
  image: {
    width: 300,
    aspectRatio: 5 / 3,
    marginBottom: 5,
  },
  title: {
    fontSize: 18,
    fontFamily: "Satoshi-Black",
    fontWeight: "500",
    marginVertical: 5,
  },
  subtitle: {
    color: "grey",
    fontSize: 14,
    fontWeight: "light",
  },
});
