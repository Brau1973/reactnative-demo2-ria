import React from "react";
import { SafeAreaView, Text } from "react-native";

export default function Battle(props) {
  const { selectedToBattle } = props;
  console.log(selectedToBattle);

  return (
    <SafeAreaView>
      <Text>Battle</Text>
    </SafeAreaView>
  );
}
