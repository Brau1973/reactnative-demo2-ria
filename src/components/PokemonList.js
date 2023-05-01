import React, { useState } from "react";
import {
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Platform,
} from "react-native";
import PokemonCard from "./PokemonCard";

export default function PokemonList(props) {
  const { pokemons, loadPokemons, isNext } = props;

  const [selectedToBattle, setSelectedToBattle] = useState([]);

  const handleSelectedToBattle = (selectedPokemon) => {
    console.log("llamado desde hijo");
    console.log(selectedPokemon);
    setSelectedToBattle(...selectedToBattle, selectedPokemon);
    console.log("A ver que quedo en el estado:");
    console.log(selectedToBattle);
  };

  const loadMore = () => {
    loadPokemons();
  };

  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => (
        <PokemonCard
          pokemon={item}
          handleSelectedToBattle={handleSelectedToBattle}
        />
      )}
      contentContainerStyle={styles.flatListContentContainer}
      onEndReached={isNext && loadMore}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        isNext && (
          <ActivityIndicator
            size="large"
            style={styles.spinner}
            color="#AEAEAE"
          />
        )
      }
    />
  );
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
    marginTop: Platform.OS === "android" ? 30 : 0,
  },
  spinner: {
    marginTop: 20,
    marginBottom: Platform.OS === "android" ? 90 : 60,
  },
});
