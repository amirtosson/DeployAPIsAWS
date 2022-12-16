import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewDatasetComponent } from "./datasets/add-new-dataset/add-new-dataset.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";

const routes: Routes = [
  {
    path: 'newdata', component: AddNewDatasetComponent
  },
  {
    path: '', component: LandingPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
