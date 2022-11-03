import { Component, OnInit } from '@angular/core';
import { Client, ClientService } from 'src/app/services/client.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.scss'],
})
export class ListClientComponent implements OnInit {
  clients: Client[] = [];
  displayClients: Client[] = [];
  displayColumns: string[] = ['name', 'email', 'cpf', 'createdAt', 'actions'];
  filter = '';
  constructor(
    private router: Router,
    public dialog: MatDialog,
    private clientService: ClientService
  ) {}

  ngOnInit(): void {
    this.getClients();
  }
  getClients() {
    this.clientService.get().subscribe({
      next: (clients) => {
        this.clients = clients;
        this.displayClients = clients;
        console.log(this.clients);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
  filterClients() {
    this.displayClients = this.clients.filter((c) =>
      c.name.includes(this.filter)
    );
  }
  handleEdit(id: string) {
    this.router.navigate(['/edit-client'], {
      queryParams: {
        id: id,
      },
    });
  }
  handleAdd() {
    this.router.navigate(['/edit-client']);
  }
  handleDelete(id: string) {
    const dialogRef = this.dialog.open(DeleteDialog);

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.clientService.delete(id).subscribe({
          next: () => {
            this.getClients();
          },
        });
      }
    });
  }
}
@Component({
  selector: 'app-delete-dialog',
  templateUrl: 'delete-dialog.html',
})
export class DeleteDialog {}
