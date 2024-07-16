import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onboarding from "../Onboarding/Onboarding";
import Home from "../screens/Home";
import DetailedCar from "../screens/DetailedCar";
import { Car } from "../util/CarsData";
import DetailedRent from "../screens/DetailedRent";

export type HomeStackParams = {
  Onboarding: undefined;
  Home: undefined;
  DetailedCar: {
    item: Car;
  };
  DetailedRent: {
    item: Car;
  };
};

const Stack = createNativeStackNavigator<HomeStackParams>();

export const HomeStack = () => (
  <Stack.Navigator
    initialRouteName="Onboarding"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="Onboarding" component={Onboarding} />
    <Stack.Screen
      name="Home"
      component={Home}
      options={{
        headerShown: true,
        headerTitle: "Store",
        animation: "slide_from_right",
      }}
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
