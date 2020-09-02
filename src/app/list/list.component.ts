import { Component, OnInit } from '@angular/core';
import {ListService} from '../services/list.service'
import {Observable} from 'rxjs'
import {select,Store} from '@ngrx/store'
import {listNode,ListState,listReducer} from '../ngrx/list/list.reducer'
import {ListGetReposInitAction} from '../ngrx/list/list.actions'
import {selectRepos} from '../ngrx/list/list.selectors'

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
    this.store$.dispatch(new ListGetReposInitAction());
  }

  getRepos1(){
    console.log(this.repos)
  }
}
