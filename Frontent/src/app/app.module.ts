import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuillModule } from 'ngx-quill'
import { NgxChartsModule }from '@swimlane/ngx-charts';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

import { FlyingBtnComponent } from './ui-components/flying-btn/flying-btn.component';
import { AddNewDatasetComponent } from "./datasets/add-new-dataset/add-new-dataset.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { UserLoginComponent } from './user/user-login/user-login.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { UserprofileComponent } from './user/userprofile/userprofile.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { SideBarComponent } from './ui-components/side-bar/side-bar.component';
import { DashboardHomeComponent } from './user/user-dashboard/dashboard-child-pages/dashboard-home/dashboard-home/dashboard-home.component';
import { SearchPipe } from "./pipes/search-eln.pipe";
import { SearchDatasetsPipe } from "./pipes/search-datasets.pipe";


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardDatasetsListComponent } from './user/user-dashboard/dashboard-child-pages/dashboard-datasets-list/dashboard-datasets-list.component';
import { DatasetWorkingPageComponent } from "./datasets/dataset-working-page/dataset-working-page.component";
import { ElectronicLabBookComponent } from './data-features/electronic-lab-book/electronic-lab-book.component';
import { AuxiliaryFilesComponent } from './data-features/auxiliary-files/auxiliary-files.component';
import { DashboardExperimentsListComponent } from './user/user-dashboard/dashboard-child-pages/dashboard-experiments-list/dashboard-experiments-list.component';
import { SpinnerComponent } from './ui-components/spinner/spinner.component';
import { ChatComponent } from './ui-components/chat/chat.component';
import { CodeSnippetComponent } from './data-features/code-snippet/code-snippet.component';



@NgModule({
  declarations: [
    AppComponent,
    FlyingBtnComponent,
    AddNewDatasetComponent,
    LandingPageComponent,
    UserLoginComponent,
    SignUpComponent,
    UserprofileComponent,
    UserDashboardComponent,
    SideBarComponent,
    DashboardHomeComponent,
    DashboardDatasetsListComponent,
    DatasetWorkingPageComponent,
    ElectronicLabBookComponent,
    AuxiliaryFilesComponent,
    DashboardExperimentsListComponent,
    SpinnerComponent,
    SearchPipe,
    SearchDatasetsPipe,
    ChatComponent,
    CodeSnippetComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    QuillModule.forRoot(), 
    BrowserAnimationsModule,
    MatToolbarModule,
    NgxChartsModule,
    FormsModule,
    HighlightModule
  ],
  providers: [{
    provide: HIGHLIGHT_OPTIONS,
    useValue: {
      fullLibraryLoader: () => import('highlight.js')
    }
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
