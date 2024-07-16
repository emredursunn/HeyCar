import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailedCar from "../screens/DetailedCar";
import Favorites from "../screens/Favorites";
import { Car } from "../util/CarsData";
import DetailedRent from "../screens/DetailedRent";

export type FavoriteStackParams = {
  Favorites: undefined;
  DetailedCar: {
    item: Car;
  };
  DetailedRent: {
    item: Car;
  };
};

const Stack = createNativeStackNavigator<FavoriteStackParams>();

export const FavoriteStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={"Favorites"}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="Favorites"
        component={Favorites}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="DetailedCar"
        component={DetailedCar}
        options={{
          presentation: "transparentModal",
          animation: "fade_from_bottom",
        }}
      />
      <Stack.Screen
        name="DetailedRent"
        component={DetailedRent}
        options={{
          animation: "fade_from_bottom",
        }}
      />
    </Stack.Navigator>
  );
};
