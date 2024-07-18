import React from "react";
import { View, Text, StyleSheet, ViewStyle, useWindowDimensions } from "react-native";
import Animated, { SlideInDown } from "react-native-reanimated";

type Props = {
  style?: ViewStyle; // Define any additional styles you want to pass
  delay?: number;
  duration?: number;
  children: React.ReactNode; // Allow children to be passed
};

const BottomSheet = ({ style, children, delay, duration }: Props) => {
  const { width: SCREEN_WIDTH } = useWindowDimensions();

  return (
    <Animated.View
      entering={SlideInDown.duration(duration ?? 0).delay(delay ?? 0)}
      style={[styles.container, style, {width:SCREEN_WIDTH}]}
    >
      {children}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    justifyContent:'flex-start',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default BottomSheet;
