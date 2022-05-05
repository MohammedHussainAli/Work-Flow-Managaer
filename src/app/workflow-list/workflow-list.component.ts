import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { elementAt } from 'rxjs';
import { WorkFlow } from '../Models/work-flow';
import { WorkflowService } from '../services/workflow.service';
//import swal from 'sweetalert';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-workflow-list',
  templateUrl: './workflow-list.component.html',
  styleUrls: ['./workflow-list.component.css']
})
export class WorkflowListComponent implements OnInit {
 
  radio:any;
  status!:any;
  workflow:WorkFlow= new WorkFlow();
  workflows: WorkFlow[] = [];
  tempWorkFlow!: WorkFlow[];
  categoryName: any;
  constructor(private workflowservice:WorkflowService, private router:Router) { }

  ngOnInit(): void {
    this.getCategoryName();
    this.getWorkFlows();
    this.radio={filter:null};
    //this.getWorkFlows();
  }
 

   getWorkFlows(){
     this.categoryName=this.workflowservice.getCategoryName();
    this.workflowservice.getWorkFlowListByCategory(this.categoryName).subscribe(data=>{
      this.workflows = data;
      this.tempWorkFlow=data;
     this.status= this.workflows.find(element=> element.workFlowStatus=="In-Progress");
     //this.workflowservice.status=this.status;
    })
    
  }
  //element.workFlowStatus=="Completed" ||

  checkStatus(){
   // console.log(this.status)
    if(this.status==undefined){
      return false;
    }
    else{
      return true;
    }
  }
  update(id:number){
   //this.router.navigate(['update', id]);
   if(this.checkStatus()){
    const status= this.workflows.find(element => element.id==id);
    if(status?.workFlowStatus=="In-Progress"){
     this.router.navigate(['update', id]);
    }
    else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...You have a Incomplete Assignment',
        text: 'Complete your Assignment which is IN-PROGRESS and Update the status as Completed to Update further...!'
      })
    }
   }
   else{
    this.router.navigate(['update', id]);
   }
   
  }

  editWorkFlow(id: number){
    this.router.navigate(['edit', id]);
  }

  workflowDetails(id: number){
    this.router.navigate(['view', id]);
  }
  deleteworkflow(id: number){
    Swal.fire({
      // position: 'top-end',
      title: 'Your Assignment will be lost?',
      text:"Once deleted, you won't be able to revert.",
      icon:'warning',
      showConfirmButton: true,
      showCancelButton:true,
      confirmButtonText:'Yes, delete it',
      cancelButtonText:'Cancel'
     }).then((result)=>{
       if(result.value){
        this.workflowservice.deleteWorkFlow(id).subscribe( data =>{
            console.log(data);
              Swal.fire(
                'Deleted',
                'Your Assignment been deleted successfully',
                'success'
               )
           this.getWorkFlows();
          },
          error => {
            console.log(error)
            Swal.fire({
              icon: 'error',
              title: 'Oops',
              text:'Something went wrong, Assignment cant be deleted',
              showConfirmButton: false
            })
          });
       }
       else if(result.dismiss==Swal.DismissReason.cancel){
         Swal.fire(
          'Cancelled',
          'Your Assignment is safe',
          'error'
         )
       }
     })
  
    // this.workflowservice.deleteWorkFlow(id).subscribe( data => {
    // });
    // alert("Oops!! You Lost your Assignment");
    // Swal.fire({
    //   icon: 'success',
    //   title: 'Assignment Deleted Successfully',
    //   showConfirmButton: false,
    //   timer: 1500
    // })
    // this.getWorkFlows();
    
  }
  radios(values:any){
    this.workflows=this.tempWorkFlow;
    if(values.target.value=="All"){
      this.workflows=this.tempWorkFlow;
    }
    else{
      console.log(values.target.value);
    this.status=this.workflows.filter(element=> element.workFlowStatus==values.target.value);
    console.log(this.status);
    this.workflows=this.status;
    }
  }

  getCategoryName(){
    this.workflow.category=this.workflowservice.getCategoryName()
    console.log(this.workflow.category);
  }
}
