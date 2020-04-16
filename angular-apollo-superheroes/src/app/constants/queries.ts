import gql from "graphql-tag";

//Queries

export const GET_ALL_CHARACTERS_QUERY = gql`
  query characters {
    characters {
      id
      name
      comicGroup
      characterType
    }
  }
`;
