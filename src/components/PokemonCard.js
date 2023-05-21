import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { capitalize } from "lodash";
import { useNavigation } from "@react-navigation/native";
import getColorByPokemonType from "../utils/getColorByPokemonType";
import useBattle from "../hooks/useBattle";

export default function PokemonCard(props) {
  const [selected, setSelected] = useState(null);
  const { pokemon } = props;
  const navigation = useNavigation();

  //CONTEXT
  const { addRemovePokemon } = useBattle();

  const pokemonColor = getColorByPokemonType(pokemon.type);
  const bgStyles = { backgroundColor: pokemonColor, ...styles.bgStyles };

  const goToPokemon = () => {
    navigation.navigate("Pokemon", { id: pokemon.id });
  };

  function handleSelected(pokemon) {
    if (selected == "Selected") setSelected(null);
    else setSelected("Selected");
    addRemovePokemon(pokemon);
  }

  return (
    <TouchableWithoutFeedback onPress={() => handleSelected(pokemon)}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={bgStyles}>
            <Text style={styles.selected}>{selected}</Text>
            <Text style={styles.number}>
              #{`${pokemon.order}`.padStart(3, 0)}
            </Text>
            <Text style={styles.name}>{capitalize(pokemon.name)}</Text>
            <TouchableWithoutFeedback onPress={goToPokemon}>
              <Image source={{ uri: pokemon.image }} style={styles.image} />
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  bgStyles: {
    flex: 1,
    borderRadius: 15,
    padding: 10,
  },
  number: {
    position: "absolute",
    right: 10,
    top: 10,
    color: "#fff",
    fontSize: 11,
  },
  selected: {
    position: "absolute",
    left: 10,
    top: 10,
    color: "#fff",
    fontSize: 11,
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 10,
  },
  image: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 90,
    height: 90,
  },
  battleIcon: {
    position: "absolute",
    width: 40,
    height: 40,
    bottom: 8,
    left: 8,
  },
});
