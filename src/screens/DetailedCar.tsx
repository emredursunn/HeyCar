import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import Animated, { FadeIn, SlideInDown } from "react-native-reanimated";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { HomeStackParams } from "../navigation/HomeStack";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import FeatureBox from "./components/FeatureBox";
import Header from "./components/Header";
import useTabBarStore from "../context/tabBarStore";
import { FavoriteStackParams } from "../navigation/FavoriteStack";
import { transitionLong } from "../util/util";
import { featureData } from "../util/data";
import TransitionBox from "./components/TransitionBox";
import BottomSheet from "./components/BottomSheet";
import TransitionCar from "./components/TransitionCar";
import Rating from "./components/Rating";
import Name from "./components/Name";
import Premium from "./components/Premium";
import Price from "./components/Price";

const DetailedCar = () => {
  const route =
    useRoute<RouteProp<HomeStackParams | FavoriteStackParams, "DetailedCar">>();
  const { navigate, goBack } =
    useNavigation<NativeStackNavigationProp<HomeStackParams, "DetailedCar">>();
  const item = route.params.item;
  const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = useWindowDimensions();
  const MATERIAL_COLOR = item.backgroundColor === "#c8d5b9" ? "#000" : "#fff";
  const { setVisible } = useTabBarStore();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* THIS IS JUST BEING VISIBLE IN TRANSITION SECTION */}
      <TransitionBox
        item={item}
        sharedTransitionStyle={transitionLong}
        customStyle={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT }}
      />
      {/**********************************/}

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

        <TransitionCar
          item={item}
          sharedTransitionStyle={transitionLong}
          customStyle={{
            width: SCREEN_WIDTH,
            height: SCREEN_WIDTH * 0.5,
            marginBottom: 10,
          }}
        />

        <Animated.View
          entering={FadeIn.duration(500).delay(1000)}
          style={styles.premiumContainer}
        >
          <Premium backgroundColor={item.backgroundColor} />
          <Rating
            rating={item.rating}
            color={MATERIAL_COLOR}
            backgroundColor={item.backgroundColor}
          />
        </Animated.View>

        <Name name={item.name} color={MATERIAL_COLOR} />
      </Animated.View>

      <BottomSheet
        duration={800}
        delay={1000}
        style={{ height: SCREEN_HEIGHT * 0.45 - 30, zIndex: 2 }}
      >
        <Text style={styles.featuresText}>Features</Text>

        <View style={{ flexDirection: "row" }}>
          {featureData.map((feature, index) => (
            <FeatureBox
              key={index}
              background={feature.background}
              title={feature.title}
              valueType={feature.valueType}
              value={
                item.features[feature.valueKey as keyof typeof item.features]
              }
              icon={feature.icon}
              index={index + 1}
            />
          ))}
        </View>

        <View style={styles.paymentContainer}>
          <Price
            price={item.price}
            color={"#000"}
            customStyle={{ fontSize: 30 }}
          />

          <Pressable
            style={styles.rentButton}
            onPress={() => navigate("DetailedRent", { item })}
          >
            <Text style={{ color: "#fff", fontSize: 16 }}>Rent a car</Text>
          </Pressable>
        </View>
      </BottomSheet>
    </ScrollView>
  );
};

export default DetailedCar;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },

  premiumContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  featuresText: {
    fontSize: 20,
    color: "#000",
    padding: 14,
    fontWeight: "600",
  },
  paymentContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    flex: 1,
    marginTop: 5,
    paddingHorizontal:8,
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: "lightgray",
  },
  rentButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 60,
    paddingVertical: 20,
    borderRadius: 20,
    backgroundColor: "orange",
  },
});
