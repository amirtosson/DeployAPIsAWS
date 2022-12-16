import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './user/login-page/login-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignupPageComponent } from './user/signup-page/signup-page.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { AddNewDatasetComponent } from './datasets/add-new-dataset/add-new-dataset.component';
import { DatasetWorkingPageComponent } from './datasets/dataset-working-page/dataset-working-page.component';
import { FlyingBtnComponent } from './ui-components/flying-btn/flying-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    LandingPageComponent,
    SignupPageComponent,
    UserProfileComponent,
    UserDashboardComponent,
    AddNewDatasetComponent,
    DatasetWorkingPageComponent,
    FlyingBtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
