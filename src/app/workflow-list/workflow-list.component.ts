import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { WorkFlow } from '../Models/workflow';
import { WorkFlowServiceService } from '../services/work-flow-service.service';
import { WorkflowDetails } from '../Models/workflow-details';
import { UpdateService } from '../services/update.service';

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
    private router:Router, private ups:UpdateService) { }

    columns = ["Work-Flow Name", "Work-Flow Description", "Work-Flow Status"];

    workflow: WorkflowDetails[] = [];

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      workflowname : [''],
      workflowdescription : [''],
      workflowstatus : ['']
    })
    this.getAllWorkflows();

    this.ups.getWorkflowDetails().subscribe((res) => {
      this.workflow = res;
    },
      (err) => {
        console.log("Error occures", err);
      }
    )
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

  // editWorkflow(row:any, ){
  //   this.formValue.controls['workflowname'].setValue(row.workflowname);
  //   this.formValue.controls['workflowdescription'].setValue(row.workflowdescription);
  //   this.formValue.controls['workflowstatus'].setValue(row.workflowstatus);
  //   this.router.navigate(['/update', row]);
  // }
  
  update(id: number) {
    this.router.navigate(['/update', id]);
  }

  view(id: number) {
    this.router.navigate(['/view', id]);
  }

}
