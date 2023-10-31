import { View, Text, Image, FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";
import BasketDishItem from "../../components/BasketDishItem";

import orders from "../../../assets/data/orders.json";
import restaurants from "../../../assets/data/restaurants.json";

import styles from "./styles";

const OrderDetails = () => {
  const route = useRoute();

  const id = route.params?.id;

  // Find the order with the matching id
  const order = orders.find((order) => order.id === id);

  // Find the restaurant that the order belongs to
  const restaurant = restaurants.find(restaurant => restaurant.id === order.orderRestaurantId);

  const OrderDetailsHeader = () => {
    return (
      <View>
        <View style={styles.page}>
          <Image source={{ uri: restaurant.image }} style={styles.image} />

          <View style={styles.container}>
            <Text style={styles.title}>{restaurant.name}</Text>
            <Text style={styles.subtitle}>{order.status} • {order.createdAt}</Text>

            <Text style={styles.menuTitle}>Your orders</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      ListHeaderComponent={OrderDetailsHeader}
      data={restaurant.dishes}
      renderItem={({ item }) => <BasketDishItem basketDish={item} />}
    />
  );
};

export default OrderDetails;
