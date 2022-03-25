import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http: HttpClient) { }
  list(searchKeyWord: string = ""): Observable<any>{
    return this.http.get<any> (`${environment.subject_api}?Name_like=${searchKeyWord}`);
  }

  create(data:any):Observable<any>{
    return  this.http.post<any>(environment.subject_api, data);
  }

  edit(id: any):Observable<any>{
    return this.http.get<any>(`${environment.subject_api}/${id}`)
  }

  delete(id: any):Observable<any>{
    return  this.http.delete<any>(`${environment.subject_api}/${id}`)
  }

  update(id:any ,data:any ):Observable<any>{
    return  this.http.put(`${environment.subject_api}/${id}`, data)
  }
}
