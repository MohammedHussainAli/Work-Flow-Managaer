import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Category } from '../Models/Category';
import { WorkflowService } from '../services/workflow.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {

  id!:number;
  category:Category=new Category();
  constructor(private workflowservice:WorkflowService, private activateRoute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];
    this.workflowservice.getCategoryById(this.id).subscribe(data =>{
      this.category = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.workflowservice.updateCategory(this.id, this.category).subscribe( data =>{
      Swal.fire({
        icon: 'success',
        title: 'Work-Flow Status Updatd Successfully',
        showConfirmButton: false,
        timer: 1500
      })
      //alert("Work-Flow Updatd Successfully");
      this.goToWorkflowList();
    }
    , error => console.log(error));
  }

  goToWorkflowList(){
    this.router.navigate(['/category-list']);
  }


}
