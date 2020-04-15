import {CharacterModel} from "./character.model";
import {SuperheroModel} from "./superhero.model";

export interface VillainModel extends CharacterModel {
  biggestEnemy: SuperheroModel,
  peopleKilled: number
}
