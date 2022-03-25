import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  list(searchKey: string = ""): Observable<any>{
    return this.http.get<any>(`${environment.student_api}?username_like=${searchKey}`)
  }

  create(data:any):Observable<any>{
    return  this.http.post<any>(environment.student_api,data)
  }

  edit(id:any):Observable<any>{
    return this.http.get<any>(`${environment.student_api}/${id}`)
  }

  update(id:any,data:any):Observable<any>{
    return this.http.put(`${environment.student_api}/${id}`, data)
  }

  delete(id:any):Observable<any>{
    return this.http.delete(`${environment.student_api}/${id}`)
  }
}
