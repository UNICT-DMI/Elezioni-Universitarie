import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrganiateneoComponent } from './organiateneo/organiateneo.component';
import { OrganiDipartimentoComponent } from './organi-dipartimento/organi-dipartimento.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'organi_ateneo', component: OrganiateneoComponent },
  { path: 'dipartimento',  component: OrganiDipartimentoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

