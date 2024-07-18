import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

type Props = {
  rating: number;
  color: string;
  backgroundColor: string;
};

const Rating = ({ rating, color, backgroundColor }: Props) => {
  return (
    <View style={{ flexDirection: "row", gap: 5 }}>
      <AntDesign
        name="star"
        size={18}
        color={backgroundColor === "orange" ? "#fff" : "orange"}
      />
      <Text style={{ fontSize: 14, color: color }}>{rating}</Text>
    </View>
  );
};

export default Rating;
