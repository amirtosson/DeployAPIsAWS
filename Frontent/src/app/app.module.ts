import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlyingBtnComponent } from './ui-components/flying-btn/flying-btn.component';
import { AddNewDatasetComponent } from "./datasets/add-new-dataset/add-new-dataset.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";

@NgModule({
  declarations: [
    AppComponent,
    FlyingBtnComponent,
    AddNewDatasetComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
