import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Rota1Component } from './rota/rota1/rota1.component';
import { Rota2Component } from './rota/rota2/rota2.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: AppComponent },
    { path: 'rota1', component: Rota1Component },
    { path: 'rota1/detalhe', component: Rota1Component },
    { path: 'rota1/detalhe/:id', component: Rota1Component },
    { path: 'rota2', component: Rota2Component },
    { path: 'rota2/detalhe', component: Rota2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
