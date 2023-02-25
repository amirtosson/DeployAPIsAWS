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
import { ElectronicLabBookComponent } from './data-features/electronic-lab-book/electronic-lab-book.component';
import { DashboardExperimentsListComponent } from './user/user-dashboard/dashboard-child-pages/dashboard-experiments-list/dashboard-experiments-list.component';


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
    path: ':username/dashboard', component: DashboardHomeComponent
  },
  {
    path: ':username/dashboard/home', component: DashboardHomeComponent
  },
  {
    path: ':username/dashboard/datasetslist', component: DashboardDatasetsListComponent
  },
  {
    path: ':userid/:datasetdoi', component: DatasetWorkingPageComponent
  },
  {
    path: ':userdoi/eln/:elndoi', component: ElectronicLabBookComponent
  },
  {
    path: ':userdoi/exp/experimentslist', component: DashboardExperimentsListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
