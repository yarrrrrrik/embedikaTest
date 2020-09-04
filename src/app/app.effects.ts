import {Injectable} from '@angular/core'
import {Actions,createEffect,ofType} from '@ngrx/effects'
import {listActionsType,ListGetReposInitAction,ListPushReposAction,ListPushReposCurrentPageAction} from './ngrx/list/list.actions'
import {map,mergeMap,switchMap} from 'rxjs/operators'
import {ListService} from './services/list.service'

@Injectable()


export class AppEffects {

  constructor(
  private actions$:Actions,
  private listService:ListService
  ) {}

  repoConstructor(repos){
    class Repo{
      name:string
      size:number
      stargazers_count:number
      constructor(name:string,size:number,stargazers_count:number){
        this.name = name
        this.size = size
        this.stargazers_count = stargazers_count
      }
    }

    return repos.items.map((repo, i) => {
      return new Repo(repo.name,repo.size,repo.stargazers_count)
    });
  }

  loadRepos$ = createEffect(() => this.actions$.pipe(
    ofType(
      listActionsType.getRepos,
      listActionsType.getReposInit,
    ),
    switchMap((action) => this.listService.getRepos(action)
    .pipe(
      map(repos => {
        let reposArr = this.repoConstructor(repos)
        return new ListPushReposAction(reposArr)
      })
     )
  )))

  nextPageLoadRepos$ = createEffect(() => this.actions$.pipe(
    ofType(
      listActionsType.getReposCurrentPage
    ),
    switchMap((action) => this.listService.getNextPageRepos(action)
    .pipe(
      map(repos => {
        let reposArr = this.repoConstructor(repos)
        return new ListPushReposCurrentPageAction(reposArr)
      })
    )
  )))

}
