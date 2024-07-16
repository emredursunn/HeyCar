import {
  Button,
  Image,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import Animated, {
  FadeIn,
  FadeInLeft,
  SharedTransition,
  SlideInDown,
  withTiming,
} from "react-native-reanimated";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { HomeStackParams } from "../navigation/HomeStack";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Box from "./compoents/Box";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Header from "./compoents/Header";
import { AntDesign } from "@expo/vector-icons";
import useTabBarStore from "../context/tabBarStore";
import { FavoriteStackParams } from "../navigation/FavoriteStack";

const BORDER_RADIUS = 30;

const DetailedCar = () => {
  const route =
    useRoute<RouteProp<HomeStackParams | FavoriteStackParams, "DetailedCar">>();
  const { navigate, goBack } =
    useNavigation<NativeStackNavigationProp<HomeStackParams, "DetailedCar">>();
  const item = route.params.item;
  const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = useWindowDimensions();
  const MATERIAL_COLOR = item.backgroundColor === "#c8d5b9" ? "#000" : "#fff";
  const { setVisible } = useTabBarStore();

  const SPEED_ICON = (
    <Ionicons name="speedometer-outline" size={24} color="black" />
  );

  const TIME_ICON = <FontAwesome name="clock-o" size={24} color="black" />;

  const ENGINE_ICON = (
    <MaterialCommunityIcons name="car-cog" size={24} color="black" />
  );

  const transition = SharedTransition.custom((values) => {
    "worklet";
    return {
      height: withTiming(values.targetHeight, { duration: 1000 }),
      width: withTiming(values.targetWidth, { duration: 1000 }),
      originX: withTiming(values.targetOriginX, { duration: 1000 }),
      originY: withTiming(values.targetOriginY, { duration: 1000 }),
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View
        sharedTransitionTag={`box-${item.id}`}
        sharedTransitionStyle={transition}
        style={{
          position: "absolute",
          top: 0,
          borderRadius: 20,
          width: SCREEN_WIDTH,
          height: SCREEN_HEIGHT,
          backgroundColor: item.backgroundColor,
          zIndex: 0,
        }}
      />

      <Animated.View
        entering={FadeIn.delay(500)}
        style={{
          position: "absolute",
          top: 0,
          width: SCREEN_WIDTH,
          height: SCREEN_HEIGHT,
          backgroundColor: item.backgroundColor,
          zIndex: 1,
        }}
      >
        <Header
          goBack={() => {
            setVisible(true);
            goBack();
          }}
          id={item.id}
          materialColor={MATERIAL_COLOR}
        />

        <Animated.Image
          sharedTransitionTag={`car-${item.id}`}
          sharedTransitionStyle={transition}
          source={item.image}
          style={{
            width: SCREEN_WIDTH,
            height: SCREEN_WIDTH * 0.5,
            zIndex: 5,
            marginBottom: 10,
          }}
          resizeMode={"cover"}
        />

        <Animated.View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 10,
          }}
          entering={FadeIn.duration(200).delay(500)}
        >
          <Text
            style={{
              color: item.backgroundColor === "orange" ? "#fff" : "orange",
              fontSize: 14,
              fontWeight: "bold",
            }}
          >
            Premium
          </Text>

          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <AntDesign
              name="star"
              size={14}
              color={item.backgroundColor === "orange" ? "#fff" : "orange"}
            />
            <Text
              style={{
                color: item.backgroundColor === "orange" ? "#fff" : "orange",
                fontSize: 14,
                fontWeight: "bold",
              }}
            >
              {item.rating}
            </Text>
          </View>
        </Animated.View>

        <Animated.Text
          style={{
            fontSize: 30,
            color: MATERIAL_COLOR,
            fontWeight: "bold",
            padding: 10,
            marginVertical: 15,
          }}
          entering={FadeInLeft.duration(200).delay(700)}
        >
          {item.name}
        </Animated.Text>
      </Animated.View>

      <Animated.View
        entering={SlideInDown.duration(400).delay(900)}
        style={{
          position: "absolute",
          top: SCREEN_HEIGHT * 0.55,
          width: SCREEN_WIDTH,
          height: SCREEN_HEIGHT,
          backgroundColor: "#faf3dd",
          borderTopLeftRadius: BORDER_RADIUS,
          borderTopRightRadius: BORDER_RADIUS,
          zIndex: 3,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            color: "#000",
            padding: 16,
            fontWeight: "600",
          }}
        >
          Features
        </Text>

        <View style={{ flexDirection: "row" }}>
          <Box
            background="orange" //f8e16c c0d684
            title="ENGINE OUTPUT"
            valueType="hp"
            value={item.features.enginePower}
            icon={ENGINE_ICON}
            index={1}
          />
          <Box
            background="orange" //ff8c42 aab2ff
            title="HIGHEST SPEED"
            valueType="km/h"
            value={item.features.maxSpeed}
            icon={SPEED_ICON}
            index={2}
          />
          <Box
            background="orange" //ffba08 ffaf87
            title="TIME TO 100 Km/h"
            valueType="sec"
            value={item.features.zeroToHundred}
            icon={TIME_ICON}
            index={3}
          />
        </View>
      </Animated.View>

      <Animated.View
        entering={SlideInDown.duration(400).delay(700)}
        style={{
          width: SCREEN_WIDTH,
          flexDirection: "row",
          borderTopLeftRadius: 26,
          borderTopRightRadius: 26,
          justifyContent: "space-between",
          backgroundColor: "#fff",
          padding: 8,
          position: "absolute",
          bottom: 0,
          zIndex: 4,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 8,
          }}
        >
          <Text style={{ fontSize: 16, color: "#000", paddingTop: 8 }}>$</Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 36,
              color: "#000",
              margin: 5,
            }}
          >
            {item.price}
          </Text>
          <Text
            style={{
              fontSize: 14,
              paddingTop: 8,
              color: "gray",
              fontStyle: "italic",
            }}
          >
            /Day
          </Text>
        </View>
        <Pressable
          style={{
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: 60,
            borderRadius: 20,
            backgroundColor: "orange",
          }}
          onPress={() => navigate("DetailedRent", { item })}
        >
          <Text style={{ color: "#fff", fontSize: 16 }}>Rent a car</Text>
        </Pressable>
      </Animated.View>
    </View>
  );
};

export default DetailedCar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
