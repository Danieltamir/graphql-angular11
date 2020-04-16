import {Injectable} from '@angular/core';
import {Apollo} from "apollo-angular";
import {Observable} from "rxjs";
import {GET_ALL_CHARACTERS_QUERY} from "../constants/queries";

@Injectable({
  providedIn: 'root'
})
export class CharacterQueriesService {

  constructor(private apollo: Apollo) {
  }

  /**Below you will find the characters queries**/
  /**==========================================**/

  getAllCharacters(): Observable<any> {
    return this.apollo.query({
      query: GET_ALL_CHARACTERS_QUERY,
      fetchPolicy: "no-cache"
    });
  }
}
