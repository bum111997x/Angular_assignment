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
    return this.http.get<any>(`${environment.user_api}?name_like=${searchKey}`)
  }

  create(data:any):Observable<any>{
    return  this.http.post<any>(environment.user_api,data)
  }

  edit(id:any):Observable<any>{
    return this.http.get<any>(`${environment.user_api}/${id}`)
  }

  update(data:any):Observable<any>{
    return this.http.put(`${environment.user_api}/${data.id}`, {...data})
  }

  delete(id:any):Observable<any>{
    return this.http.delete(`${environment.user_api}/${id}`)
  }
}
