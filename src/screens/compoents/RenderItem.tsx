import {
  DimensionValue,
  Image,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import { Car } from "../../util/CarsData";
import Animated, {
  FadeInDown,
  FadeInLeft,
  FadeInRight,
  SharedTransition,
  withTiming,
} from "react-native-reanimated";

import { AntDesign } from "@expo/vector-icons";
import useTabBarStore from "../../context/tabBarStore";

interface ItemProps {
  item: Car;
  index: number;
  navigate: any;
  container_width: number | DimensionValue;
  container_height: number | DimensionValue;
}

const RenderItem = ({
  item,
  index,
  navigate,
  container_width,
  container_height,
}: ItemProps) => {
  const { setVisible } = useTabBarStore();
  const MATERIAL_COLOR = item.backgroundColor === "#c8d5b9" ? "#000" : "#fff";

  const handleOnPress = () => {
    navigate("DetailedCar", { item });
    setVisible(false);
  };

  const transitionCar = SharedTransition.custom((values) => {
    "worklet";
    return {
      height: withTiming(values.targetHeight, { duration: 1000 }),
      width: withTiming(values.targetWidth, { duration: 1000 }),
      originX: withTiming(values.targetOriginX, { duration: 1000 }),
      originY: withTiming(values.targetOriginY, { duration: 1000 }),
    };
  });

  const transitionBox = SharedTransition.custom((values) => {
    "worklet";
    return {
      height: withTiming(values.targetHeight, { duration: 500 }),
      width: withTiming(values.targetWidth, { duration: 500 }),
      originX: withTiming(values.targetOriginX, { duration: 500 }),
      originY: withTiming(values.targetOriginY, { duration: 500 }),
    };
  });

  return (
    <Animated.View
      style={[
        styles.container,
        { width: container_width, height: container_height },
      ]}
      entering={FadeInDown.delay(200 * index)}
    >
      <Animated.View
        style={[
          StyleSheet.absoluteFillObject,
          styles.background,
          {
            backgroundColor: item.backgroundColor,
            zIndex: 1,
            borderRadius: 20,
          },
        ]}
        sharedTransitionTag={`box-${item.id}`}
        sharedTransitionStyle={transitionBox}
      />

      <Pressable
        style={[styles.pressable, { zIndex: 2 }]}
        onPress={handleOnPress}
      >
        <View style={styles.rating}>
          <AntDesign
            name="star"
            size={18}
            color={
              item.backgroundColor === "orange" ? MATERIAL_COLOR : "orange"
            }
          />
          <Text style={{ fontSize: 14, color: MATERIAL_COLOR }}>
            {item.rating}
          </Text>
        </View>

        <View style={{ flex: 5, width: "150%" }}>
          <Animated.Image
            entering={FadeInRight.duration(800).delay(400 * index)}
            sharedTransitionTag={`car-${item.id}`}
            sharedTransitionStyle={transitionCar}
            source={item.image}
            style={styles.image}
            resizeMode={"cover"}
          />
        </View>

        <Text style={[styles.title, { color: MATERIAL_COLOR }]}>
          {item.name}
        </Text>
        <View style={styles.priceContainer}>
          <Text
            style={[
              styles.price,
              { fontWeight: "bold", color: MATERIAL_COLOR },
            ]}
          >
            $ {item.price}
          </Text>
          <Text style={[styles.price, { color: MATERIAL_COLOR, fontStyle:'italic' }]}>/Day</Text>
        </View>
      </Pressable>
    </Animated.View>
  );
};

export default RenderItem;

const styles = StyleSheet.create({
  container: {
    width: 160,
    height: 220,
    borderRadius: 20,
    margin: 10,
    overflow: "hidden",
  },
  background: {
    borderRadius: 20,
  },
  pressable: {
    flex: 1,
    padding: 10,
  },
  image: {
    width: "100%", // Set a fixed width
    height: "100%", // Set a fixed height
    zIndex: 5,
  },
  rating: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    alignSelf: "flex-start",
  },
  title: {
    flex: 1,
    fontSize: 16,
    marginVertical: 18,
  },
  priceContainer: {
    flex: 1,
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    padding: 10,
  },
  price: {
    fontSize: 14,
  },
});
