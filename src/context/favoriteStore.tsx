import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface FavoriteState {
  favorites: number[];
  setFavorite: (id: number) => void;
}

const useFavoriteStore = create<FavoriteState>()(
  persist(
    (set) => ({
      favorites: [],
      setFavorite: (id: number) => {
        set((state) => {
          const isFavorite = state.favorites.includes(id);
          return {
            favorites: isFavorite
              ? state.favorites.filter((fav) => fav !== id)
              : [...state.favorites, id],
          };
        });
      },
    }),
    {
      name: "favoriteStorage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export default useFavoriteStore;
