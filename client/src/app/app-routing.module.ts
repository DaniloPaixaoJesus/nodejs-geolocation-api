import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import {SearchPartnerComponent} from './components/partner/search.partner/search.partner.component';
import {FormPartnerComponent} from './components/partner/form.partner/form.partner.component';
import {LoginComponent} from './components/login/login.component';


const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'partner',
    component: SearchPartnerComponent
  },
  {
    path: 'partner/form',
    component: FormPartnerComponent
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
