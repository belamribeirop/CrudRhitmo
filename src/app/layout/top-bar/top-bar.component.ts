import { Component, OnInit } from '@angular/core';
interface MenuItem {
  name: string;
  link: string;
}
@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit {
  menuItems: MenuItem[] = [
    { name: 'Lista', link: 'list-client' },
    { name: 'Cadastro', link: 'edit-client' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
