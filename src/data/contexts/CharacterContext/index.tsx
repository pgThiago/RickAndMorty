import { createContext, useState } from "react";

import { CharacterType } from "types/CharacterType";

export const CharacterContext = createContext({} as CharacterContextTypes);

type CharacterContextTypes = {
  favorites: CharacterType[];

  handleCreateFavorite: (newFavorite: CharacterType) => void;
  handleDeleteFavorite: (id: number) => void;
};

interface CharacterContextProviderProps {
  children: React.ReactNode;
}

export function CharacterContextProvider({
  children,
}: CharacterContextProviderProps) {
  const [favorites, setFavorites] = useState<CharacterType[]>([]);
  function handleCreateFavorite(newFavorite: CharacterType) {
    setFavorites([...favorites, newFavorite]);
  }
  function handleDeleteFavorite(id: number) {
    setFavorites(favorites.filter((favorite) => favorite.id !== id));
  }
  return (
    <CharacterContext.Provider
      value={{ favorites, handleCreateFavorite, handleDeleteFavorite }}
    >
      {children}
    </CharacterContext.Provider>
  );
}
