import React from "react";
import { View, ImageBackground } from "react-native";
import {styles} from "./RegistrationScreen.styles"

export default function RegistrationScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("../../assets/Photo BG.png")}
      ></ImageBackground>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   image: {
//     flex: 1,
//     resizeMode: "cover",
//   },
// });