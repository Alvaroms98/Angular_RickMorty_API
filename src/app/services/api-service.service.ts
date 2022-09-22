import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RickPage } from '../models/rick-page.model';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  baseUrl: string = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) {}

  getInfo() : Observable<RickPage> {
    return this.http.get<RickPage>(`${this.baseUrl}/character`);
  }

  getCharacters(page: number): Observable<RickPage> {
    return this.http.get<RickPage>(`${this.baseUrl}/character?page=${page}`)
  }
}
