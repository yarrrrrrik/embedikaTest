import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class ListService {

  constructor(private http: HttpClient) {}

  getRepos(): Observable<any> {
    return this.http.get<any>('https://api.github.com/search/repositories?q=stars:>0&sort=stars&order=desc&page=1&per_page=3')
  }

}
