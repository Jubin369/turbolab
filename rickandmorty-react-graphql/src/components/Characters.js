import { useLazyQuery } from "@apollo/client";
import {
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputGroupProps,
  InputLeftElement,
  InputProps,
  InputRightElement,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { isEmpty } from "lodash";
import { FiSearch, FiX } from "react-icons/fi";
import { GET_ALL_CHARACTERS } from "../queries";
import Card from "./Card";

const Characters = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const [getSearchCharaters, { loading, error, data, called }] = useLazyQuery(
    GET_ALL_CHARACTERS,
    {
      variables: { page: 1, name: searchQuery },
    }
  );

  useEffect(() => {
    getSearchCharaters();
  }, [searchQuery]);

  //if (loading) return <p>Loading...</p>;
  if (error) return <p>Error {error.message}</p>;

  // const isBottomNavigation =
  //   (data?.length === 0 && isEmpty(searchQuery) && !loading) ||
  //   (searchResults?.length === 0 && !isEmpty(searchQuery) && !searchLoading);

  return (
    <Stack backgroundColor="skyblue">
      <Stack
        direction="row"
        align="center"
        width={["100%", "80%", "50%", "50%"]}
        justify="space-between"
        alignSelf="center"
      >
        <Heading textAlign="center" m="20px">
          Characters
        </Heading>
        <InputGroup>
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
                }}
              />
            </InputRightElement>
          )}
        </InputGroup>
      </Stack>
      {loading && <Text textAlign="center"> Loading</Text>}
      {!loading && (
        <SimpleGrid columns={[1, 2, 3, 4]} spacing={5} px="20px">
          {data?.characters?.results.map((character) => (
            <Card character={character} key={character.id} />
          ))}
        </SimpleGrid>
      )}
      {/* {!isBottomNavigation && (
        <Stack direction="row" my="8" align="center" justify="flex-end" pb={4}>
          <Button
            size="xs"
            leftIcon={<FiArrowLeft />}
            variant="ghost"
            alignSelf="flex-end"
            isDisabled={offset === 0}
            onClick={() => {
              setOffset(offset - limit);
            }}
          >
            Previous
          </Button>
          <Button
            size="xs"
            onClick={() => {
              setOffset(offset + limit);
            }}
            isLoading={isLoadingReviews}
            isDisabled={totalPages - offset / limit === 1}
            colorScheme="blue"
            rightIcon={<FiArrowRight />}
            variant="solid"
            alignSelf="flex-end"
          >
            Next
          </Button>
        </Stack>
      )} */}
    </Stack>
  );
};

export default Characters;
