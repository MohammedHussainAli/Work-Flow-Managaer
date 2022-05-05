import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { WorkFlow } from '../Models/work-flow';
import { WorkflowService } from '../services/workflow.service';
//import swal from 'sweetalert';
import Swal from 'sweetalert2'
import { NgForm } from '@angular/forms';
import { Category } from '../Models/Category';

@Component({
  selector: 'app-category-create-workflow',
  templateUrl: './category-create-workflow.component.html',
  styleUrls: ['./category-create-workflow.component.css']
})
export class CategoryCreateWorkflowComponent implements OnInit {
  
  disabledCreateButton:boolean=false;
  categoryNamePresent:any;
  category : Category= new Category();
  // workflows:WorkFlow= new WorkFlow();
  @ViewChild('create') create!:NgForm;
  constructor(private workflowservice: WorkflowService, private router:Router) { }

  ngOnInit(): void {
  }

  //Add Category
  addWorkFlow(){
    
    Swal.fire({
      // position: 'top-end',
      title: 'Work-Flow name Cannot be changed, once created.',
      text:"Kindy recheck your Work-Flow name",
      icon:'warning',
      showConfirmButton: true,
      showCancelButton:true,
      confirmButtonText:'Yes, Create it',
      cancelButtonText:'Go Back'
     }).then((result)=>{
       if(result.value){
        this.workflowservice.createCategory(this.category).subscribe(data => {
            console.log(data);
              Swal.fire(
                'Created',
                'Your Work-Flow has been Created Successfully',
                'success'
               ).then((result)=>{
                this.router.navigate(['category-list']);
               })       
            // this.router.navigate(['category-list']);
          },
          error => {
            console.log(error)
            Swal.fire({
              icon: 'error',
              title: 'Oops',
              text:'Something went wrong, work-flow cant be created',
              showConfirmButton: false
            })
          });
       }
       else if(result.dismiss==Swal.DismissReason.cancel){
         Swal.fire(
          'Cancelled',
          'Your Work-Flow has not been Saved',
          'error'
         )
       }
     })
  
  }

  onSubmit(){
     this.addWorkFlow();
  }


  //To validate the WorkFlow name with backend (Not to repeat)
  getCategoryByName(category:any){
    this.disabledCreateButton=false;
    console.log(category.target.value);
    this.categoryNamePresent=category.target.value;
    this.workflowservice.getCategoryListByCategoryName(this.categoryNamePresent).subscribe(data=>{
      console.log(data);
      if(data.length !=0){
        this.disabledCreateButton=true;
        Swal.fire(
          'Error',
          `Work-Flow with name ${this.categoryNamePresent} already exists, type a diffreent Work-Flow Name`,
          'error'
        )
      }
    })
  }
  // createBuutonCheck(){
  //   if(this.disabledCreateButton){
  //     Swal.fire(
  //       'error',
  //       `Work-Flow with name ${this.categoryNamePresent} already exists, type a diffreent Work-Flow Name`
  //     )
  //   }
  // }
  
}
