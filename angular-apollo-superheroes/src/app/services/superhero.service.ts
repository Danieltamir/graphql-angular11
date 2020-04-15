import {Injectable} from '@angular/core';
import {Apollo} from "apollo-angular";
import {Observable} from "rxjs/index";
import {GET_ALL_SUPERHEROES_QUERY, GET_SUPERHERO_QUERY} from "../constants/queries";
import {SuperheroModel} from "../models/superhero.model";

@Injectable({
  providedIn: 'root'
})

export class SuperheroService {

  constructor(private apollo: Apollo) {
  }

  /**Below you will find the characters queries**/
  /**==========================================**/

  getAllSuperheroes(): Observable<any> {
    return this.apollo.query({
      query: GET_ALL_SUPERHEROES_QUERY
    });
  }

  getSuperheroById(superheroId): Observable<any> {
    return this.apollo.query({
      query: GET_SUPERHERO_QUERY,
      variables: {superheroId: superheroId}
    });
  }
}
