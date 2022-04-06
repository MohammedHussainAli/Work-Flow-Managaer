import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WorkFlow } from '../Models/workflow';
import { WorkFlowServiceService } from '../services/work-flow-service.service';

@Component({
  selector: 'app-create-wf',
  templateUrl: './create-wf.component.html',
  styleUrls: ['./create-wf.component.css']
})
export class CreateWfComponent implements OnInit {
  
  formValue !: FormGroup;
  workflowobj : WorkFlow = new WorkFlow();
  // WorkFlowServiceService: any;
  constructor(private formbuilder: FormBuilder, private api : WorkFlowServiceService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      workflowname : [''],
      workflowdescription : [''],
      workflowstatus : ['']
    })
  }
postWorkflowDetails(){
  this.workflowobj.workflowname = this.formValue.value.workflowname;
  this.workflowobj.workflowdescription= this.formValue.value.workflowdescription;
  this.workflowobj.workflowstatus = this.formValue.value.workflowstatus;

 this.api.postWorkflow(this.workflowobj)
 .subscribe(res=>{
   console.log(res);
   alert("Work-Flow added Successfully")
   this.formValue.reset();
 },
   err=>{
     alert("Something Went wrong, please try again")
 })
}
resetWorkflow(){
  this.formValue.reset();
}
}
