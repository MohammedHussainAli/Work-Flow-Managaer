import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { WorkFlow } from '../Models/work-flow';
import { WorkflowService } from '../services/workflow.service';
//import swal from 'sweetalert';
import Swal from 'sweetalert2'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-wf',
  templateUrl: './create-wf.component.html',
  styleUrls: ['./create-wf.component.css']
})
export class CreateWfComponent implements OnInit {

  workflows:WorkFlow= new WorkFlow();
  @ViewChild('create') create!:NgForm;
  constructor(private workflowservice: WorkflowService, private router:Router) { }

  ngOnInit(): void {
    this.getCategoryName();
  }

  //Add Assignments in particular Work-Flow(Category)
  addWorkFlow(){
    console.log(this.workflows);
    this.workflowservice.createWorkFlow(this.workflows).subscribe(data =>{
    console.log(data);
    Swal.fire({
      icon: 'success',
      title: 'Assignment added Successfully',
      showConfirmButton: false,
      timer: 1500
    })
    this.router.navigate(['wf-list']);
    },
    error => alert("Something went wrong, please try again.."));

  }

  onSubmit(){
     this.addWorkFlow();
  }

  //Get Category name (Backend table purpose) from Category table
  getCategoryName(){
    this.workflows.category=this.workflowservice.getCategoryName()
    console.log(this.workflows.category);
  }
  
}
