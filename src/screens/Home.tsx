import { ScrollView, SectionList, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { carData } from "../util/CarsData";
import RenderItem from "./compoents/RenderItem";
import Animated from "react-native-reanimated";

import { groupDataByType } from "../util/util";
import ProfileHeader from "./compoents/ProfileHeader";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { HomeStackParams } from "../navigation/HomeStack";
import useTabBarStore from "../context/tabBarStore";

const Home = () => {
  const sectionData = groupDataByType(carData);
  const { navigate } =
    useNavigation<NativeStackNavigationProp<HomeStackParams, "Home">>();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ProfileHeader
        name="Emre Dursun"
        image={require("../../assets/profilephoto.png")}
        description="Set Profile"
      />

      <View>
        <SectionList
          sections={sectionData}
          scrollEnabled={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => null}
          renderSectionHeader={({ section: { title, data } }) => (
            <View>
              <Text
                style={{
                  margin: 10,
                  fontSize: 24,
                  fontWeight: "bold",
                  paddingLeft: 8,
                }}
              >
                {title}
              </Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {data.map((car, index) => (
                  <RenderItem
                    key={car.id.toString()}
                    item={car}
                    index={index}
                    navigate={navigate}
                    container_width={160}
                    container_height={220}
                  />
                ))}
              </ScrollView>
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});
