// Core Modules
import { NgModule, ClassProvider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CdkTableModule } from '@angular/cdk/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// Material UI
import {
  MatToolbarModule,
  MatCardModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  MatListModule,
  MatDividerModule,
  MatChipsModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatGridListModule,
  MatExpansionModule,
  MatAutocompleteModule,
  MatSelectModule,
  MatMenuModule,
  MatStepperModule,
  MatSidenavModule,
  MatBadgeModule,
  MatDialogModule,
  MatTreeModule
} from '@angular/material';

// Rotas
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent} from './app.component';
import {PesquisaPessoaComponent} from './components/pessoa/pesquisa.pessoa/pesquisa.pessoa.component';
import {LoginComponent} from './components/login/login.component';
import { CadastroPessoaComponent } from './components/pessoa/cadastro.pessoa/cadastro.pessoa.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PesquisaPessoaComponent,
    CadastroPessoaComponent
  ],
  imports: [
    //##CORE
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    CdkTableModule,
    FormsModule,
    ReactiveFormsModule,
    //##MATERIAL
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatDividerModule,
    MatChipsModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatExpansionModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatMenuModule,
    MatStepperModule,
    MatSidenavModule,
    MatBadgeModule,
    MatDialogModule,
    //##MATERIAL
    AppRoutingModule //ROTAS
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }