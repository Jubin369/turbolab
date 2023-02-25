import { gql } from "@apollo/client";

const GET_ALL_CHARACTERS = gql`
  query Character($page: Int) {
    characters(page: $page) {
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

const GET_ALL_EPISODES = gql`
  query Episodes($page: Int) {
    episodes(page: $page) {
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

export { GET_ALL_CHARACTERS, GET_ALL_EPISODES };
