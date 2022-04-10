import { Component, OnInit } from '@angular/core';
import {QuestionService} from "../../../services/question/question.service";
import {ActivatedRoute} from "@angular/router";
import {AuthService} from "../../../services/auth/auth.service";
import {StudentService} from "../../../services/student/student.service";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  listQuestion: Array<any> = []
  param: any = "";
  newArr: any =[];
  listTenQuestion: Array<any> = []
  userSelectAns: Array<any> = []
  constructor(private QuestionService: QuestionService,private activatedRoute: ActivatedRoute, private authService: AuthService, private studentService: StudentService) { }

  ngOnInit(): void {
    this.param = this.activatedRoute.snapshot.paramMap.get('id')
    this.getQuestion()
  }

  getQuestion(){
    this.QuestionService.list(this.param).subscribe(data => {
      // this.listQuestion = data.sort( ()=>Math.random()-0.5);
      // this.listTenQuestion = this.listQuestion.slice(0,10);
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

  selectAns(qId: number, aId: number) {
    let index = -1;
    this.userSelectAns.forEach((el,i) =>{
      if(el.qId == qId){
        index = i
        return
      }
    })
    if(index == -1 ){
      this.userSelectAns.push({
        qId,aId
      })
    }else {
      this.userSelectAns[index].aId =  aId
    }
    console.log(this.userSelectAns)
  }

  submitExcercise() {
    let correctAns = 0;
    this.userSelectAns.forEach((el) => {
      let q = this.listTenQuestion.find(item => item.Id == el.qId);
      if(q.AnswerId == el.aId){
        correctAns++;
      }
    })
    const score = (correctAns*10/this.listTenQuestion.length).toFixed(2);
    let user = this.authService.loggedInUser();
    // user.marks
    let indx = -1;
    user.marks.forEach((m:any, i: number) => {
      if(m.subject == this.param){
        indx = i;
        return;
      }
    })
    if(indx == -1){
      user.marks.push({
        subject: this.param,
        score: Number(score)
      });
    }else{
      user.marks[indx].score = score;
    }
    this.studentService.update(user)
      .subscribe(u => {
        console.log(u);
      })
  }
}
