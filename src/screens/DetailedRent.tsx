import React from "react";
import {
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
import { Fontisto } from "@expo/vector-icons";
import { transitionShort } from "../util/util";
import TransitionBox from "./components/TransitionBox";
import BottomSheet from "./components/BottomSheet";
import TransitionCar from "./components/TransitionCar";
import Name from "./components/Name";
import Price from "./components/Price";
import Button from "./components/Button";

const BORDER_RADIUS = 30;

const DetailedRent = () => {
  const route =
    useRoute<
      RouteProp<HomeStackParams | FavoriteStackParams, "DetailedRent">
    >();
  const item = route.params.item;
  const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = useWindowDimensions();

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

      {/* THIS IS JUST BEING VISIBLE IN TRANSITION SECTION */}
      <TransitionBox
        item={item}
        sharedTransitionStyle={transitionShort}
        customStyle={{
          bottom: 0,
          width: SCREEN_WIDTH,
          height: SCREEN_HEIGHT * 0.4 + BORDER_RADIUS,
        }}
      />
      {/*************************************/}

      <BottomSheet
        hasEntering={false}
        customStyle={{
          bottom: 0,
          height: SCREEN_HEIGHT * 0.4 + BORDER_RADIUS,
          backgroundColor: item.backgroundColor,
        }}
      >
        <TransitionCar
          item={item}
          sharedTransitionStyle={transitionShort}
          customStyle={{
            height: SCREEN_HEIGHT * 0.25,
            width: SCREEN_WIDTH - 20,
            top: "-35%",
            position: "absolute",
          }}
        />

        <Name
          name={item.name}
          color="#fff"
          customStyle={{ position: "absolute", top: "20%" }}
        />
      </BottomSheet>

      <BottomSheet
        hasEntering={true}
        delay={1000}
        duration={200}
        customStyle={{
          zIndex: 1,
          backgroundColor: "#fff",
          paddingVertical:'12%',
        }}
      >
        <View style={[styles.detailRow, { width: SCREEN_WIDTH }]}>
          <Price price={item.price} color="#000" customStyle={styles.detail} />
          <View style={{ flexDirection: "row", gap: 8 }}>
            <Text style={styles.detail}>20-22 Jul,2024</Text>
            <Fontisto name="date" size={24} color="black" />
          </View>
        </View>
        
        <Button title="Rent Now" customStyle={{width:'100%'}}/>
      </BottomSheet>
    </View>
  );
};

export default DetailedRent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  detail: {
    fontSize: 18,
    fontWeight: "600",
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
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
});
