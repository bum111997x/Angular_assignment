import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) {
  }

  login(email: String, googleId: String): Observable<any> {
    return this.http.get<any>(`${environment.user_api}?email=${email}&googleId=${googleId}`)
      .pipe(
        map((item: any) => {
          console.log(item)
          if(item.length > 0){
          localStorage.setItem('login_user', JSON.stringify(item[0]))
          return item[0];
        }
          return null;
        })
      )
  }

  loggedInUser(){
    let student = localStorage.getItem('login_user') ?? "{}"
    let user  = JSON.parse(student)
    return user
  }

  logout():void{
    localStorage.removeItem('login_user');
    this.router.navigate(['/login'])
  }


}
