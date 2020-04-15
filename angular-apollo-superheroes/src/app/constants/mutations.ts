import gql from "graphql-tag";


export const addCharacterMutation = gql`
  mutation addNewCharacter($character: CharacterInput) {
    addNewCharacter(input: $character) {
      successful
    }
  }
`;

export const deleteCharacterMutation = gql`
  mutation deleteCharacter($characterId: ID!) {
    deleteCharacter(characterId: $characterId) {
      successful
    }
  }
`;
