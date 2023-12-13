import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function StoreToggle({ active, onToggle }) {
  const handleToggle = (name) => {
    if (!onToggle) return;

    onToggle(name);
  };

  const bgColorProduct = active === "PRODUCT" ? "#007260" : "transparent";
  const bgColorPromotion = active === "PROMOTION" ? "#007260" : "transparent";

  const borderProduct = active === "PROMOTION" ? "#cccccc" : "#007260";
  const borderPromotion = active === "PRODUCT" ? "#cccccc" : "#007260";

  const textProduct = active === "PROMOTION" ? "#424242" : "#FFFFFF";
  const textPromotion = active === "PRODUCT" ? "#424242" : "#FFFFFF";

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={{
            ...styles.button,
            borderColor: borderProduct,
            backgroundColor: bgColorProduct,
          }}
          onPress={() => handleToggle("PRODUCT")}
        >
          <Text style={{ ...styles.text, color: textProduct }}>Productos</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={{
            ...styles.button,
            borderColor: borderPromotion,
            backgroundColor: bgColorPromotion,
          }}
          onPress={() => handleToggle("PROMOTION")}
        >
          <Text style={{ ...styles.text, color: textPromotion }}>Promociones</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: -8,
    paddingTop: 24,
    flexDirection: "row",
  },
  buttonContainer: {
    padding: 8,
    maxWidth: "50%",
    minWidth: "50%",
    alignItems: "center",
    alignSelf: "stretch",
    justifyContent: "center",
  },
  button: {
    padding: 8,
    borderWidth: 1,
    borderRadius: 8,
    minWidth: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 14,
    fontFamily: "Montserrat-SemiBold",
  },
});
