import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

interface Props {
  name: string;
  description?: string;
  image: any;
}

const ProfileHeader = ({ name, description, image }: Props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignSelf:'center',
        alignItems: "center",
        width: "95%",
        backgroundColor:'#fff',
        padding: 8,
        borderRadius:10,
        marginTop:10,
        shadowColor:'#000',
        shadowOpacity:1,
        shadowOffset:{width:2,height:2},
        shadowRadius:2,
        borderWidth:1,
        borderColor:'lightgray'
      }}
    >
      <View style={{ justifyContent:'center' }}>
        <Text style={{ fontSize: 20, fontWeight: "bold", fontStyle:'italic' }}>{name}</Text>
        <Text style={{ fontSize: 16, color: "gray", fontStyle:'italic' }}>{description}</Text>
      </View>
      <Image
        source={image}
        style={{ width: 50, height: 50, borderRadius: 8 }}
      />
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({});
