import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/navigation/Navigation";
import { BattleProvider } from "./src/context/BattleContext";

export default function App() {
  return (
    <NavigationContainer>
      <BattleProvider>
        <Navigation />
      </BattleProvider>
    </NavigationContainer>
  );
}
