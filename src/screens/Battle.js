import React from "react";
import { SafeAreaView, Text } from "react-native";
import useBattle from "../hooks/useBattle";

export default function Battle() {
  //TEST CONTEXT
  const { selectedToBattle } = useBattle();

  return (
    <SafeAreaView>
      <Text>
        Pelean {selectedToBattle[0].name} VS {selectedToBattle[1].name}
      </Text>
    </SafeAreaView>
  );
}
