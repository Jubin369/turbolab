import { useQuery } from "@apollo/client";
import { Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { GET_CHARACTER } from "../queries";

const CharacterDetails = () => {
  const { id } = useParams();

  const { loading, error, data } = useQuery(GET_CHARACTER, {
    variables: { id: id },
  });

  let character = data?.character;

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
          <Image
            src={character?.image}
            alt="character"
            borderRadius="10px"
            m="10px"
          />
          <Stack p="20px">
            <Text fontWeight={"bold"}>{character?.name}</Text>

            <Stack direction="row">
              <Text fontSize={"sm"} color="GrayText">
                gender:
              </Text>
              <Text fontSize={"sm"}>{character?.gender}</Text>
            </Stack>
            <Stack direction="row">
              <Text fontSize={"sm"} color="GrayText">
                status:
              </Text>
              <Text fontSize={"sm"}>{character?.status}</Text>
            </Stack>
            <Stack direction="row">
              <Text fontSize={"sm"} color="GrayText">
                species:
              </Text>
              <Text fontSize={"sm"}>{character?.species}</Text>
            </Stack>
            <Stack direction="row">
              <Text fontSize={"sm"} color="GrayText">
                origin:
              </Text>
              <Text fontSize={"sm"}>{character?.origin?.name}</Text>
            </Stack>
            <Stack direction="row">
              <Text fontSize={"sm"} color="GrayText">
                Last known location:
              </Text>
              <Text fontSize={"sm"}>{character?.location?.name}</Text>
            </Stack>
          </Stack>
        </Stack>
        <Stack>
          <Text fontWeight={"bold"} my="30px" textAlign="center">
            Character in Episodes
          </Text>
          {character?.episode?.map((eps) => {
            return (
              <a href={`/episode/${eps?.id}`} key={eps?.id}>
                <Stack backgroundColor={"blue.300"} borderRadius="5px" p="10px">
                  <Text>name: {eps.name}</Text>
                  <Text>episode: {eps.episode}</Text>
                </Stack>
              </a>
            );
          })}
        </Stack>
      </SimpleGrid>
    </Stack>
  );
};

export default CharacterDetails;
