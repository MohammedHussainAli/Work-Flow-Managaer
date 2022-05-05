import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkFlow } from '../Models/work-flow';
import { WorkflowService } from '../services/workflow.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-update-wf',
  templateUrl: './update-wf.component.html',
  styleUrls: ['./update-wf.component.css']
})
export class UpdateWfComponent implements OnInit {

  id!:number;
  workflow:WorkFlow=new WorkFlow();
  constructor(private workflowservice:WorkflowService, private activateRoute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];
    this.workflowservice.getWorkFlowById(this.id).subscribe(data =>{
      this.workflow = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.workflowservice.updateWorkFlow(this.id, this.workflow).subscribe( data =>{
      Swal.fire({
        icon: 'success',
        title: 'Assignment Status Updatd Successfully',
        showConfirmButton: false,
        timer: 1500
      })
      //alert("Work-Flow Updatd Successfully");
      this.goToWorkflowList();
    }
    , error => console.log(error));
  }

  goToWorkflowList(){
    this.router.navigate(['/wf-list']);
  }

  
}
