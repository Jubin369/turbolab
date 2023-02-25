import React from "react";
import {
  Box,
  Button,
  chakra,
  Flex,
  HStack,
  IconButton,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const NavMobileLink = ({ children, path }) => {
  return (
    <Box
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
    >
      <a href={path}>{children}</a>
    </Box>
  );
};

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <chakra.header id="header">
      <Flex
        w="100%"
        px="6"
        py="5"
        align="center"
        justify="space-between"
        backgroundColor="yellow"
        color="black"
      >
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <Text>Rick and Morty GraphQL App</Text>

        <HStack as="nav" spacing="5" display={{ base: "none", md: "flex" }}>
          <a href="/">
            <Button variant="nav"> Characters </Button>
          </a>

          <a href="/episodes">
            <Button variant="nav"> Episodes </Button>
          </a>
        </HStack>
      </Flex>
      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            <NavMobileLink key="characters" path="/">
              Characters
            </NavMobileLink>
            <NavMobileLink key="episodes" path="/episodes">
              Episodes
            </NavMobileLink>
          </Stack>
        </Box>
      ) : null}
    </chakra.header>
  );
};

export default Navbar;
