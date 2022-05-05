import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { User } from '../Models/User';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  message='';
  user= new User();
  signUpForm:any =  FormGroup;
  // public signUpForm !: FormGroup;
  submitted = false;
  constructor(private formBuilder:FormBuilder, private regService: RegistrationService, private router:Router) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      username:[''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      });
  }

  get f() { return this.signUpForm.controls; }
  registerUser(){
    this.regService.register(this.user).subscribe(
      data =>{
       console.log("Response recived");
       Swal.fire({
        icon: 'success',
        title: 'Work-Flow account created successfully',
        text:'Kindly login to proceed further.',
        showConfirmButton: true
      }).then((result)=>{
        this.router.navigate(['/login']);
      })
      },
      error => {
       console.log("Error Occured");
       this.message='Email already exists, Click here to Login';
      }
    ) 
  
  }

}
