import {Action} from '@ngrx/store'

export enum listActionsType{
  getReposInit ='[LIST] getReposInit',
  getRepos ='[LIST] getRepos',
  pushRepos = '[LIST] pushRepos',
  saveLastQuery = '[LIST] saveLastQuery'
}

export class ListGetReposInitAction implements Action{
  readonly type = listActionsType.getReposInit
}

export class ListGetReposAction implements Action{
  readonly type = listActionsType.getRepos
  constructor(public query){}
}


export class ListPushReposAction implements Action{
  readonly type = listActionsType.pushRepos
  constructor(public repos){}
}

export class SaveLastQuery implements Action{
  readonly type = listActionsType.saveLastQuery
  constructor(public lastQuery){}
}

export type ListActions = ListGetReposInitAction | ListGetReposAction | ListPushReposAction | SaveLastQuery
