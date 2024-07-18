import { StyleSheet } from "react-native";
import React from "react";
import Animated, { FadeInLeft } from "react-native-reanimated";

type Props = {
  name: string;
  color: string;
};

const Name = ({ name, color }: Props) => {
  return (
    <Animated.Text
      entering={FadeInLeft.duration(500).delay(1100)}
      style={{
        fontSize: 30,
        color: color,
        fontWeight: "bold",
        padding: 10,
        marginVertical: 15,
        zIndex: 5,
      }}
    >
      {name}
    </Animated.Text>
  );
};

export default Name;

const styles = StyleSheet.create({});
