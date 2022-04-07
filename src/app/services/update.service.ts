import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WorkflowDetails } from '../Models/workflow-details';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { WorkflowFind } from '../Models/workflow-find';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private http:HttpClient) { }

  headers = new HttpHeaders().set('content-type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers
  }

  url: string ="http://localhost:3000/workflows/";

  getWorkflowDetails() {
    return this.http.get<WorkflowDetails[]>(this.url);
  }

  getUpdateWorkflowDetails(id: number): Observable<WorkflowDetails> {
    const url = `${this.url}/${id}`;
    return this.http.get<WorkflowDetails>(url, this.httpOptions)
  }

  updateWorkflowDetails(workflows: WorkflowFind): Observable<WorkflowDetails> {
    const url = `${this.url}/${workflows.id}`;
    return this.http.put<WorkflowDetails>(url, workflows, this.httpOptions).pipe(
      map(() => workflows)
    )
  }



}
