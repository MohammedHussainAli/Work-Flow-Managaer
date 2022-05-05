import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  
  private baseURL="http://localhost:8080"
  constructor(private http : HttpClient) { }

  public loginUser(user:User):Observable<any>{
    return this.http.post<any>(`${this.baseURL}/login`, user);
  }
  public register(user:User):Observable<any>{
    return this.http.post<any>(`${this.baseURL}/registeruser`, user);
  }
}
