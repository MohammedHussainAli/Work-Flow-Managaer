import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateWfComponent } from './create-wf/create-wf.component';
import { HelpDeskComponent } from './help-desk/help-desk.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { WorkflowListComponent } from './workflow-list/workflow-list.component';

const routes: Routes = [
  {
    component:HomeComponent,
    path:""
  },
  {
    component:WorkflowListComponent,
    path:"wf-list"
  },
  {
    component:CreateWfComponent,
    path:"create"
  },
  {
    component:HelpDeskComponent,
    path:"help-desk"
  },
  {
    component:LoginComponent,
    path:"login"
  },
  {
    component:SignupComponent,
    path:"signup"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
