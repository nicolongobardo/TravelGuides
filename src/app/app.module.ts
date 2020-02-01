import { ListsComponent } from './components/lists/lists.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import 'hammerjs';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppMaterialModule } from './app.material.module';
import { AppComponent, DialogContentComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CityDetailsComponent } from './components/city-details/city-details.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppRoutingModule,
    MatAutocompleteModule,
    ReactiveFormsModule

  ],
  declarations: [AppComponent, DialogContentComponent, HomepageComponent, ListsComponent, CityDetailsComponent],
  entryComponents: [DialogContentComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
