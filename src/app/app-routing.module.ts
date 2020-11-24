import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AcceuilComponent} from './acceuil/acceuil.component';
import {AddclientComponent} from './addclient/addclient.component';
import {ModifyclientComponent} from './modifyclient/modifyclient.component';
import {DeleteclientComponent} from './deleteclient/deleteclient.component';
import {AuthentifiactionComponent} from './authentifiaction/authentifiaction.component';


const routes: Routes = [
  {
    path: '', component: AuthentifiactionComponent
  },
  {
    path: 'add', component: AddclientComponent
  },
  {
    path: 'acceuil', component: AcceuilComponent
  },
  {
    path: 'modify/:id', component: ModifyclientComponent
  },
  {
    path: 'delete/:id', component: DeleteclientComponent
  },
  {
    path: 'authentification', component: AuthentifiactionComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
