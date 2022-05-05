import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryCreateWorkflowComponent } from './category-create-workflow/category-create-workflow.component';
import { CreateWfComponent } from './create-wf/create-wf.component';
import { EditdetailsComponent } from './editdetails/editdetails.component';
import { HelpDeskComponent } from './help-desk/help-desk.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { UpdateWfComponent } from './update-wf/update-wf.component';
import { ViewWfComponent } from './view-wf/view-wf.component';
import { WorkflowActivitiesComponent } from './workflow-activities/workflow-activities.component';
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
  },
  {
    component:UpdateWfComponent,
    path:"update/:id"
  },
  {
    component:ViewWfComponent,
    path:"view/:id"
  },
  {
    component:EditdetailsComponent,
    path:"edit/:id"
  },
  {
    component: WorkflowActivitiesComponent,
    path:"category-list"
  },
  {
    component: CategoryCreateWorkflowComponent,
    path:"create-category"
  },
  {
    component: UpdateCategoryComponent,
    path:"update-category/:id"
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
