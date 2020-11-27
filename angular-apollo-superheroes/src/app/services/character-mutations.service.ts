import {Injectable} from '@angular/core';
import {Apollo} from "apollo-angular";
import {addCharacterMutation, deleteCharacterMutation} from "../constants/mutations";
import {CharacterModel, CharacterType} from "../models/character.model";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CharacterMutationsService {

  public updateCharacter$ = new Subject<CharacterModel>();

  constructor(private apollo: Apollo) {
  }


  /**Below you will find the characters mutations**/
  /**==========================================**/

  addNewCharacter(character: any) {
    return this.apollo.mutate({
      mutation: addCharacterMutation,
      variables: {
        character: this.arrangeCharacter(character)
      }
    });
  }

  deleteCharacter(characterId: string) {
    return this.apollo.mutate({
      mutation: deleteCharacterMutation,
      variables: {
        characterId
      }
    });
  }

  private arrangeCharacter(character: CharacterModel) {
    return {
      name: character.name,
      characterType: character.characterType,
      features: character.features ? character.features.toString().split(',') : null,
      comicGroup: character.comicGroup
    };
  }
}
