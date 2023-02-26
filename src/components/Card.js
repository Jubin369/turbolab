import { Image, Stack, Text } from "@chakra-ui/react";

const Card = ({ character }) => {
  return (
    <a href={`/character/${character?.id}`}>
      <Stack backgroundColor="blue.100" borderRadius="10px">
        <Image
          src={character.image}
          alt="character"
          borderRadius="10px"
          m="10px"
        />
        <Stack p="20px">
          <Text fontWeight={"bold"}>{character.name}</Text>
          <Text fontSize={"sm"}>
            {character.status} - {character.species}
          </Text>

          <Text fontSize={"sm"} color="GrayText">
            Last known location
          </Text>
          <Text fontSize={"sm"}>{character.location.name}</Text>
        </Stack>
      </Stack>
    </a>
  );
};

export default Card;
