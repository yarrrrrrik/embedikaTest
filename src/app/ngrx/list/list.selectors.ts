import {createFeatureSelector,createSelector} from '@ngrx/store'
import {listNode,ListState} from './list.reducer'

export const selectListFeature = createFeatureSelector<ListState>(listNode)

export const selectRepos = createSelector(
  selectListFeature,
  (state:ListState):any => state.repos
)
