import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkflowDetails } from '../Models/workflow-details';
import { WorkflowFind } from '../Models/workflow-find';
import { UpdateService } from '../services/update.service';
import { FormBuilder, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-update-wf',
  templateUrl: './update-wf.component.html',
  styleUrls: ['./update-wf.component.css']
})
export class UpdateWfComponent implements OnInit {
 

  constructor(private formbuilder: FormBuilder, public route:ActivatedRoute, public router:Router, public ups:UpdateService) { }

  val:any;
  formValue !: FormGroup;
  workflows:WorkflowDetails[] =[];
  workflow!: WorkflowFind;

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      workflowname : [''],
      workflowdescription : [''],
      workflowstatus : ['']
    })
    let sub = this.route.params.subscribe(params => {
      this.val = params['id'];
    })
    
    this.ups.getUpdateWorkflowDetails(this.val).subscribe(data=> {
      this.workflow = data;
    })
    
  }

  update(){
    this.ups.updateWorkflowDetails(this.workflow).subscribe(data=>{
    });
    this.getWorkflowDetails();
    alert("Work-Flow Updated Successfully")
    this.router.navigate(['wf-list']);
  }

  getWorkflowDetails(){
    this.ups.getWorkflowDetails().subscribe((res) => {
      this.workflows = res;
    });
  }



}
