// Core Modules
import { NgModule, ClassProvider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CdkTableModule } from '@angular/cdk/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// teste zoom image on IE
import { ImageViewerComponent } from './components/imageviewer/imageviewer.component';
import { ImageViewerModule } from '@hallysonh/ngx-imageviewer';

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
import {SearchPartnerComponent} from './components/partner/search.partner/search.partner.component';
import {LoginComponent} from './components/login/login.component';
import { FormPartnerComponent } from './components/partner/form.partner/form.partner.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchPartnerComponent,
    FormPartnerComponent,

    ImageViewerComponent,
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

    //##IMAGE VIEWER
    ImageViewerModule,
    
    AppRoutingModule //ROTAS
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }