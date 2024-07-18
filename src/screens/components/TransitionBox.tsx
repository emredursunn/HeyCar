import {
  ViewStyle,
} from "react-native";
import React from "react";
import Animated, { SharedTransition } from "react-native-reanimated";
import { Car } from "../../util/data";

type Props = {
  item: Car;
  sharedTransitionStyle?: SharedTransition;
  customStyle: ViewStyle;
};

const TransitionBox = ({ item, sharedTransitionStyle, customStyle }: Props) => {

  return (
    <Animated.View
      sharedTransitionTag={`box-${item.id}`}
      sharedTransitionStyle={sharedTransitionStyle}
      style={{
        position: "absolute",
        top: 0,
        borderRadius: 20,
        ...customStyle,
        backgroundColor: item.backgroundColor,
        zIndex: 0,
      }}
    />
  );
};

export default TransitionBox;
