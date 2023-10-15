import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

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
    fontFamily: "sans-serif",
    fontWeight: "500",
    marginVertical: 5,
  },
  subtitle: {
    color: "grey",
    fontSize: 14,
    fontWeight: "light",
  },
});
