import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  list(code:any):Observable<any>{
    return this.http.get<any>(`${environment.question_api}/${code}`)
  }

  create(code:any, data:any): Observable<any>{
    return this.http.post<any>(`${environment.question_api}/${code}`,{...data})
  }

  edit(code:any, idQuestion:any):Observable<any>{
    return this.http.get<any>(`${environment.question_api}/${code}/${idQuestion}`)
  }

  update(code:any, idQuestion:any, data: any):Observable<any>{
    return this.http.put<any>(`${environment.question_api}/${code}/${idQuestion}`, data)
  }
}
