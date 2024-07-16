import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import React from "react";
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

interface DotProps {
  buttonVal: SharedValue<number>;
  index: number;
}

const Dot = ({ buttonVal, index }: DotProps) => {
  const { height: SCREEN_HEIGHT } = useWindowDimensions();

  const animatedStyle = useAnimatedStyle(() => {
    const width = interpolate(
      buttonVal.value,
      [
        (index - 1) * SCREEN_HEIGHT,
        index * SCREEN_HEIGHT,
        (index + 1) * SCREEN_HEIGHT,
      ],
      [10, 30, 10],
      Extrapolation.CLAMP
    );

    return {
      width,
    };
  });
  return <Animated.View style={[styles.dot, animatedStyle]} />;
};

export default Dot;

const styles = StyleSheet.create({
  dot: {
    backgroundColor: "#fff",
    width: 10,
    height: 10,
    borderRadius: 5,
    margin:5
  },
});
