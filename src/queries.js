import { gql } from "@apollo/client";

const GET_ALL_CHARACTERS = gql`
  query Character(
    $page: Int
    $name: String
    $status: String
    $gender: String
    $species: String
  ) {
    characters(
      page: $page
      filter: {
        name: $name
        status: $status
        gender: $gender
        species: $species
      }
    ) {
      info {
        count
        pages
      }
      results {
        id
        name
        image
        status
        species
        location {
          name
        }
      }
    }
  }
`;

const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      image
      name
      status
      species
      origin {
        name
      }
      location {
        name
      }
      gender
      episode {
        id
        name
        episode
      }
    }
  }
`;

const GET_ALL_EPISODES = gql`
  query Episodes($page: Int, $name: String) {
    episodes(page: $page, filter: { name: $name }) {
      info {
        count
        pages
      }
      results {
        id
        name
        air_date
        episode
      }
    }
  }
`;

const GET_EPISODE = gql`
  query GetEpisode($id: ID!) {
    episode(id: $id) {
      id
      name
      air_date
      episode
      characters {
        id
        name
      }
    }
  }
`;

export { GET_ALL_CHARACTERS, GET_CHARACTER, GET_ALL_EPISODES, GET_EPISODE };
