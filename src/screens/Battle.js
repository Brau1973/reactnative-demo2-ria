import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
  Text,
} from "react-native";
import { capitalize } from "lodash";
import useBattle from "../hooks/useBattle";
import { getPokemonDetailsApi } from "../api/pokemon";

export default function Battle() {
  //TEST CONTEXT
  const { selectedToBattle } = useBattle();

  const [pokemon1, setPokemon1] = useState(null);
  const [pokemon2, setPokemon2] = useState(null);

  useEffect(() => {
    const fetchData1 = async () => {
      try {
        const response1 = await getPokemonDetailsApi(selectedToBattle[0].id);
        await setPokemon1(response1);
      } catch (error) {
        navigation.goBack();
      }
    }
    fetchData1();
  }, []);

  useEffect(() => {
    const fetchData2 = async () => {
      try {
        const response2 = await getPokemonDetailsApi(selectedToBattle[1].id);
        await setPokemon2(response2);
      } catch (error) {
        navigation.goBack();
      }
    }
    fetchData2();
  }, []);

  if (!pokemon1 || !pokemon2) return null;

  const winner = () => {
    var modifier = 0;
    for(let i=0; i<6; i++){
      if(pokemon1.stats[i].base_stat > pokemon2.stats[i].base_stat){
        modifier++;
      }else if(pokemon1.stats[i].base_stat < pokemon2.stats[i].base_stat){
        modifier--;
      }
    }
    modifier = modifier*10;
    if (modifier<=-50){
      return 1;
    }else if (modifier>=50){
      return 0;
    }else{
      var percentage = 50 + modifier;
      var RandomNumber = Math.floor(Math.random() * 100) + 1 ;
      if (RandomNumber > percentage){
        return 1;
      } else {
        return 0;
      }
    }
  }

  const pokemon = winner();

  return (
    <SafeAreaView style = {styles.container}>
      <View style = {styles.versusContainer}>
        <View style = {styles.versusPokemonImageContainer}>
          <Image source = {{ uri: selectedToBattle[0].image }} style={styles.versusPokemonImage}/>
        </View>
        <View style = {styles.versus}>
          <Text style = {styles.versusNames}>
            {capitalize(selectedToBattle[0].name)}
          </Text>
          <Image source = { require("../assets/versus.png") } style={styles.versusImage}/>
          <Text style = {styles.versusNames}>
            {capitalize(selectedToBattle[1].name)}
          </Text>
        </View>
        <View style = {styles.versusPokemonImageContainer}>
          <Image source = {{ uri: selectedToBattle[1].image }} style={styles.versusPokemonImage}/>
        </View>
      </View>
      <View style = {styles.congratulation}>
        <Image source = { require("../assets/congratulations.png") } style={styles.congratulationImage} />
      </View>
      <View style = {styles.pokemon}>
        <View style = {styles.imageContainer} >
          <Image source = {{ uri: selectedToBattle[pokemon].image }} style={styles.image} />
        </View>
        <View style = {styles.versus}>
          <Text style = {styles.name}> 🏆🥇 {capitalize(selectedToBattle[pokemon].name)} 🥇🏆 </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  versusContainer: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 6,
    borderBottomColor: '#cccccc'
  },
  versus: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  versusNames: {
    fontWeight: "bold",
    fontSize: 20,
    padding: 5,
  },
  versusImage: {
    resizeMode: 'contain',
    width: 50,
    height: 50
  },
  versusPokemonImageContainer:{
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  versusPokemonImage:{
    resizeMode: 'contain',
    width: '100%',
    height: '100%'
  },
  congratulation: {
    flex: 2,
    marginTop: "10%",
    alignItems: 'center',
    width: '100%',
    height: '100%',

  },
  congratulationImage: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%'
  },
  pokemon: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    height: '100%'
  },
  name: {
    fontWeight: "bold",
    fontSize: 30,
    paddingTop: 10,
    paddingBottom: 30
  },
  imageContainer: {
    flex: 2,
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
  image: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%'
  },
});