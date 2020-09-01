import{
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store'
import {environment} from '../../environments/environment'

import {listNode,ListState,listReducer} from './list/list.reducer'


// import {addressStoryNode,AddressStoryState,addressStoryReducer} from './address-story/addressStory.reducer'

export interface State{
  [listNode]:ListState
}
// let state{
//   items:[[1,2,3],[4,5,6]]
// }
// dispatch(payload(i))
export const reducers:ActionReducerMap<State> = {
  [listNode]:listReducer
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : []
