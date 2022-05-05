import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../Models/Category';
import { WorkFlow } from '../Models/work-flow';

@Injectable({
  providedIn: 'root'
})
export class WorkflowService {
  categoryName:any;
  status:any;
  private baseUrl="http://localhost:8080"
  constructor(private httpClient:HttpClient) { }
  

  //sending the category name to the assignments table (Coulmn=Catgeory)
  getCategoryName(){
    return this.categoryName;
  }
  setCategoryName(value:any){
    this.categoryName=value;
  }
  // Category List
  getCategoryList(): Observable<Category[]>{
    return this.httpClient.get<Category[]>(`${this.baseUrl}/category`);
  }

  //Get Category name to validate the Wf name for non repeatence
  getCategoryListByCategoryName(category:any): Observable<Category[]>{
    return this.httpClient.get<Category[]>(`${this.baseUrl}/categoryListByCategoryName/${category}`);
  }

  //Create Activity
  createCategory(category:object): Observable<object>{
    return this.httpClient.post<object>(`${this.baseUrl}/addcategory`, category);
  }

   //delete Activity
   deleteCategory(id: number):Observable<any>{
    return this.httpClient.delete(`${this.baseUrl}/deleteCategory/${id}`);
  }

  //get Workflow list by category

  getWorkFlowListByCategory(value:any){
    return this.httpClient.get<WorkFlow[]>(`${this.baseUrl}/categoryName/${value}`);
  }

  //get Category by Id
  
  getCategoryById(id: number): Observable<Category>{
    return this.httpClient.get<Category>(`${this.baseUrl}/category/${id}`);
  }
  


  //Update Category by Id
  updateCategory(id: number, category: Category): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/updatecategory/${id}`, category);
  }
 

//--------------------------||--------------------------------------

  // Work Flow list (Activities)
  getWorkFlowList(): Observable<WorkFlow[]>{
    return this.httpClient.get<WorkFlow[]>(`${this.baseUrl}/workflows`);
  }
  
  //Create Activity
  createWorkFlow(WorkFlow:object): Observable<object>{
    return this.httpClient.post<object>(`${this.baseUrl}/addworkflow`, WorkFlow);
  }

  //Get Activity by Id
  getWorkFlowById(id: number): Observable<WorkFlow>{
    return this.httpClient.get<WorkFlow>(`${this.baseUrl}/workflow/${id}`);
  }
  
  //Update Activity
  updateWorkFlow(id: number, workflow: WorkFlow): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/editworkflow/${id}`, workflow);
  }
 
  //delete Activity
  deleteWorkFlow(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/deleteworkflow/${id}`);
  }

 
  //Delete wf by category
  deleteWorkFlowByCategory(category:any){
     return this.httpClient.delete(`${this.baseUrl}/deleteByCategory/${category}`);
  }


  //Help Desk Message(Send to database)
  
  addMessage(helpDesk:object): Observable<object>{
    return this.httpClient.post<object>(`${this.baseUrl}/helpDesk`, helpDesk);
  }
}


