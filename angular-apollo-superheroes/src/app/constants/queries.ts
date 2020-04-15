import gql from "graphql-tag";

//Queries

export const CHARACTERS_SHARED_INFO = `
      id
      name
      features
      comicGroup
      biggestEnemy {
        name
      }
`;

export const GET_ALL_SUPERHEROES_QUERY = gql`
  query superheroes {
    superheroes {
      ${CHARACTERS_SHARED_INFO}
      peopleSaved
    }
  }
`;

export const GET_ALL_VILLAINS_QUERY = gql`
  query villains {
    villains {
      ${CHARACTERS_SHARED_INFO}
      peopleKilled
    }
  }
`;

export const GET_SUPERHERO_QUERY = gql`
  query getSuperheroById($superheroId: ID!) {
    getSuperheroById(id: $superheroId) {
      ${CHARACTERS_SHARED_INFO}
      peopleSaved
    }
  }
`;

export const GET_VILLAIN_QUERY = gql`
  query getVillainById($villainId: ID!) {
    getVillainById(id: $villainId) {
      ${CHARACTERS_SHARED_INFO}
      peopleKilled
    }
  }
`;
