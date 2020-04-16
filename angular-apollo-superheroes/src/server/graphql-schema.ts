export const schemaTypes = `

  ## Queries!
  ## =========================================

  type Query {
    characters: [Character]
    getCharacterById(id: ID!): Character
  }

  ## Mutations!
  ## =========================================

  type Mutation {
    addNewCharacter(input: CharacterInput): MutationResult!
    deleteCharacter(characterId: ID): MutationResult!
  }

  ## Objects Types!
  ## =========================================

  type Character {
    id: ID
    name: String
    superPowers: [String]
    comicGroup: ComicGroup
    characterType: CharacterType
    biggestRival: Character
    charHistory: CharacterHistory
  }

  union CharacterHistory = VillainHistory | SuperheroHistory

  type VillainHistory {
    peopleKilled: Int
  }

  type SuperheroHistory {
    peopleSaved: Int
  }

  enum ComicGroup {
    DC
    MARVEL
  }

  enum CharacterType {
    HERO
    VILLAIN
  }

  ## Mutations Inputs!
  ## =========================================

  input CharacterInput {
    id: ID
    name: String
    characterType: CharacterType
    features: [String]
    comicGroup: ComicGroup
    biggestRival: CharacterInput
    peopleKilled: Int
    peopleSaved: Int
  }

  type MutationResult {
    successful: Boolean
  }
`;
