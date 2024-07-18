import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeStack } from "./HomeStack";
import { FavoriteStack } from "./FavoriteStack";
import useTabBarStore from "../Store/tabBarStore";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';

export type TabStackParams = {
  HomeStack: undefined;
  FavoriteStack: undefined;
};

const Tab = createBottomTabNavigator<TabStackParams>();

const TabNavigator = () => {
  const { visible } = useTabBarStore();

  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: visible ? {borderTopWidth:1, borderColor:'gray'} : { display: "none" },
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "gray",
        tabBarShowLabel:false,
      })}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarLabelStyle:{fontSize:16, fontWeight:'600'},
          tabBarIcon: ({ focused, color, size }) => {
            const iconName = focused ? "car-sport" : "car-sport-outline";
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="FavoriteStack"
        component={FavoriteStack}
        options={{
          tabBarLabelStyle:{fontSize:16, fontWeight:'600'},
          tabBarIcon: ({ focused, color, size }) => {
            const iconName = focused ? "heart" : "hearto";
            return <AntDesign name={iconName} size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
