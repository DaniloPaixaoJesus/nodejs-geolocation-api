import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import {PesquisaPessoaComponent} from './components/pessoa/pesquisa.pessoa/pesquisa.pessoa.component';
import {CadastroPessoaComponent} from './components/pessoa/cadastro.pessoa/cadastro.pessoa.component';
import {LoginComponent} from './components/login/login.component';


const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'pessoa',
    component: PesquisaPessoaComponent
  },
  {
    path: 'pessoa/cadastro',
    component: CadastroPessoaComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ],
  providers: []
})

export class AppRoutingModule { }
