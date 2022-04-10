import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {StudentService} from "../../../services/student/student.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-form-student',
  templateUrl: './form-student.component.html',
  styleUrls: ['./form-student.component.css']
})
export class FormStudentComponent implements OnInit {
  formStudent: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    fullname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    birthday: new FormControl('', Validators.required),
    gender: new FormControl('true'),
    schoolfee: new FormControl('', Validators.required),
    marks: new FormControl('')
  })
  title:string = "Tạo mới tài khoản";
  param:any = ""

  constructor(private studentService: StudentService, private activatedRoute: ActivatedRoute, private router:Router) {
  }

  ngOnInit(): void {
    this.param = this.activatedRoute.snapshot.paramMap.get('id');
    if(this.param){
      this.updateForm();
      this.title = "Cập nhật tài khoản"
    }
  }

  submitForm() {
    if(this.param){
      this.studentService.update(this.formStudent.value).subscribe(data => {
        this.router.navigate(['admin/sinh-vien'])
      })
    }else {
      this.studentService.create(this.formStudent.value).subscribe(data => {
        this.router.navigate(['admin/sinh-vien'])
      })
    }
  }

  updateForm(){
    this.studentService.edit(this.param).subscribe(data =>{
      for(const item in this.formStudent.controls){
        this.formStudent.controls[item].setValue(data[item])
      }
    })
  }
}
