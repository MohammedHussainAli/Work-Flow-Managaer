import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkFlow } from '../Models/work-flow';
import { WorkflowService } from '../services/workflow.service';

@Component({
  selector: 'app-view-wf',
  templateUrl: './view-wf.component.html',
  styleUrls: ['./view-wf.component.css']
})
export class ViewWfComponent implements OnInit {


  id!:number;
  workflow!:WorkFlow;
  constructor(private route: ActivatedRoute, private workflowservice:WorkflowService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.workflow = new WorkFlow();
    this.workflowservice.getWorkFlowById(this.id).subscribe( data => {
      this.workflow = data;
    });
  }


}
