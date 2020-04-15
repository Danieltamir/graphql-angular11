import {CharacterModel} from "./character.model";
import {VillainModel} from "./villain.model";

export interface SuperheroModel extends CharacterModel {
  biggestEnemy?: VillainModel,
  peopleSaved?: number
}
