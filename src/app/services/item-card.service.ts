import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

// import { select, Store } from '@ngrx/store'

// import { SaveLastQueryAction } from '../ngrx/list/list.actions'
// import { listNode, ListState, listReducer } from '../ngrx/list/list.reducer'


@Injectable({ providedIn: 'root' })

export class ItemCardService {
  constructor(
    private http: HttpClient,
    // public store$:Store<ListState>
  ) {}

  getRepoDetails(action){
    return this.http.get<any>(action.repoUrl)
  }
}
