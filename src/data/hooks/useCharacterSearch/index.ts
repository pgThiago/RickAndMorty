import { useEffect, useState } from "react";
import { CharacterType } from "types/CharacterType";

import axios from "axios";

export function useCharacterSearch(
  pageNumber: number,
  searchedCharacter: string
) {
  const [characters, setCharacters] = useState<CharacterType[]>([]),
    [isLoading, setIsLoading] = useState(false),
    [hasError, setHasError] = useState(false),
    [hasNext, setHasNext] = useState(false),
    [hasPrevious, setHasPrevious] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios({
      method: "get",
      url: `https://rickandmortyapi.com/api/character/`,
      params: {
        page: pageNumber,
        name: searchedCharacter.toLowerCase().replace(/\s/g, ""),
      },
    })
      .then((response) => {
        setCharacters(response.data.results);
        setHasError(false);
        setHasNext(response.data.info.next !== null);
        setHasPrevious(response.data.info.prev !== null);
        setIsLoading(false);
      })
      .catch((error) => {
        setHasError(true);
      });
  }, [searchedCharacter, pageNumber]);

  return {
    isLoading,
    characters,
    hasError,
    hasNext,
    hasPrevious,
  };
}
