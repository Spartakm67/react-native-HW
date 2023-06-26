import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import React from "react";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("./assets/Photo BG.png")}
      >
      <Text>Open up App.js to start working on your app!!!</Text>
        {/* <StatusBar style="auto" /> */}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    flexDirection: "column"
  },
  image: {
    flex: 1,
    // position: "absolute",
    resizeMode: "cover",
    justifyContent: "center",
  },
  text: {
    color: "green",
    fontSize: 30,
    fontWeight: "bold"
  }
});
