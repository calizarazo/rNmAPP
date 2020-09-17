import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  //definición de URL base
  private apiUrl = 'https://rickandmortyapi.com/api/';
  private allRequest = `${this.apiUrl}character`;

  constructor(private http: HttpClient) {}

  //servicio que retorna todos los personajes
  getCharactersPaginator = (page) =>
    this.http.get(`${this.allRequest}?page=${page}`);

  //servicio generico para solicitudes GET
  GET = (url) => this.http.get(`${url}`);
}
