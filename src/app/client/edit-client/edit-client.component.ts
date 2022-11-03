import {
  City,
  LocationService,
  State,
} from './../../services/location.service';
import { Client, ClientService } from 'src/app/services/client.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.scss'],
})
export class EditClientComponent implements OnInit {
  cities: City[] = [];
  states: State[] = [];
  months: string[] = this.generateSeqArray(12, 1);
  years: string[] = this.generateSeqArray(30, 2022);
  id = '';

  generateSeqArray(size: number, first: number) {
    const array: string[] = [];
    let end = size + first;
    for (let i = first; i <= end; i++) {
      array.push(i.toString());
    }
    return array;
  }

  clientForm = this.fb.group({
    id: [''],
    createdAt: [new Date()],
    name: ['', [Validators.required]],
    cpf: [
      '',
      [Validators.required, Validators.minLength(11), Validators.maxLength(11)],
    ],
    email: ['', [Validators.required, Validators.email]],
    address: ['', [Validators.required]],
    cep: [
      '',
      [Validators.required, Validators.minLength(8), Validators.maxLength(8)],
    ],
    state: [{} as State, [Validators.required]],
    city: [{} as City, [Validators.required]],
    payment: ['1', [Validators.required]],
    creditCardName: ['', [Validators.required]],
    creditCardNumber: [
      '',
      [Validators.required, Validators.minLength(16), Validators.maxLength(16)],
    ],
    expirationMonth: ['', [Validators.required]],
    expirationYear: ['', [Validators.required]],
    cvv: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(3)],
    ],
  });
  //
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private clientService: ClientService,
    private locationService: LocationService
  ) {}

  ngOnInit(): void {
    this.getStates();
    this.route.queryParams.subscribe((params) => {
      if (params['id']) {
        this.id = params['id'];
        this.getClient(this.id);
      }
    });
  }
  getClient(id: string) {
    this.clientService.getById(id).subscribe({
      next: (client) => {
        const state: State = {
          nome: client.state.nome,
          id: client.state.id,
          sigla: client.state.sigla,
        };
        this.clientForm.patchValue({ ...client, state: state });
        this.getCities();
      },
      error: () => {},
    });
  }
  getStates() {
    this.locationService.getStates().subscribe({
      next: (states) => {
        this.states = states;
      },
      error: () => {},
    });
  }
  getCities() {
    let uf = this.clientForm.value?.state?.sigla;
    if (uf) {
      this.locationService.getCities(uf).subscribe({
        next: (cities) => {
          this.cities = cities;
        },
        error: () => {},
      });
    }
  }
  isFormValid() {
    if (this.clientForm.value.payment === '2') {
      return (
        this.clientForm.controls.name.valid &&
        this.clientForm.controls.cpf.valid &&
        this.clientForm.controls.email.valid &&
        this.clientForm.controls.address.valid &&
        this.clientForm.controls.state.valid &&
        this.clientForm.controls.city.valid &&
        this.clientForm.controls.cep.valid
      );
    } else {
      return this.clientForm.valid;
    }
  }
  compareStates(p1: State, p2: State): boolean {
    if (p1 && p2) {
      return p1.id === p2.id;
    }
    return false;
  }
  compareCities(p1: City, p2: City): boolean {
    if (p1 && p2) {
      return p1.id === p2.id;
    }
    return false;
  }
  handleSubmit() {
    const client: Client = this.clientForm.value as Client;
    if (this.id) {
      this.clientService.put(client).subscribe({
        next: () => {
          this.router.navigate(['']);
        },
        error: () => {},
      });
    } else {
      client.createdAt = new Date();
      this.clientService.post(client).subscribe({
        next: () => {
          this.router.navigate(['']);
        },
        error: () => {},
      });
    }
  }
}
