import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-final-quiz',
  templateUrl: './final-quiz.component.html',
  styleUrls: ['./final-quiz.component.css']
})
export class FinalQuizComponent implements OnInit {
  user:any = {}
  param:any = "";
  userSubject:any;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.param = this.activatedRoute.snapshot.paramMap.get('id')
    this.user = JSON.parse(localStorage.getItem('login_user') || '')
    this.userSubject  = this.user.marks.filter((item:any) => item.subject == this.param)
  }

}
