import { StyleSheet, Text, TextStyle, View } from "react-native";
import React from "react";

type Props = {
  price: number;
  color: string;
  customStyle?: TextStyle;
};

const Price = ({ price, color, customStyle }: Props) => {
  return (
    <View style={{flexDirection:'row', alignItems:'center',gap:5}}> 
      <Text
        style={[
          styles.price,
          { fontWeight: "bold", color: color },
          customStyle,
        ]}
      >
        $ {price}
      </Text>
      <Text style={[styles.price, { color: color, fontStyle: "italic" }]}>
        /Day
      </Text>
    </View>
  );
};

export default Price;

const styles = StyleSheet.create({
  price: {
    fontSize: 14,
  },
});
