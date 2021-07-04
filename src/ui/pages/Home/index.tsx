import { useState } from "react";
import {
  Container,
  Header,
  InfoContainer,
  WatchFavoritesButton,
  Logo,
  SearchInput,
  ListOfCharacters,
  InfoMessage,
  HandlePageButton,
  PaginationContainer,
} from "ui/styles/pages/home.styles";

import imgLogo from "assets/images/logo.png";

import { CharacterItem } from "ui/components/CharacterItem";

import { CharacterType } from "types/CharacterType";

import { useCharacterSearch } from "data/hooks/useCharacterSearch";
import { useCharacterContext } from "data/hooks/useCharacterContext";

export function Home() {
  const { favorites } = useCharacterContext();

  const [searchedCharacter, setSearchedCharacter] = useState(""),
    [pageNumber, setPageNumber] = useState(1),
    [watchFavorites, setWatchFavorites] = useState(false);

  const { isLoading, hasError, characters, hasNext, hasPrevious } =
    useCharacterSearch(pageNumber, searchedCharacter);

  function handleSearchCharacter(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchedCharacter(event.target.value);
  }

  function handleWatchFavorites() {
    setWatchFavorites(!watchFavorites);
  }

  function handleNextPage() {
    setPageNumber((currentPage) => currentPage + 1);
    document.documentElement.scrollTop = 0;
  }

  function handlePreviusPage() {
    setPageNumber((currentPage) => currentPage - 1);
    document.documentElement.scrollTop = 0;
  }

  console.log(isLoading, hasError);

  return (
    <Container>
      <Header>
        <Logo src={imgLogo} alt="Rick and Morty" />
        <SearchInput
          value={searchedCharacter}
          onChange={handleSearchCharacter}
          type="search"
          placeholder="Procurar personagem"
        />
        <WatchFavoritesButton type="button" onClick={handleWatchFavorites}>
          {watchFavorites ? "Ver todos" : "Meus favoritos"}
        </WatchFavoritesButton>
      </Header>

      <InfoContainer>
        {isLoading && <InfoMessage>Só um segundo</InfoMessage>}
        {!isLoading && searchedCharacter !== "" && hasError && (
          <InfoMessage>Personagem não encontrado</InfoMessage>
        )}
        {watchFavorites === true && favorites.length === 0 && (
          <InfoMessage>Nenhum personagem favorito</InfoMessage>
        )}
      </InfoContainer>

      <ListOfCharacters>
        {watchFavorites
          ? favorites.map((favorite: CharacterType) => (
              <CharacterItem
                key={favorite.id}
                id={favorite.id}
                name={favorite.name}
                image={favorite.image}
                gender={favorite.gender}
                isFavorited={true}
              />
            ))
          : characters.map((character: CharacterType) => (
              <CharacterItem
                key={character.id}
                id={character.id}
                name={character.name}
                image={character.image}
                gender={character.gender}
                isFavorited={favorites.some(
                  (favorite) => favorite.id === character.id
                )}
              />
            ))}
      </ListOfCharacters>

      <PaginationContainer>
        {hasPrevious && !watchFavorites && (
          <HandlePageButton type="button" onClick={handlePreviusPage}>
            &lt;
          </HandlePageButton>
        )}
        {hasNext && !watchFavorites && (
          <HandlePageButton type="button" onClick={handleNextPage}>
            &gt;
          </HandlePageButton>
        )}
      </PaginationContainer>
    </Container>
  );
}
