export interface CharacterModel {
  id: string
  name?: string
  age?: number
  features?: [string]
  comicGroup?: ComicGroup
  characterType?: CharacterType
  biggestRival?: CharacterModel,
}

export enum ComicGroup {
  DC = "DC",
  MARVEL = "MARVEL"
}

export enum CharacterType {
  HERO = "HERO",
  VILLAIN = "VILLAIN"
}
