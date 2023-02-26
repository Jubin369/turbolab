import { useLazyQuery } from "@apollo/client";
import {
  Button,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { isEmpty } from "lodash";
import { FiSearch, FiX, FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { GET_ALL_CHARACTERS } from "../queries";
import Card from "./Card";

const Characters = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);

  const [getSearchCharaters, { loading, error, data, called }] = useLazyQuery(
    GET_ALL_CHARACTERS,
    {
      variables: { page: page, name: searchQuery },
    }
  );

  useEffect(() => {
    getSearchCharaters();
  }, [searchQuery, page]);

  if (error) return <p>Error {error.message}</p>;

  let totalPages = data?.characters?.info?.pages;
  const isBottomNavigation = data?.length !== 0 && totalPages > 1 && !loading;

  return (
    <Stack backgroundColor="skyblue">
      <SimpleGrid
        columns={[1, 1, 3, 3]}
        align="center"
        width={["100%", "80%", "70%", "70%"]}
        justify="space-between"
        alignSelf="center"
        m="20px"
      >
        <Heading textAlign="center">Characters</Heading>
        <InputGroup mt="5px">
          <InputLeftElement>
            <IconButton
              aria-label="search"
              icon={<FiSearch />}
              variant="link"
              _focusVisible={{
                boxShadow: "none",
              }}
            />
          </InputLeftElement>

          <Input
            value={searchQuery}
            variant="outline"
            fontSize="xs"
            placeholder="Search Characters"
            onChange={(event) => {
              setSearchQuery(event?.target?.value);
              setPage(1);
            }}
            borderRadius="xl"
            inputProps={{
              variant: "filled",
            }}
            _focus={{
              width: "inherit",
            }}
            // onBlur={() => {
            //   onChange('')
            // }}
            transition="all 300ms"
          />

          {!isEmpty(searchQuery) && (
            <InputRightElement>
              <IconButton
                aria-label="close"
                icon={<FiX />}
                size="xs"
                variant="link"
                onClick={() => {
                  setSearchQuery("");
                  setPage(1);
                }}
              />
            </InputRightElement>
          )}
        </InputGroup>
        {isBottomNavigation && (
          <Stack direction="row" align="center" justify="flex-end">
            <Button
              size="xs"
              leftIcon={<FiArrowLeft />}
              variant="ghost"
              alignSelf="flex-end"
              isDisabled={page === 1}
              onClick={() => {
                setPage(page - 1);
              }}
            >
              Previous
            </Button>
            <Text w="200px" pt="20px">
              page:{page},Total pages({totalPages})
            </Text>
            <Button
              size="xs"
              onClick={() => {
                setPage(page + 1);
              }}
              isLoading={loading}
              isDisabled={totalPages <= page}
              colorScheme="blue"
              rightIcon={<FiArrowRight />}
              variant="solid"
              alignSelf="flex-end"
            >
              Next
            </Button>
          </Stack>
        )}
      </SimpleGrid>
      {loading && <Text textAlign="center"> Loading</Text>}
      {!loading && (
        <SimpleGrid columns={[1, 2, 3, 4]} spacing={5} px="20px">
          {data?.characters?.results.map((character) => (
            <Card character={character} key={character.id} />
          ))}
        </SimpleGrid>
      )}
    </Stack>
  );
};

export default Characters;
