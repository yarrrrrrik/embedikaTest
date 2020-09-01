import { Component, OnInit } from '@angular/core';
import {ListService} from '../services/list.service'
import {Observable} from 'rxjs'
import {select,Store} from '@ngrx/store'
import {listNode,ListState,listReducer} from '../ngrx/list/list.reducer'
import {ListGetReposAction} from '../ngrx/list/list.actions'
import {selectRepos} from '../ngrx/list/list.selectors'
import {map,mergeMap,tap} from 'rxjs/operators'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public repos:any = []
  public selector$ = this.store$.pipe(select(selectRepos)).subscribe(repos => {this.repos = repos})

  constructor(
    public listService: ListService,
    public store$:Store<ListState>
  ) {
  }

  ngOnInit(): void {
    this.store$.dispatch(new ListGetReposAction());
  }

  getRepos1(){
    console.log(this.repos)
  }
}
