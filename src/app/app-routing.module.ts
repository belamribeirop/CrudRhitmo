import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditClientComponent } from './client/edit-client/edit-client.component';
import { ListClientComponent } from './client/list-client/list-client.component';

const routes: Routes = [
  { path: '', redirectTo: 'list-client', pathMatch: 'full' },
  { path: 'list-client', component: ListClientComponent },
  { path: 'edit-client', component: EditClientComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
