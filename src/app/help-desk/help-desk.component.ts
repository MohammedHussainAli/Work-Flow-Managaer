import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { HelpDesk } from '../Models/HelpDesk';
import { WorkflowService } from '../services/workflow.service';

@Component({
  selector: 'app-help-desk',
  templateUrl: './help-desk.component.html',
  styleUrls: ['./help-desk.component.css']
})
export class HelpDeskComponent implements OnInit {

  helpDesk:HelpDesk= new HelpDesk();
  constructor(private workflowservice: WorkflowService, private router:Router) { }

  ngOnInit(): void {
  }

  sendMessage(){
    this.workflowservice.addMessage(this.helpDesk).subscribe(data =>{
      Swal.fire({
        icon: 'success',
        title: 'Your Response has been submitted',
        text:'Thank You for contacting workFlowSupport',
        showConfirmButton: true
      }).then((result)=>{
        this.router.navigate(['']);
      })
    },
    error => alert("Something went wrong, please try again.."));
  }
}
