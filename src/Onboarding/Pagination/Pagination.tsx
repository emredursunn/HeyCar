import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Animated, { SharedValue } from "react-native-reanimated";
import Dot from "./Dot";
import { Onboarding } from "../util/OnboardingData";

interface PaginationProps {
  data: Onboarding[];
  buttonVal: SharedValue<number>;
}

const Pagination = ({ data, buttonVal }: PaginationProps) => {
  return (
    <View style={styles.paginationContainer}>
      {data.map((_, index) => (
        <Dot key={index} buttonVal={buttonVal} index={index} />
      ))}
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  paginationContainer: {
    alignSelf:'center',
    flexDirection: "row",
    marginVertical: 10,
  },
});
