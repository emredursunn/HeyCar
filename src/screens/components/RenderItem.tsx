import {
  DimensionValue,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { Car } from "../../util/data";
import Animated, { FadeInDown, FadeInRight } from "react-native-reanimated";

import useTabBarStore from "../../context/tabBarStore";
import { transitionLong, transitionShort } from "../../util/util";
import TransitionBox from "./TransitionBox";
import Rating from "./Rating";
import Price from "./Price";
import TransitionCar from "./TransitionCar";

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

  return (
    <Animated.View
      entering={FadeInDown.delay(200 * index)}
      style={[
        styles.container,
        { width: container_width, height: container_height },
      ]}
    >
      {/* THIS WIEW IS JUST BEING VISIBLE IN TRANSITION SECTION */}
      <TransitionBox
        item={item}
        sharedTransitionStyle={transitionShort}
        customStyle={{ width: container_width, height: container_height }}
      />
      {/********************************************************/}

      <Pressable
        style={[styles.pressable, { zIndex: 2 }]}
        onPress={handleOnPress}
      >
        <View style={styles.ratingContainer}>
          <Rating rating={item.rating} color={MATERIAL_COLOR} backgroundColor={item.backgroundColor} />
        </View>

        <Animated.View
          entering={FadeInRight.duration(800).delay(400 * index)}
          style={{ flex: 5, width: "150%" }}
        >
          <TransitionCar
            item={item}
            sharedTransitionStyle={transitionLong}
            customStyle={{ width: "100%", height: "100%" }}
          />
        </Animated.View>

        <Text style={[styles.title, { color: MATERIAL_COLOR }]}>
          {item.name}
        </Text>

        <View style={styles.priceContainer}>
          <Price price={item.price} color={MATERIAL_COLOR} />
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
    width: "100%",
    height: "100%",
    zIndex: 5,
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
  ratingContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    alignSelf: "flex-start",
  },
});
