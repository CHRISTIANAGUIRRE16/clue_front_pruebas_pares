import React, { useRef, useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { Text, Image, View, StyleSheet, Animated } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { setOnboardFlag } from "../services";

const meta = {
  0: {
    title: "CLUE",
    image: require("../../assets/images/relax-home.png"),
    subtitle: "Relajate y compre en línea y reciba los alimentos desde la tienda hasta su hogar",
  },
  1: {
    title: "Sin espera",
    image: require("../../assets/images/no-wait.png"),
    subtitle: "Pedidos entregados a tu domicilio",
  },
  2: {
    title: "Los mejores productos",
    image: require("../../assets/images/fresh.png"),
    subtitle: "Trabajamos con las mejores marcas",
  },
};

export default function OnBoarding({ navigation }) {
  const [index, setIndex] = useState(0);
  const [metaIndex, setMetaIndex] = useState(0);
  const animatedValue = useRef(new Animated.Value(0)).current;

  const viewBgRange = ["#655DB0", "#655DB0", "#655DB0", "#F2F2F2", "#F2F2F2"];
  const buttonBgRange = ["#F2F2F2", "#F2F2F2", "#F2F2F2", "#655DB0", "#655DB0"];

  const animateSlider = () =>
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 850,
      useNativeDriver: false,
    });

  const onPress = () => {
    if (index >= 2) {
      (async () => {
        await setOnboardFlag();
        navigation.push("Signup");
      })();
      return;
    }
    setIndex((value) => value + 1);
    setTimeout(() => {
      setMetaIndex((value) => value + 1);
    }, 450);
    animateSlider().reset();
    animateSlider().start();
  };

  const isBgColorEven = index === 0 || index % 2 !== 0;
  const isButtonColorEven = index === 0 || index % 2 === 0;

  const inputRange = [0, 0.001, 0.5, 0.501, 1];

  const containerBg = animatedValue.interpolate({
    inputRange,
    outputRange: isBgColorEven ? buttonBgRange : viewBgRange,
  });
  const buttonBg = animatedValue.interpolate({
    inputRange,
    outputRange: isBgColorEven ? viewBgRange : buttonBgRange,
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.buttonContainer, { backgroundColor: containerBg }]}
      >
        <View style={styles.contentBox}>
          <Image
            resizeMode="contain"
            style={{ height: 200, maxWidth: "100%" }}
            source={meta[metaIndex || 0].image}
          />
          <Text
            style={[
              styles.title,
              { color: metaIndex === 1 ? "#FFFFFF" : "#222222" },
            ]}
          >
            {meta[metaIndex || 0].title}
          </Text>
          <Text
            style={[
              styles.subtitle,
              { color: metaIndex === 1 ? "#FFFFFF" : "#222222" },
            ]}
          >
            {meta[metaIndex || 0].subtitle}
          </Text>
        </View>
        <Animated.View
          style={[
            styles.button,
            {
              backgroundColor: buttonBg,
              transform: [
                {
                  perspective: 400,
                },
                {
                  rotateY: animatedValue.interpolate({
                    inputRange: [0, 0.5, 1],
                    outputRange: ["0deg", "-90deg", "-180deg"],
                  }),
                },
                {
                  translateX: animatedValue.interpolate({
                    inputRange: [0, 0.5, 1],
                    outputRange: [0, 100, 0],
                  }),
                },
                {
                  scale: animatedValue.interpolate({
                    inputRange: [0, 0.5, 1],
                    outputRange: [1, 10, 1],
                  }),
                },
              ],
            },
          ]}
        >
          <TouchableOpacity onPress={onPress}>
            <Animated.View
              style={{
                padding: 24,
                overflow: "visible",
                opacity: animatedValue.interpolate({
                  inputRange: [0, 0.1, 0.8, 1],
                  outputRange: [1, 0, 0, 1],
                }),
                transform: [
                  {
                    rotateZ: animatedValue.interpolate({
                      inputRange: [0, 0.5, 0.5001, 1],
                      outputRange: ["0deg", "0deg", "180deg", "180deg"],
                    }),
                  },
                  {
                    translateX: animatedValue.interpolate({
                      inputRange: [0, 0.1, 0.499, 0.5, 0.8, 1],
                      outputRange: [0, 25, 25, -25, -25, 0],
                    }),
                  },
                ],
              }}
            >
              <FontAwesome5
                size={24}
                name="chevron-right"
                color={isButtonColorEven ? "black" : "black"}
              />
            </Animated.View>
          </TouchableOpacity>
        </Animated.View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    paddingTop: 32,
    textAlign: "center",
    fontFamily: "Montserrat-SemiBold",
  },
  subtitle: {
    fontSize: 13,
    paddingTop: 12,
    textAlign: "center",
    paddingHorizontal: 32,
    fontFamily: "Montserrat-Regular",
  },
  contentBox: {
    paddingHorizontal: 24,
    paddingTop: 100,
    maxWidth: "80%",
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    paddingBottom: 100,
    justifyContent: "space-between",
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
});
