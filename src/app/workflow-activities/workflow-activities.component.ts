import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { elementAt, subscribeOn } from 'rxjs';
import { WorkflowService } from '../services/workflow.service';
//import swal from 'sweetalert';
import Swal from 'sweetalert2'
import { Category } from '../Models/Category';
import { WorkFlow } from '../Models/work-flow';
import swal from 'sweetalert';

@Component({
  selector: 'app-workflow-activities',
  templateUrl: './workflow-activities.component.html',
  styleUrls: ['./workflow-activities.component.css']
})
export class WorkflowActivitiesComponent implements OnInit {

  radio:any;
  status!:any;
  workflows: WorkFlow[]=[];
  categorys: Category[] = [];
  tempWorkFlow!: Category[];
  constructor(private workflowservice:WorkflowService, private router:Router) { }

  ngOnInit(): void {
    this.getCategory();
    this.radio={filter:null};
    //this.getWorkFlows();
  }

  //Get Category List
  getCategory(){
      this.workflowservice.getCategoryList().subscribe(data=>{
      this.categorys = data;
      this.tempWorkFlow=data;
    })
  }
 
  //Update Category By id
  updateCategory(id: number){
    console.log(id);
    this.router.navigate([`update-category/${id}`]);
  }
 
  //Delete Category
  deleteCategory(id: any, category:any){
       Swal.fire({
        // position: 'top-end',
        title: 'Your Work-Flow will be lost?',
        text:"Once deleted, you won't be able to revert.",
        icon:'warning',
        showConfirmButton: true,
        showCancelButton:true,
        confirmButtonText:'Yes, delete it',
        cancelButtonText:'Cancel'
       }).then((result)=>{
         if(result.value){
          this.workflowservice.deleteCategory(id).subscribe( data => {
              console.log(data);
              this.workflowservice.deleteWorkFlowByCategory(category).subscribe(response =>{
                console.log(response);
                Swal.fire(
                  'Deleted',
                  'Your Work-Flow has been deleted successfully',
                  'success'
                 )
              })
              
            this.getCategory();
            },
            error => {
              console.log(error)
              Swal.fire({
                icon: 'error',
                title: 'Oops',
                text:'Something went wrong, work-flow cant be deleted',
                showConfirmButton: false
              })
            });
         }
         else if(result.dismiss==Swal.DismissReason.cancel){
           Swal.fire(
            'Cancelled',
            'Your Work-Flow is safe',
            'error'
           )
         }
       })
  }

  //Radio filter
  radios(values:any){
    this.categorys=this.tempWorkFlow;
    if(values.target.value=="All"){
      this.categorys=this.tempWorkFlow;
    }
    else{
      console.log(values.target.value);
    this.status=this.categorys.filter(element=> element.categoryStatus==values.target.value);
    console.log(this.status);
    this.categorys=this.status;
    }
  }

  //Set the category Name
  setCategoryName(value:any){
    this.workflowservice.setCategoryName(value);
    this.router.navigate(['/create']);
  }

  //Send Category Name in Assignments Table
  sendCategoryName(value:any){
    this.workflowservice.setCategoryName(value);
    this.router.navigate(['wf-list']);
  }
}

