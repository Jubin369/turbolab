import { Image, Stack, Text } from "@chakra-ui/react";

const CardEpisodes = ({ episode }) => {
  return (
    <Stack backgroundColor="blue.100" borderRadius="10px">
      <Stack p="20px">
        <Text fontWeight={"bold"}>{episode.name}</Text>
        <Text fontSize={"sm"}>{episode.episode}</Text>

        <Text fontSize={"sm"} color="GrayText">
          Air date:
        </Text>
        <Text fontSize={"sm"}>{episode.air_date}</Text>
      </Stack>
    </Stack>
  );
};

export default CardEpisodes;
