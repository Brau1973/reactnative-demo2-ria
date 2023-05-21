import React from "react";
import { SafeAreaView, StyleSheet, Image } from "react-native";

export default function Favorite() {
  return (
    <SafeAreaView>
      <Image source={require("../assets/logo.png")} style={styles.image} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    top: 200,
    width: 350,
    height: 125,
  },
});
