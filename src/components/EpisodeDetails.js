import { useQuery } from "@apollo/client";
import { Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { GET_EPISODE } from "../queries";

const EpisodeDetails = () => {
  const { id } = useParams();

  const { loading, error, data } = useQuery(GET_EPISODE, {
    variables: { id: id },
  });

  let episode = data?.episode;

  if (error) return <p>Error {error.message}</p>;

  return (
    <Stack backgroundColor="skyblue">
      {" "}
      <SimpleGrid
        columns={[1, 1, 2, 2]}
        w={["100%", "100%", "80%", "60%"]}
        spacing={5}
        px="20px"
        mt="30px"
        alignSelf={"center"}
        backgroundColor="blue.100"
      >
        <Stack borderRadius="10px">
          <Stack p="20px">
            <Text fontWeight={"bold"}>{episode?.name}</Text>

            <Stack direction="row">
              <Text fontSize={"sm"} color="GrayText">
                Episode:
              </Text>
              <Text fontSize={"sm"}>{episode?.episode}</Text>
            </Stack>
            <Stack direction="row">
              <Text fontSize={"sm"} color="GrayText">
                Air date:
              </Text>
              <Text fontSize={"sm"}>{episode?.air_date}</Text>
            </Stack>
          </Stack>
        </Stack>
        <Stack>
          <Text fontWeight={"bold"} my="30px" textAlign="center">
            Characters in Episode
          </Text>
          {episode?.characters?.map((character) => {
            return (
              <a href={`/character/${character?.id}`} key={character?.id}>
                <Stack backgroundColor={"blue.300"} borderRadius="5px" p="10px">
                  <Text>name: {character.name}</Text>
                </Stack>
              </a>
            );
          })}
        </Stack>
      </SimpleGrid>
    </Stack>
  );
};

export default EpisodeDetails;
