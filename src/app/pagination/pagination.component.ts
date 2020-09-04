import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store'

import { ListGetReposCurrentPageAction, ListShowPreviousPage, ListShowNextPage } from '../ngrx/list/list.actions'
import { ListState } from '../ngrx/list/list.reducer'
import { selectLastQuery, selectCurrentPage, selectRepos } from '../ngrx/list/list.selectors'

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  public reposArrLength
  public selectRepos$ = this.store$.pipe(select(selectRepos)).subscribe(repos => {this.reposArrLength = repos.length})

  public currentPage
  public selectCurrentPage$ = this.store$.pipe(select(selectCurrentPage)).subscribe(number => {this.currentPage = number + 1})

  public lastQuery
  public selectLastQuery$ = this.store$.pipe(select(selectLastQuery)).subscribe(query => {this.lastQuery = query})

  constructor(
    public store$:Store<ListState>
  ) { }

  ngOnInit(): void {
    // this.store$.dispatch(new )
  }

  showNextPage(){
    // this.

    console.log(this.currentPage);
    console.log(this.reposArrLength);
    console.log('yes');
    if (this.currentPage <= this.reposArrLength){
      this.store$.dispatch(new ListShowNextPage())
    } else{
      this.store$.dispatch(new ListGetReposCurrentPageAction(this.lastQuery,this.currentPage));
    }
  }

  showPreviousPage(){
    // console.log();
    this.store$.dispatch(new ListShowPreviousPage())
  }

}
