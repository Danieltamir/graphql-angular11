export const schemaTypes = `

  ## Queries!
  ## =========================================

  type Query {
    superheroes: [Superhero]
    villains: [Villain]
    getSuperheroById(id: ID!): Superhero
    getVillainById(id: ID!): Villain
  }

  type Superhero {
    id: ID
    name: String
    features: [String]
    comicGroup: ComicGroup
    biggestEnemy: Villain
    peopleSaved: Int
  }

  type Villain {
    id: ID
    name: String
    features: [String]
    comicGroup: ComicGroup
    biggestEnemy: Villain
    peopleKilled: Int
  }

  enum ComicGroup {
    DC
    MARVEL
  }

  enum CharacterSide {
    HERO
    VILLAIN
  }

  ## Mutations!
  ## =========================================

  type Mutation {
    addNewCharacter(input: CharacterInput): MutationResult!
    deleteCharacter(characterId: ID): MutationResult!
  }

  input CharacterInput {
    name: String
    characterSide: CharacterSide
    features: [String]
    comicGroup: ComicGroup
  }

  type MutationResult {
    successful: Boolean
  }
`;
