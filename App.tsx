import { StatusBar, StyleSheet, Text, View } from "react-native";
import RootContainer from "./src/navigation/RootContainer";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'black'} />
      <RootContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
