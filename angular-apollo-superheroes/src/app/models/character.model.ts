export interface CharacterModel {
  id: string
  name?: string
  features?: [string]
  comicGroup?: ComicGroup
  characterType?: CharacterType
  biggestRival?: CharacterModel,
  charHistory: CharacterHistory,
}

export interface CharacterHistory {
  peopleSaved?: number
  peopleKilled?: number
}

export enum ComicGroup {
  DC = "DC",
  MARVEL = "MARVEL"
}

export enum CharacterType {
  HERO = "HERO",
  VILLAIN = "VILLAIN"
}
