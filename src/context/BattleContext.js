import React, { useState, createContext } from "react";

export const BattleContext = createContext({
  selectedToBattle: [],
  addRemovePokemon: () => {},
});

export function BattleProvider(props) {
  const { children } = props;
  const [selectedToBattle, setSelectedToBattle] = useState([]);

  const addRemovePokemon = (selectedPokemon) => {
    if (!selectedToBattle.includes(selectedPokemon)) {
      setSelectedToBattle([...selectedToBattle, selectedPokemon]);
    } else {
      setSelectedToBattle(
        selectedToBattle.filter((p) => p !== selectedPokemon)
      );
    }
  };

  const valueContext = {
    selectedToBattle,
    addRemovePokemon,
  };

  return (
    <BattleContext.Provider value={valueContext}>
      {children}
    </BattleContext.Provider>
  );
}
