import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private apiUrl = 'https://rickandmortyapi.com/api/';
  private allRequest = `${this.apiUrl}character`;

  constructor(private http: HttpClient) {}

  getCharactersPaginator = (page) =>
    this.http.get(`${this.allRequest}?page=${page}`);
}
