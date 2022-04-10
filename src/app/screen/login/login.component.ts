import { Component, OnInit } from '@angular/core';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', Validators.required)
  });

  constructor(private socialService: SocialAuthService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  googleLogin(){
    this.socialService.signIn(GoogleLoginProvider.PROVIDER_ID)
      .then(res => {
        this.authService.login(res.email, res.id)
          .subscribe(data => {
            console.log(data)
            this.router.navigate(['']);
          })
      })
  }

  submitForm() {

  }
}
