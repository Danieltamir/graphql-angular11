import {Injectable} from '@angular/core';
import {Apollo} from "apollo-angular";
import {Observable} from "rxjs/index";
import {GET_ALL_CHARACTERS_QUERY, GET_CHARACTER_QUERY} from "../constants/queries";

@Injectable({
  providedIn: 'root'
})

export class SuperheroService {

  constructor(private apollo: Apollo) {
  }


}
