import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface State {
  nome: string;
  id: number;
  sigla: string;
}
export interface City {
  nome: string;
  id: number;
}

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  constructor(private http: HttpClient) {}

  getStates() {
    return this.http.get<State[]>(
      'https://servicodados.ibge.gov.br/api/v1/localidades/estados'
    );
  }
  getCities(uf: string) {
    return this.http.get<
      City[]
    >(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios
`);
  }
}
