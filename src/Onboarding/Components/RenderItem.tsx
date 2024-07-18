import {
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { Onboarding } from "../util/OnboardingData";
import LottieView from "lottie-react-native";
import Animated, {
  FadeInLeft,
  SlideInLeft,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
  withTiming,
} from "react-native-reanimated";

interface RenderItemProps {
  item: Onboarding;
}

const RenderItem = ({ item }: RenderItemProps) => {
  const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = useWindowDimensions();
  const OPACITY = useSharedValue(0.5);
  const SCALE = useSharedValue(0.9);

  useEffect(() => {
    OPACITY.value = withRepeat(withTiming(1, { duration: 1000 }), 20, true);
    SCALE.value = withRepeat(withTiming(1, { duration: 1000 }), 20, true);
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: OPACITY.value,
      transform: [
        {
          scale: SCALE.value,
        },
      ],
    };
  });

  return (
    <View style={styles.itemContainer}>
      {item.type === "image" ? (
        <Animated.View style={[{ flex: 3 }, animatedStyle]}>
          <Animated.Image
            entering={SlideInLeft.duration(300).delay(200)}
            source={item.image}
            resizeMode={"contain"}
            style={[{ width: SCREEN_WIDTH }]}
          />
        </Animated.View>
      ) : (
        <LottieView
          style={{ flex: 3, width: SCREEN_WIDTH, height: SCREEN_HEIGHT * 0.5 }}
          source={item.image}
          loop={false}
          autoPlay
        />
      )}
      <View style={styles.titleBox}>
        <Text numberOfLines={2} style={styles.title}>
          {item.title}
        </Text>
      </View>
    </View>
  );
};

export default RenderItem;

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    alignItems: "center",
  },
  titleBox: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 36,
    paddingHorizontal: 20,
    color: "#fff",
  },
});
