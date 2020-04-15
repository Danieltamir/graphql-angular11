export interface CharacterModel {
  id: string
  name?: string
  features?: [string]
  comicGroup?: ComicGroup
  characterSide?: CharacterSide
}

export enum ComicGroup {
  DC = "DC",
  MARVEL = "MARVEL"
}

export enum CharacterSide {
  HERO = "HERO",
  VILLAIN = "VILLAIN"
}
