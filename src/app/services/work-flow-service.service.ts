import { Injectable } from '@angular/core';
import {HttpClient, } from '@angular/common/http'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WorkFlowServiceService {

  constructor(private http : HttpClient) { }

  postWorkflow(data : any){
    return this.http.post<any>("http://localhost:3000/workflows",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  getWorkflow(){
    return this.http.get<any>("http://localhost:3000/workflows")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  updateWorkflow(data : any, id: number){
    return this.http.put<any>("http://localhost:3000/workflows/"+id,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  deleteWorkflow(id : number){
    return this.http.delete<any>("http://localhost:3000/workflows/"+ id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
