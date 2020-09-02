import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import {select,Store} from '@ngrx/store'

import {ListGetReposAction,ListGetReposInitAction} from '../ngrx/list/list.actions'
import {listNode,ListState,listReducer} from '../ngrx/list/list.reducer'


@Injectable({ providedIn: 'root' })
export class ListService {

  constructor(
    private http: HttpClient,
    public store$:Store<ListState>
  ) {}

  getRepos(action): Observable<any> {
    if(!action.query){
      return this.http.get<any>('https://api.github.com/search/repositories?q=stars:>0&sort=stars&order=desc&page=1&per_page=3')
    }

    let queryURL = 'https://api.github.com/search/repositories?q='

    if (action.query.searchQueryString) {
      queryURL += action.query.searchQueryString + '+'
    }

    for (let language in action.query.languagesChecked){
      if(action.query.languagesChecked[language]){
        queryURL += `language:${language}+`
      }
    }
    if(action.query.isMirror){
      queryURL += 'mirror:true'
    }
    queryURL += '&sort=stars&order=desc&page=1&per_page=3'

    return this.http.get<any>(queryURL)


  }

  // https://api.github.com/search/repositories?q=topic:ruby+topic:rails
  // 'https://api.github.com/search/repositories?q=tetris+language:python+language:assembly+mirror:true&sort=stars&order=desc&page=1&per_page=3'
}
