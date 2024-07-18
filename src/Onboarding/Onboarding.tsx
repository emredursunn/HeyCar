import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import React, { useEffect, useState } from "react";
import { onboardingData } from "./util/OnboardingData";
import RenderItem from "./Components/RenderItem";
import AnimatedButton from "./Components/AnimatedButton";
import Animated, { useSharedValue } from "react-native-reanimated";
import Pagination from "./Pagination/Pagination";
import { useNavigation } from "@react-navigation/native";
import { HomeStackParams } from "../navigation/HomeStack";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import useTabBarStore from "../Store/tabBarStore";

const Onboarding = () => {
  const { replace } =
    useNavigation<NativeStackNavigationProp<HomeStackParams, "Onboarding">>();
  const { height: SCREEN_HEIGHT } = useWindowDimensions();
  const [currentIndex, setCurrentIndex] = useState(0);
  const buttonVal = useSharedValue(0);

  const { setVisible } = useTabBarStore();

  useEffect(() => {
    setVisible(false);
  }, []);

  const handleOnPress = () => {
    if (currentIndex === onboardingData.length - 1) {
      replace("Home");
      setVisible(true);
      return;
    }
    setCurrentIndex((prev) => prev + 1);
    buttonVal.value = SCREEN_HEIGHT + buttonVal.value;
  };

  return (
    <Animated.View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Pagination data={onboardingData} buttonVal={buttonVal} />
      </View>
      <View style={{ flex: 5 }}>
        {onboardingData.map(
          (item, index) =>
            currentIndex === index && <RenderItem key={item.id} item={item} />
        )}
      </View>
      <View style={{ flex: 2 }}>
        <AnimatedButton handleOnPress={handleOnPress} buttonVal={buttonVal} />
      </View>
    </Animated.View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
  },
  credits: {
    fontStyle: "italic",
    fontSize: 14,
  },
});
