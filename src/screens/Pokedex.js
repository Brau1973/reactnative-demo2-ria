import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
} from "react-native";
import { getPokemonsApi, getPokemonDetailsByUrlApi } from "../api/pokemon";
import PokemonList from "../components/PokemonList";
import useBattle from "../hooks/useBattle";

export default function Pokedex({ navigation }) {
  const [pokemons, setPokemons] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);
  const { selectedToBattle } = useBattle();

  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  }, []);

  const loadPokemons = async () => {
    try {
      const response = await getPokemonsApi(nextUrl);
      setNextUrl(response.next);

      const pokemonsArray = [];
      for await (const pokemon of response.results) {
        const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);

        pokemonsArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          image: pokemonDetails.sprites.other["official-artwork"].front_default,
        });
      }

      setPokemons([...pokemons, ...pokemonsArray]);
    } catch (error) {
      console.error(error);
    }
  };

  const navigateToBattle = () => {
    if (selectedToBattle.length === 2) {
      navigation.navigate("Battle");
    }
  };

  return (
    <SafeAreaView>
      <PokemonList
        pokemons={pokemons}
        loadPokemons={loadPokemons}
        isNext={nextUrl}
      />

      <TouchableOpacity
        onPress={() => {
          navigateToBattle();
          // {() => handleSelected(pokemon)}
          // navigation.navigate("Battle");
        }}
        style={styles.fabLocationBR}
      >
        <View style={styles.fab}>
          <Image
            source={require("../assets/battleIcon.png")}
            style={styles.image}
          />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  fabLocationBR: {
    position: "absolute",
    bottom: 35,
    right: 35,
  },
  fab: {
    backgroundColor: "grey",
    width: 60,
    height: 60,
    borderRadius: 100,
  },
  image: {
    width: 60,
    height: 60,
  },
});
