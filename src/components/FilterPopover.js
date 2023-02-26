import {
  Button,
  FormControl,
  IconButton,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Portal,
  Select,
  Stack,
  StackDivider,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FiFilter, FiX } from "react-icons/fi";

import { useFormik } from "formik";
import React from "react";

export const FilterPopover = ({ onChangeFilters }) => {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const firstFieldRef = React.useRef(null);

  const formik = useFormik({
    initialValues: {
      status: "",
      gender: "",
      species: "",
    },
    onSubmit: (values) => {
      let newValues = {
        status: values.status,
        gender: values.gender,
        species: values.species,
      };
      onChangeFilters(newValues);
    },
    onReset: (values) => {
      let newValues = {
        status: values.status,
        gender: values.gender,
        species: values.species,
      };

      onChangeFilters(newValues);
    },
  });

  return (
    <Popover
      isOpen={isOpen}
      initialFocusRef={firstFieldRef}
      onOpen={onOpen}
      onClose={onClose}
      placement="bottom"
    >
      <PopoverTrigger>
        <Stack direction="row" justify="space-between" alignSelf="start">
          <Text mt="10px">Filter</Text>
          <IconButton
            aria-label="filter-conversations"
            size="md"
            color="gray.500"
            colorScheme="gray"
            rounded="full"
            fontSize="sm"
            icon={<FiFilter />}
            _after={{
              display: formik.dirty ? "flex" : "none",
              width: 3,
              height: 3,
              background: "blue.500",
              position: "absolute",
              right: -0.5,
              top: -0.5,
              boxShadow: "sm",
              content: '""',
              borderRadius: "full",
            }}
          />
        </Stack>
      </PopoverTrigger>

      <Portal>
        <PopoverContent
          as={Stack}
          spacing={1}
          width={400}
          borderRadius="2xl"
          p="10px"
          divider={<StackDivider />}
        >
          <Stack p={4} spacing={2}>
            <Stack flexDir={"row"} justifyContent="space-between">
              <Text fontSize="sm" fontWeight="semibold">
                Filter
              </Text>
              <Button
                size="xs"
                fontSize="xs"
                rightIcon={<FiX />}
                colorScheme="gray"
                variant="ghost"
                onClick={() => {
                  formik.resetForm();
                }}
              >
                Clear
              </Button>
            </Stack>
          </Stack>
          <Stack direction="row" justify="space-between">
            <Text fontSize={"sm"}> Status:</Text>
            <FormControl>
              <Select
                size="sm"
                name="status"
                onChange={(e) => {
                  formik.handleChange(e);
                  formik.submitForm();
                }}
                onBlur={formik.handleBlur}
                value={formik.values.status}
              >
                <option value={""}>All</option>

                <option value={"Alive"}>Alive</option>
                <option value={"Dead"}>Dead</option>
                <option value={"unknown"}>unknown</option>
              </Select>
            </FormControl>
          </Stack>
          <Stack direction="row" justify="space-between">
            <Text fontSize={"sm"}> Gender:</Text>
            <FormControl>
              <Select
                size="sm"
                name="gender"
                onChange={(e) => {
                  formik.handleChange(e);
                  formik.submitForm();
                }}
                onBlur={formik.handleBlur}
                value={formik.values.gender}
              >
                <option value={""}>All</option>

                <option value={"female"}>female</option>
                <option value={"male"}>male</option>
                <option value={"genderless"}>genderless</option>
                <option value={"unknown"}>unknown</option>
              </Select>
            </FormControl>
          </Stack>
          <Stack direction="row" justify="space-between">
            <Text fontSize={"sm"}> Species:</Text>
            <FormControl>
              <Select
                size="sm"
                name="species"
                onChange={(e) => {
                  formik.handleChange(e);
                  formik.submitForm();
                }}
                onBlur={formik.handleBlur}
                value={formik.values.species}
              >
                <option value={""}>All</option>

                <option value={"Human"}>Human</option>
                <option value={"Alien"}>Alien</option>
                <option value={"Humanoid"}>Humanoid</option>
                <option value={"unknown"}>unknown</option>
                <option value={"Poopybutthole"}>Poopybutthole</option>
                <option value={"Mythological Creature"}>
                  Mythological Creature
                </option>
                <option value={"Animal"}>Animal</option>
                <option value={"Robot"}>Robot</option>
                <option value={"Cronenberg"}>Cronenberg</option>
                <option value={"Disease"}>Disease</option>
              </Select>
            </FormControl>
          </Stack>
        </PopoverContent>
      </Portal>
    </Popover>
  );
};
