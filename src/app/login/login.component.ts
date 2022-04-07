import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm !: FormGroup;
  constructor(private formBuilder: FormBuilder, private http:HttpClient, private router:Router) { }
 
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
     email: ['', [Validators.required, Validators.email]],
     password: ['', [Validators.required]],
     });
   }
   login(){
   this.http.get<any>("http://localhost:3000/users")
    .subscribe(res => {
      const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      });
      if(user){
        this.loginForm.reset();
        alert("Welcome to Work-Flow Manager");
        this.router.navigate([''])
      } else{
        alert("No work-flow account with this email, kindly check and try again...!");
      }
    },err => {
      alert("Something went wrong");
    })
  }
 }
