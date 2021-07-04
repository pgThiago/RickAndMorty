import { useContext } from "react";
import { CharacterContext } from "data/contexts/CharacterContext";

export function useCharacterContext() {
  return useContext(CharacterContext);
}
