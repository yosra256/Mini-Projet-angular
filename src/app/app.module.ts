import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AddclientComponent } from './addclient/addclient.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ModifyclientComponent } from './modifyclient/modifyclient.component';
import { DeleteclientComponent } from './deleteclient/deleteclient.component';
import { FilsComponent } from './fils/fils.component';
import { AuthentifiactionComponent } from './authentifiaction/authentifiaction.component';
import { RecherchePipe } from './recherche.pipe';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    AddclientComponent,
    ModifyclientComponent,
    DeleteclientComponent,
    FilsComponent,
    AuthentifiactionComponent,
    RecherchePipe
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
      NgxPaginationModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
