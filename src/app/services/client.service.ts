import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { City, State } from './location.service';

export interface Client {
  id: string;
  name: string;
  email: string;
  cpf: string;
  createdAt: Date;
  address: string;
  cep: string;
  state: State;
  city: City;
  payment: string;
  creditCardName: string;
  creditCardNumber: string;
  expirationMonth: string;
  expirationYear: string;
  cvv: string;
}

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(private http: HttpClient) {}
  get() {
    return this.http.get<Client[]>(`${environment.apiUrl}/client`);
  }
  getById(id: string) {
    return this.http.get<Client>(`${environment.apiUrl}/client/${id}`);
  }
  delete(id: string) {
    return this.http.delete<boolean>(`${environment.apiUrl}/client/${id}`);
  }
  post(client: Client) {
    return this.http.post<Client>(`${environment.apiUrl}/client`, client);
  }
  put(client: Client) {
    return this.http.put<Client>(
      `${environment.apiUrl}/client/${client.id}`,
      client
    );
  }
}
