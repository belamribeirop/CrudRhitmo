import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  DeleteDialog,
  ListClientComponent,
} from './client/list-client/list-client.component';
import { EditClientComponent } from './client/edit-client/edit-client.component';
import { FooterComponent } from './layout/footer/footer.component';
import { TopBarComponent } from './layout/top-bar/top-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { CdkTableModule } from '@angular/cdk/table';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogModule } from '@angular/cdk/dialog';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    AppComponent,
    ListClientComponent,
    EditClientComponent,
    FooterComponent,
    TopBarComponent,
    DeleteDialog,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatTableModule,
    HttpClientModule,
    CdkTableModule,
    MatRadioModule,
    MatButtonModule,
    MatDialogModule,
    DialogModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
