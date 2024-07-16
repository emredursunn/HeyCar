import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import Animated, {
  Extrapolation,
  interpolate,
  interpolateColor,
  SharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

interface CustomButtonProps {
  handleOnPress: () => void;
  buttonVal: SharedValue<number>;
}

const CustomButton = ({ handleOnPress, buttonVal }: CustomButtonProps) => {
  const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = useWindowDimensions();

  const animatedStyle = useAnimatedStyle(() => {
    const backgroundColor = withTiming(
      interpolateColor(
        buttonVal.value,
        [0, SCREEN_HEIGHT, SCREEN_HEIGHT * 2],
        ["#fff", "#fff", "orange"]
      ),
      { duration: 1000 }
    );

    const width = withTiming(
      interpolate(
        buttonVal.value,
        [0, SCREEN_HEIGHT, SCREEN_HEIGHT * 2],
        [SCREEN_WIDTH * 0.2, SCREEN_WIDTH * 0.5, SCREEN_WIDTH * 0.8]
      ),
      { duration: 1000 }
    );

    return {
      backgroundColor,
      width,
    };
  });

  return (
    <TouchableWithoutFeedback onPress={handleOnPress}>
      <Animated.View style={[styles.button, animatedStyle]}>
        <Image
          source={require("../../../assets/arrow.png")}
          style={styles.arrow}
        />
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    padding: 20,
    alignSelf: "center",
    alignItems: "center",
    borderRadius: 40,
    marginVertical: 40,
  },
  arrow: {
    width: 30,
    height: 30,
  },
  start: {
    fontSize: 20,
    color: "#fff",
  },
});
