import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { User } from '../Models/User';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  message='';
  constructor(private formBuilder: FormBuilder, private regService: RegistrationService, private router: Router) { }
  registerForm:any =  FormGroup;
  submitted = false;
  user= new User();
 
  get f() { return this.registerForm.controls; }
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
     email: ['', [Validators.required, Validators.email]],
     password: ['', [Validators.required]],
     });
   }
  onSubmit() {
     
   this.regService.loginUser(this.user).subscribe(
     data =>{
      console.log("Response recived");
      Swal.fire({
        icon: 'success',
        title: 'Welcome to Work-Flow Manager',
        text:'Glad to see you again',
        showConfirmButton: true
      }).then((result)=>{
        this.router.navigate(['']);
      })
     },
     error => {
      console.log("Error Occured");
      this.message='Bad credentials, please enter a valid email and password';
     }
   ) 
    this.submitted = true;
  
    // if (this.registerForm.invalid) {
    //     return;
    // }
   
    // if(this.submitted)
    // {
    //   alert("Welcome to Work-Flow Manager");
    // }
  
  }

 }
