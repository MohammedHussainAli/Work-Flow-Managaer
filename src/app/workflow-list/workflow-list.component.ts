import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { WorkFlow } from '../Models/workflow';
import { WorkFlowServiceService } from '../services/work-flow-service.service';

@Component({
  selector: 'app-workflow-list',
  templateUrl: './workflow-list.component.html',
  styleUrls: ['./workflow-list.component.css']
})
export class WorkflowListComponent implements OnInit {
  formValue !: FormGroup;
  workflowobj : WorkFlow = new WorkFlow();
  workflowdata !: any;

  constructor(private formbuilder: FormBuilder, private api : WorkFlowServiceService,
    private router:Router) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      workflowname : [''],
      workflowdescription : [''],
      workflowstatus : ['']
    })
    this.getAllWorkflows();
  }

  getAllWorkflows(){
     this.api.getWorkflow()
     .subscribe(res=>{
       this.workflowdata = res;
     })
  }
  deleteWorkflow(row : any){
    this.api.deleteWorkflow(row.id)
    .subscribe(res=>{
      alert("Work-Flow deleted Successfully")
      this.getAllWorkflows();
    })
  }
  editWorkflow(row:any){
    this.formValue.controls['workflowname'].setValue(row.workflowname);
    this.formValue.controls['workflowdescription'].setValue(row.workflowdescription);
    this.formValue.controls['workflowstatus'].setValue(row.workflowstatus);
  }
}
