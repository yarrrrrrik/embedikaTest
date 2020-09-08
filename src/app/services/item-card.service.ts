import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class ItemCardService {
  constructor(
    private http: HttpClient,
  ) {}

  getRepoDetails(action){
    return this.http.get<any>(action.repoUrl)
  }
}
