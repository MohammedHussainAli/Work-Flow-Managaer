import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkFlow } from '../Models/work-flow';
import { WorkflowService } from '../services/workflow.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-editdetails',
  templateUrl: './editdetails.component.html',
  styleUrls: ['./editdetails.component.css']
})
export class EditdetailsComponent implements OnInit {
  
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
        title: 'Assignment Edited Successfully',
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
