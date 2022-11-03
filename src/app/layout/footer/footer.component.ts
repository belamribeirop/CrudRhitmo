import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  name = 'Isabela Ribeiro';
  year = '2022';

  constructor() {}

  ngOnInit(): void {}
}
