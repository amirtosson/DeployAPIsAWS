import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewDatasetComponent } from "./datasets/add-new-dataset/add-new-dataset.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { UserLoginComponent } from './user/user-login/user-login.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { UserprofileComponent } from './user/userprofile/userprofile.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { DashboardHomeComponent } from './user/user-dashboard/dashboard-child-pages/dashboard-home/dashboard-home/dashboard-home.component';
import { DashboardDatasetsListComponent } from './user/user-dashboard/dashboard-child-pages/dashboard-datasets-list/dashboard-datasets-list.component';
import { DatasetWorkingPageComponent } from "./datasets/dataset-working-page/dataset-working-page.component";


const routes: Routes = [
  {
    path: ':username/newdata', component: AddNewDatasetComponent
  },
  {
    path: '', component: LandingPageComponent
  },
  {
    path: 'login', component: UserLoginComponent
  },
  {
    path: 'signup', component: SignUpComponent
  },
  {
    path: 'userprofile/:username', component: UserprofileComponent
  },
  {
    path: ':username/dashboard', component: UserDashboardComponent
  },
  {
    path: ':username/dashboard/home', component: UserDashboardComponent
  },
  {
    path: ':username/dashboard/datasetslist', component: DashboardDatasetsListComponent
  },
  {
    path: ':userid/:datasetdoi', component: DatasetWorkingPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
