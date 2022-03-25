import { Component, OnInit } from '@angular/core';
import {QuestionService} from "../../../services/question/question.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  listQuestion: Array<any> = []
  param: any = "";
  newArr: any =[];
  listTenQuestion: any = []
  constructor(private QuestionService: QuestionService,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.param = this.activatedRoute.snapshot.paramMap.get('id')
    this.getQuestion()
  }

  getQuestion(){
    this.QuestionService.list(this.param).subscribe(data => {
      let i = 0;
      while (i <10){
        let random = Math.floor(Math.random()*(data[data.length-1].Id - data[0].Id) + data[0].Id)
        if(!this.newArr.includes(random)){
          this.newArr.push(random)
          i++
        }

      }
      data.forEach((v:any,i:any)=> {
        for (let j = 0; j < this.newArr.length; j++){
          if(v.Id == this.newArr[j]){
            this.listTenQuestion.push(v)
          }
        }
      })
      console.log(this.listTenQuestion)
    })
  }

}
