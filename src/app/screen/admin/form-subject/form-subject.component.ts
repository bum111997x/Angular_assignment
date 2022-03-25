import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {SubjectService} from "../../../services/subject/subject.service";

@Component({
  selector: 'app-form-subject',
  templateUrl: './form-subject.component.html',
  styleUrls: ['./form-subject.component.css']
})
export class FormSubjectComponent implements OnInit {
  formSubject: FormGroup = new FormGroup({
    Code: new FormControl('', Validators.required),
    Name: new FormControl('', Validators.required),
    Logo: new FormControl('', Validators.required)
  })
  param:any = "";
  title:string = "Tạo mới môn học"

  constructor(private activatedRoute:ActivatedRoute, private subjectService:SubjectService, private router:Router) {
  }

  ngOnInit(): void {
    this.param = this.activatedRoute.snapshot.paramMap.get('id');
    if(this.param){
      this.title = "Edit môn học";
      this.updateForm()
    }
  }

  submitForm() {
    if(this.param){
      this.subjectService.update(this.param, this.formSubject.value).subscribe(data =>{
        this.router.navigate(['admin/mon-hoc'])
      })
    }else {
      this.subjectService.create(this.formSubject.value).subscribe(data => {
        this.router.navigate(['admin/mon-hoc'])
      })
    }
  }

  updateForm(){
    this.subjectService.edit(this.param).subscribe(data =>{
      for(const item in this.formSubject.controls){
        this.formSubject.controls[item].setValue(data[item])
      }
    })
  }
}
