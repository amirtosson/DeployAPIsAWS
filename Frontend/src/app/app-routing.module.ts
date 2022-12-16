import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './user/login-page/login-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignupPageComponent } from './user/signup-page/signup-page.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { AddNewDatasetComponent } from './datasets/add-new-dataset/add-new-dataset.component';
import { DatasetWorkingPageComponent } from './datasets/dataset-working-page/dataset-working-page.component';


const routes: Routes = 
[
  {
    path: 'login', component: LoginPageComponent
  },
  {
    path: 'home', component: LandingPageComponent
  },
  {
      path: '', redirectTo: '/home', pathMatch: 'full',
  },
  {
    path: 'signup', component: SignupPageComponent
  },
  {
    path: 'userprofile/:username', component: UserProfileComponent
  },
  {
    path: 'userdashboard/:username', component: UserDashboardComponent
  },
  {
    path: 'newdataset', component: AddNewDatasetComponent
  },
  {
    path: 'dataset/:doi', component: DatasetWorkingPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
