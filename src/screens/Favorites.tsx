import { ScrollView, useWindowDimensions } from "react-native";
import React, { useEffect, useState } from "react";
import useFavoriteStore from "../Store/favoriteStore";
import { Car, carData } from "../util/data";
import RenderItem from "./components/RenderItem";
import Animated, { SlideInLeft } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { FavoriteStackParams } from "../navigation/FavoriteStack";

const Favorites = () => {
  const { favorites } = useFavoriteStore();
  const [favoriteCars, setFavoriteCars] = useState<Car[]>([]);
  const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = useWindowDimensions();
  const { navigate } =
    useNavigation<
      NativeStackNavigationProp<FavoriteStackParams, "Favorites">
    >();

  useEffect(() => {
    setFavoriteCars(() => {
      return favorites
        .map((id) => {
          const favoriteCar = carData.find((car) => car.id === id);
          if (favoriteCar) {
            return favoriteCar;
          }
        })
        .filter((car) => car !== undefined);
    });
  }, [favorites]);

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, paddingLeft: 10, paddingTop: 10 }}
    >
      {favoriteCars.map((car, index) => (
        <Animated.View
          key={car.id}
          entering={SlideInLeft.duration(400).delay(200 * index)}
        >
          <RenderItem
            item={car}
            index={index}
            navigate={navigate}
            container_width={SCREEN_WIDTH * 0.9}
            container_height={SCREEN_HEIGHT * 0.5}
          />
        </Animated.View>
      ))}
    </ScrollView>
  );
};

export default Favorites;
