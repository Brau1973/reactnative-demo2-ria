import React, { useState, useEffect } from "react";
import { SafeAreaView, Text } from "react-native";
import useBattle from "../hooks/useBattle";
import { getPokemonDetailsApi } from "../api/pokemon";

export default function Battle() {
  //TEST CONTEXT
  const { selectedToBattle } = useBattle();
  console.log(selectedToBattle);

  const [pokemon1, setPokemon1] = useState(null);
  const [pokemon2, setPokemon2] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response1 = await getPokemonDetailsApi(selectedToBattle[0].id);
        const response2 = await getPokemonDetailsApi(selectedToBattle[1].id);
        setPokemon1(response1);
        setPokemon2(response2);
      } catch (error) {
        navigation.goBack();
      }
    })();
  }, []);

  if (!pokemon1 && !pokemon2) return null;

  return (
    <SafeAreaView>
      <Text>
        Pelean {selectedToBattle[0].name} VS {selectedToBattle[1].name} Y{" "}
        {pokemon1.stats[0].base_stat}
      </Text>
    </SafeAreaView>
  );
}
