import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { WorkflowListComponent } from './workflow-list/workflow-list.component';
import { CreateWfComponent } from './create-wf/create-wf.component';
import { HelpDeskComponent } from './help-desk/help-desk.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateWfComponent } from './update-wf/update-wf.component';
import { ViewWfComponent } from './view-wf/view-wf.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    HeaderComponent,
    WorkflowListComponent,
    CreateWfComponent,
    HelpDeskComponent,
    LoginComponent,
    SignupComponent,
    UpdateWfComponent,
    ViewWfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
