import React from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { RouteProp, useRoute } from "@react-navigation/native";
import { HomeStackParams } from "../navigation/HomeStack";
import { FavoriteStackParams } from "../navigation/FavoriteStack";
import { mapStyle } from "../util/mapStyle";
import Animated, {
  SharedTransition,
  SlideInDown,
  SlideInLeft,
  withTiming,
} from "react-native-reanimated";
import { Fontisto } from "@expo/vector-icons";

const DetailedRent = () => {
  const route =
    useRoute<
      RouteProp<HomeStackParams | FavoriteStackParams, "DetailedRent">
    >();
  const item = route.params.item;
  const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = useWindowDimensions();

  const transition = SharedTransition.custom((values) => {
    "worklet";
    return {
      height: withTiming(values.targetHeight, { duration: 500 }),
      width: withTiming(values.targetWidth, { duration: 500 }),
      originX: withTiming(values.targetOriginX, { duration: 500 }),
      originY: withTiming(values.targetOriginY, { duration: 500 }),
    };
  });

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          ...item.location,
          latitudeDelta: 0.003,
          longitudeDelta: 0.003,
        }}
        zoomEnabled
        style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT * 0.6 }}
      >
        <Marker coordinate={{ ...item.location }} />
      </MapView>

      <Animated.View
        sharedTransitionTag={`box-${item.id}`}
        sharedTransitionStyle={transition}
        style={[
          styles.orangeBox,
          {
            top: SCREEN_HEIGHT * 0.6 - 30,
            width: SCREEN_WIDTH,
            height: SCREEN_HEIGHT * 0.4 + 30 - SCREEN_HEIGHT * 0.3 + 30,
            backgroundColor: item.backgroundColor,
            zIndex: 1,
          },
        ]}
      />
      <Animated.View
        style={[
          styles.orangeBox,
          {
            top: SCREEN_HEIGHT * 0.6 - 30,
            width: SCREEN_WIDTH,
            height: SCREEN_HEIGHT * 0.4 + 30 - SCREEN_HEIGHT * 0.25 + 30,
            backgroundColor: item.backgroundColor,
            zIndex: 1,
          },
        ]}
      >
        <Animated.Image
          sharedTransitionTag={`car-${item.id}`}
          sharedTransitionStyle={transition}
          source={item.image}
          style={[
            styles.image,
            {
              width: SCREEN_WIDTH - 20,
              height: SCREEN_HEIGHT * 0.25,
              position: "absolute",
              top: "-80%",
              zIndex: 6,
            },
          ]}
          resizeMode={"cover"}
        />
        <Animated.Text
          entering={SlideInLeft.duration(400).delay(800)}
          style={[
            styles.itemName,
            { position: "absolute", bottom: "40%", left: "5%" },
          ]}
        >
          {item.name}
        </Animated.Text>
      </Animated.View>

      <Animated.View
        entering={SlideInDown.duration(1000).delay(200)}
        style={[
          styles.whiteBox,
          {
            width: SCREEN_WIDTH,
            height: SCREEN_HEIGHT * 0.25,
            top: SCREEN_HEIGHT * 0.75,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          },
        ]}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: SCREEN_WIDTH,
            paddingHorizontal: 15,
          }}
        >
          <Text style={styles.priceTag}>${item.price}/Day</Text>
          <View style={{ flexDirection: "row", gap: 8 }}>
            <Text style={styles.priceTag}>20-22 Jul,2024</Text>
            <Fontisto name="date" size={24} color="black" />
          </View>
        </View>

        <Pressable style={styles.buyButton}>
          <Text style={styles.buyButtonText}>Rent Now</Text>
        </Pressable>
      </Animated.View>
    </View>
  );
};

export default DetailedRent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  orangeBox: {
    position: "absolute",
    backgroundColor: "#F9A825",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 10,
    alignItems: "center",
  },
  image: {
    marginBottom: 10,
  },
  itemName: {
    fontSize: 32,
    fontWeight: "600",
    color: "#fff",
  },
  whiteBox: {
    position: "absolute",
    backgroundColor: "#FFF",
    zIndex: 3,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  priceTag: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
    marginBottom: 10,
  },
  buyButton: {
    width: "100%",
    backgroundColor: "orange",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 10,
  },
  buyButtonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
    textAlign: "center",
  },
});
