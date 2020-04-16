import {Injectable} from '@angular/core';
import {Apollo} from "apollo-angular";
import {Observable} from "rxjs/index";
import {GET_ALL_VILLAINS_QUERY, GET_CHARACTER_QUERY} from "../constants/queries";

@Injectable({
  providedIn: 'root'
})

export class VillainService {

  constructor(private apollo: Apollo) {
  }

  getAllVillains(): Observable<any> {
    return this.apollo.query({
      query: GET_ALL_VILLAINS_QUERY
    });
  }

  getVillainById(villainId): Observable<any> {
    return this.apollo.query({
      query: GET_CHARACTER_QUERY,
      variables: {villainId: villainId}
    });
  }
}
