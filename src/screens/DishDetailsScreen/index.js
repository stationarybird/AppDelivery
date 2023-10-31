import React, { useState, useContext } from 'react';

import { View, Text, StyleSheet, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useRoute, useNavigation } from "@react-navigation/native";
import { BasketContext } from "../../contexts/BasketContext";

import restaurants from "../../../assets/data/restaurants.json";

const DishDetailsScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { basket, setBasket } = useContext(BasketContext);

  const id = route.params?.id;
  const dish = restaurants
    .flatMap((restaurant) => restaurant.dishes)
    .find((dish) => dish.id === id);

  const [quantity, setQuantity] = useState(1);

  const onMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const onPlus = () => {
    setQuantity(quantity + 1);
  };

  const getTotal = () => {
    return (dish.price * quantity).toFixed(2);
  };

  const addToBasket = () => {
    // Check if the dish is already in the basket
    const index = basket.findIndex((item) => item.id === dish.id);
  
    if (index >= 0) {
      // If the dish is already in the basket, update the quantity
      const newBasket = [...basket];
      newBasket[index].quantity += quantity;
      setBasket(newBasket);
    } else {
      // If the dish is not in the basket, add a new entry
      setBasket([...basket, { ...dish, quantity }]);
    }
  
    navigation.navigate('Basket');
  };
  

  return (
    <View style={styles.page}>
      <Text style={styles.name}>{dish.name}</Text>
      <Text style={styles.description}>{dish.description}</Text>
      <View style={styles.separator} />

      <View style={styles.row}>
        <AntDesign
          name="minuscircleo"
          size={60}
          color={"black"}
          onPress={onMinus}
        />
        <Text style={styles.quantity}>{quantity}</Text>
        <AntDesign
          name="pluscircleo"
          size={60}
          color={"black"}
          onPress={onPlus}
        />
      </View>

      <Pressable onPress={addToBasket} style={styles.button}>
        <Text style={styles.buttonText}>
          Add {quantity} to basket &#8226; ${getTotal()}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: "100%",
    paddingVertical: 40, // temp fix
    padding: 10,
  },
  name: {
    fontSize: 30,
    fontWeight: "600",
    marginVertical: 10,
  },
  description: {
    color: "gray",
  },
  separator: {
    height: 1,
    backgroundColor: "lightgrey",
    marginVertical: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  quantity: {
    fontSize: 25,
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: "black",
    marginTop: "auto",
    padding: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 18,
  },
});

export default DishDetailsScreen;
