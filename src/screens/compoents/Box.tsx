import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Image,
} from "react-native";
import React, { ReactNode } from "react";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";

interface BoxProps {
  icon: any;
  title: string;
  value: any;
  valueType: string;
  background: string;
  index: number;
}

const Box = ({
  icon,
  title,
  value,
  valueType,
  background,
  index,
}: BoxProps) => {
  const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = useWindowDimensions();
  return (
    <Animated.View
      entering={FadeInDown.duration(200).delay(1000 + 200 * index)}
      style={[
        styles.box,
        {
          width: SCREEN_WIDTH * 0.28,
          height: SCREEN_HEIGHT * 0.2,
          backgroundColor: background,
        },
      ]}
    >
      <View
        style={{
          padding: 8,
          backgroundColor: "#fff",
          borderRadius: 12,
          alignItems: "center",
          alignSelf: "flex-start",
        }}
      >
        {icon}
      </View>

      <View
        style={{ flex: 1, alignItems: "flex-start", justifyContent: "center" }}
      >
        <Text style={{ fontSize: 12, fontWeight: "600", marginBottom: 10, color:'#fff' }}>
          {title}
        </Text>

        <View style={{ flexDirection: "row", position: "absolute", bottom: 1 }}>
          <Text style={{ fontSize: 24, fontWeight: "bold",  }}>{value}</Text>
          <Text
            style={{
              fontSize: 16,
              fontStyle: "italic",
              paddingTop: 8,
              paddingLeft: 5,
            }}
          >
            {valueType}
          </Text>
        </View>
      </View>
    </Animated.View>
  );
};
const styles = StyleSheet.create({
  box: {
    borderRadius: 10,
    marginHorizontal: 10,
    padding: 10,
    overflow: "hidden",
  },
});

export default Box;
