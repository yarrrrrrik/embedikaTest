import { Component, OnInit } from '@angular/core';
import {select,Store} from '@ngrx/store'
import {ListGetReposAction,ListGetReposInitAction} from '../ngrx/list/list.actions'
import {listNode,ListState,listReducer} from '../ngrx/list/list.reducer'

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  constructor(
    public store$:Store<ListState>
  ) { }

  ngOnInit(): void {
  }

  query:any = {
    searchQueryString:'',
    languagesChecked:{
      python:false,
      javascript:false,
      java:false,
      php:false,
      assembly:false,
    },
    isMirror:false
  }

  get(){
    let query = this.query
    this.store$.dispatch(new ListGetReposAction(query));
  }
  show(){
    console.log(this.query)
  }
  init(){
    this.store$.dispatch(new ListGetReposInitAction())
  }


}
