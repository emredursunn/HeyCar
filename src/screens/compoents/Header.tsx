import { Pressable, StyleSheet, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import useFavoriteStore from "../../context/favoriteStore";

interface HeaderProps {
  goBack: () => void;
  id: number;
  materialColor: string;
}

const Header = ({ goBack, id, materialColor }: HeaderProps) => {
  const { favorites, setFavorite } = useFavoriteStore();

  const isFavorite = favorites.includes(id);

  const BACK_ICON = (
    <Ionicons name="arrow-back-sharp" size={24} color={materialColor} />
  );
  const HEART_EMPTY_ICON = (
    <FontAwesome name="heart-o" size={24} color={materialColor} />
  );
  const HEART_FILLED_ICON = (
    <Fontisto name="heart" size={24} color={materialColor} />
  );

  return (
    <View style={styles.container}>
      <Pressable onPress={goBack}>{BACK_ICON}</Pressable>
      <Pressable onPress={() => setFavorite(id)}>
        {isFavorite ? HEART_FILLED_ICON : HEART_EMPTY_ICON}
      </Pressable>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    zIndex: 5,
    padding: 16,
    marginBottom:10
  },
});
