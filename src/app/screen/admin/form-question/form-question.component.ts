import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {anySymbolName} from "@angular/core/schematics/migrations/typed-forms/util";
import {$e} from "@angular/compiler/src/chars";
import {ActivatedRoute, Router} from "@angular/router";
import {QuestionService} from "../../../services/question/question.service";

@Component({
  selector: 'app-form-question',
  templateUrl: './form-question.component.html',
  styleUrls: ['./form-question.component.css']
})
export class FormQuestionComponent implements OnInit {
  formQuestion: any = {
    Text: '',
    Marks: 1,
    AnswerId: '',
    Answers: []
  }
  arr: any = [];
  listAnsId: any = [];
  param: any = '';
  idQuestion: any = '';
  flag: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private questionService: QuestionService, private route: Router) {
  }

  ngOnInit(): void {
    this.param = this.activatedRoute.snapshot.paramMap.get('id');
    this.idQuestion = this.activatedRoute.snapshot.paramMap.get('idQuestion')
    if (this.idQuestion) {
      this.updateForm()
      this.flag = true
    }
  }

  createAns() {
    let data = {
      Text: '',
      is_correct: false
    };
    this.formQuestion.Answers.push(data)
    this.logIdAnswers()
  }

  changeAns(i: number) {
    let Arr: any = this.formQuestion.Answers;
    Arr.forEach((v: any, index: any) => {
      this.formQuestion.Answers[index].is_correct = false;
      if (index == i) {
        this.formQuestion.Answers[i].is_correct = true;
        this.formQuestion.AnswerId = i
      }
    })


  }


  changeText(e: any, i: number) {
    this.formQuestion.Answers[i].Text = e.target.value
  }

  logIdAnswers() {
    this.questionService.list(this.param).subscribe(data => {
      let idLastQuestion = data[data.length - 1].Answers;
      console.log(data[data.length - 1])
      let idLastAnswer = idLastQuestion[idLastQuestion.length - 1].id;

      for (let i = 0; i < this.formQuestion.Answers.length; i++) {
        this.arr.push((idLastAnswer += 1));
      }

      for (let i = 0; i < this.arr.length; i++) {
        if (!this.listAnsId.includes(this.arr[i])) {
          this.listAnsId.push(this.arr[i])
        }
      }
    })
  }

  Save() {

    if (this.idQuestion) {
      this.questionService.update(this.param,this.idQuestion, this.formQuestion).subscribe(() =>{
        this.route.navigate(['admin/cau-hoi/' + this.param])
      })
    } else {
      let answers: any = [];
      let AnswerId: any;

      this.formQuestion.Answers.forEach((v: any, i: any) => {
        answers.push({
          id: this.listAnsId[i],
          Text: v.Text
        })

        if (this.formQuestion.AnswerId == i) {
          AnswerId = this.listAnsId[i]
        }


      })
      let dataQuestion: any = {
        Text: this.formQuestion.Text,
        AnswerId: AnswerId,
        Answers: answers
      };

      this.questionService.create(this.param, dataQuestion).subscribe(() => {
        console.log(dataQuestion)
        this.route.navigate(['admin/cau-hoi/' + this.param])
      })
    }
  }

  updateForm() {
    this.questionService.edit(this.param, this.idQuestion).subscribe(data => {
      for (const itemForm in this.formQuestion) {
        this.formQuestion[itemForm] = data[itemForm]
      }
    })
  }

  changeAnsUpdate(id: any) {
    if (this.idQuestion) {
      this.formQuestion.AnswerId = id
    }
  }
}
