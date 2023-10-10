import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import RestaurantItem from "./src/components/RestaurantItem";
import restaurants from "./assets/data/restaurants.json";
import { useFonts } from "expo-font";
export default function App() {
  const [loaded] = useFonts({
    Satoshi: require("./assets/fonts/Satoshi-Black.otf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      {/*Restaraunt Items*/}
      {/* <RestaurantItem restaurant={restaurants[0]} />
      <RestaurantItem restaurant={restaurants[1]} /> */}

      <FlatList
        data={restaurants}
        renderItem={() => <RestaurantItem restaurant={restaurants[0]} />}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    fontFamily: "Satoshi-Black",
  },
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
    fontFamily: "serif",
    fontWeight: "500",
    marginVertical: 5,
  },
  subtitle: {
    color: "grey",
    fontSize: 14,
    fontWeight: "light",
  },
});
