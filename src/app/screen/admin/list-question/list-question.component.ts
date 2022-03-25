import { Component, OnInit } from '@angular/core';
import {QuestionService} from "../../../services/question/question.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-list-question',
  templateUrl: './list-question.component.html',
  styleUrls: ['./list-question.component.css']
})
export class ListQuestionComponent implements OnInit {
  listQuestion : Array<any> = []
  constructor(private QuestionService:QuestionService, private activatedRoute: ActivatedRoute) { }
  param:any = "";
  ngOnInit(): void {
    this.param = this.activatedRoute.snapshot.paramMap.get('id');
    this.getQuestion()
  }

  getQuestion(){
    this.QuestionService.list(this.param).subscribe(data =>{
      this.listQuestion = data
      console.log(this.listQuestion)
    })
  }

}
