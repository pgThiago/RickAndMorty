import { useCharacterContext } from "data/hooks/useCharacterContext";
import {
  Container,
  CharacterPicture,
  CharacterPictureContainer,
  CharacterDetailsContainer,
  NameGenderContainer,
  FavoriteButton,
  Name,
  Gender,
} from "ui/styles/components/character.style";

interface CharacterItemProps {
  id: number;
  name: string;
  image: string;
  gender: string;
  isFavorited: boolean;
}

export function CharacterItem({
  id,
  name,
  image,
  gender,
  isFavorited,
}: CharacterItemProps) {
  const { handleCreateFavorite, handleDeleteFavorite } = useCharacterContext();
  return (
    <Container>
      <CharacterPictureContainer>
        <CharacterPicture src={image} alt={name} />
      </CharacterPictureContainer>

      <CharacterDetailsContainer>
        <NameGenderContainer>
          <Name>Nome: {name}</Name>
          <Gender>Gênero: {gender}</Gender>
        </NameGenderContainer>

        {isFavorited ? (
          <FavoriteButton
            $isFavorited
            type="button"
            onClick={() => handleDeleteFavorite(id)}
          >
            Remover
          </FavoriteButton>
        ) : (
          <FavoriteButton
            $isFavorited={false}
            type="button"
            onClick={() =>
              handleCreateFavorite({
                id,
                name,
                gender,
                image,
              })
            }
          >
            Favoritar
          </FavoriteButton>
        )}
      </CharacterDetailsContainer>
    </Container>
  );
}
