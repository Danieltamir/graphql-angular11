import { Injectable } from '@angular/core';
import {Apollo} from "apollo-angular";
import {addCharacterMutation, deleteCharacterMutation} from "../constants/mutations";

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private apollo: Apollo) { }


  /**Below you will find the characters mutations**/
  /**==========================================**/

  addNewCharacter(character: any) {
    return this.apollo.mutate({
      mutation: addCharacterMutation,
      variables: {
        character: character
      }
    });
  }

  deleteCharacter(characterId: string) {
    return this.apollo.mutate({
      mutation: deleteCharacterMutation,
      variables: {
        characterId: characterId
      }
    })
  }
}
