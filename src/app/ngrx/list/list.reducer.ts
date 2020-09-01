import {ListActions,listActionsType} from './list.actions'

export const listNode = 'list'

export interface ListState {
  repos: any[]
}

const initialState:ListState ={
  repos:[],
}

export const listReducer = (state = initialState,action:ListActions) => {
  switch (action.type) {
    case listActionsType.pushRepos:
      return {...state,repos:action.repos}
    default:
      return state
  }

}
