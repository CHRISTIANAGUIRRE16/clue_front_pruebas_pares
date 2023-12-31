import React, { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { useSearch } from "../hooks/";
import { TextField, ItemCard, StoreToggle, EmptyState } from "../components";
import { addToCart, removeFromCart } from "../store/actions/grocery";

export default function Home({ navigation }) {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.groceryState);

  const [active, setActive] = useState("PRODUCT");

  const [searchText, changeSearchText] = useState("");
  const { data: products, loading } = useSearch(
    "getGroceryItems",
    searchText,
    active
  );

  const totalCartCount = Object.keys(cart).reduce((a, b) => a + cart[b], 0);

  const handleCart = ({ type, item }) => {
    if (type === "PLUS") {
      dispatch(addToCart(item));
    } else if (type === "MINUS") {
      dispatch(removeFromCart(item));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.heading}>Víveres Abuela Ruth</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => navigation.push("Cart", { item: { cart } })}
          >
            <FontAwesome5 name="shopping-basket" size={24} color="#655DB0" />
          </TouchableOpacity>
          {totalCartCount ? (
            <View style={styles.badge}>
              <Text style={styles.cartCount}>{totalCartCount}</Text>
            </View>
          ) : null}
        </View>
      </View>
      <TextField
        value={searchText}
        placeholder="Buscar"
        onChange={changeSearchText}
      />
      <StoreToggle active={active} onToggle={(type) => setActive(type)} />
      {loading ? (
        <EmptyState>
          <ActivityIndicator size="large" color="#424242" />
        </EmptyState>
      ) : !products.length ? (
        <EmptyState />
      ) : (
        <ScrollView style={{ flex: 1, marginTop: 24 }}>
          <View style={styles.cardContainer}>
            {products.map((product) => (
              <View key={product.id} style={styles.cardWrapper}>
                <ItemCard
                  data={product}
                  navigation={navigation}
                  onUpdate={(e) => handleCart(e)}
                />
              </View>
            ))}
          </View>
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F2F2F2",
  },
  topBar: {
    paddingTop: 8,
    paddingLeft: 2,
    paddingRight: 2,
    paddingBottom: 24,
    width: "100%", // Use percentage width for responsiveness
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  cardWrapper: {
    width: "48%", // Use percentage width for responsiveness
    marginBottom: 16,
  },
  cartCount: {
    fontSize: 10,
    color: "white",
    fontFamily: "Montserrat-SemiBold",
  },
  badge: {
    top: -10,
    left: -10,
    width: 18,
    height: 18,
    color: "red",
    borderRadius: 20,
    alignItems: "center",
    position: "absolute",
    backgroundColor: "red",
    justifyContent: "center",
  },
  heading: {
    fontSize: 24,
    color: "#424242",
    textAlign: "center",
    fontFamily: "Montserrat-SemiBold",
  },
});
