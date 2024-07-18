import {  Text } from "react-native";
import React from "react";

type Props = {
  backgroundColor: string;
};

const Premium = ({ backgroundColor }: Props) => {
  return (
    <Text
      style={{
        color: backgroundColor === "orange" ? "#fff" : "orange",
        fontSize: 14,
        fontWeight: "bold",
      }}
    >
      Premium
    </Text>
  );
};

export default Premium;

