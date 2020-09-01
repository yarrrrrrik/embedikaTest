import {Action} from '@ngrx/store'

export enum listActionsType{
  getRepos ='[LIST] getRepos',
  pushRepos = '[LIST] pushRepos'
}

export class ListGetReposAction implements Action{
  readonly type = listActionsType.getRepos
}

export class ListPushReposAction implements Action{
  readonly type = listActionsType.pushRepos
  constructor(public repos){}
}

export type ListActions = ListGetReposAction | ListPushReposAction
