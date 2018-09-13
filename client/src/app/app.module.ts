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

import { CustomToolBarComponent } from './components/custom-toolbar/custom.toolbar.component';

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

import {FlexLayoutModule} from '@angular/flex-layout';

// Rotas
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {SearchDriverComponent} from './components/driver/search.driver/search.driver.component';
import { FormDriverComponent } from './components/driver/form.driver/form.driver.component';

import {SearchVehicleComponent} from './components/vehicle/search.vehicle/search.vehicle.component';
import { FormVehicleComponent } from './components/vehicle/form.vehicle/form.vehicle.component';

import {SearchMapComponent} from './components/map/search.map/search.map.component';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchDriverComponent,
    FormDriverComponent,
    SearchVehicleComponent,
    FormVehicleComponent,
    SearchMapComponent,
    ImageViewerComponent,
    CustomToolBarComponent
  ],
  imports: [
    // ##CORE
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    CdkTableModule,
    FormsModule,
    ReactiveFormsModule,
    // ##MATERIAL
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
    FlexLayoutModule,
    // ##MATERIAL

    // ##IMAGE VIEWER
    ImageViewerModule,

    // ## MAP COMPONENT
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDxITfICi9qrSzx1d4TQH_fK_nq0oZraRA'
    }),

    AppRoutingModule // ROTAS
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
