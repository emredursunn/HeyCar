import { ImageStyle, StyleSheet } from "react-native";
import React from "react";
import Animated, { SharedTransition } from "react-native-reanimated";
import { Car } from "../../util/data";

type Props = {
  item: Car;
  sharedTransitionStyle: SharedTransition;
  customStyle: ImageStyle;
};

const TransitionCar = ({ item, sharedTransitionStyle, customStyle }: Props) => {
  return (
    <Animated.Image
      sharedTransitionTag={`car-${item.id}`}
      sharedTransitionStyle={sharedTransitionStyle}
      source={item.image}
      style={[styles.image, customStyle]}
      resizeMode={"cover"}
    />
  );
};

export default TransitionCar;

const styles = StyleSheet.create({
  image: {
    zIndex: 5,
  },
});
