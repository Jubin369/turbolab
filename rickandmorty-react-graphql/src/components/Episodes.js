import { useQuery } from "@apollo/client";
import { Heading, SimpleGrid, Stack } from "@chakra-ui/react";
import { GET_ALL_CHARACTERS } from "../queries";
import Card from "./Card";

const Episodes = () => {
  const { loading, error, data } = useQuery(GET_ALL_CHARACTERS, {
    variables: { page: 3 },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error {error.message}</p>;

  return (
    <Stack backgroundColor="skyblue">
      <Heading textAlign="center" m="20px">
        Episodes
      </Heading>
      <SimpleGrid columns={[1, 2, 3, 4]} spacing={5} px="20px">
        {data?.characters?.results.map((character) => (
          <Card character={character} key={character.id} />
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export default Episodes;
