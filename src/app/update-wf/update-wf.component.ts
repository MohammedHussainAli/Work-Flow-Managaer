import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WorkFlow } from '../Models/workflow';
import { WorkFlowServiceService } from '../services/work-flow-service.service';

@Component({
  selector: 'app-update-wf',
  templateUrl: './update-wf.component.html',
  styleUrls: ['./update-wf.component.css']
})
export class UpdateWfComponent implements OnInit {
  formValue !: FormGroup;
  workflowobj : WorkFlow = new WorkFlow();

  constructor(private formbuilder: FormBuilder, private api : WorkFlowServiceService) { }

  ngOnInit(): void {
    
  }
  updateWorkflowdetails(){
    this.workflowobj.workflowname = this.formValue.value.workflowname;
    this.workflowobj.workflowdescription= this.formValue.value.workflowdescription;
    this.workflowobj.workflowstatus = this.formValue.value.workflowstatus;
  
    this.api.updateWorkflow(this.workflowobj, this.workflowobj.id)
    //subscrbe and on success response-->
    .subscribe(res=>{
      alert("Work-Flow Updated Successfully");
  
    })
  }


}
