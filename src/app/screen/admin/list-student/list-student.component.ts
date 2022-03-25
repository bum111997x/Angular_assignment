import { Component, OnInit } from '@angular/core';
import {StudentService} from "../../../services/student/student.service";

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {
  listStudent: Array<any> = [];
  constructor(private studentService: StudentService) { }
  keyword: string = "";
  ngOnInit(): void {
    this.getStudent()
  }

  getStudent(searchKey:string = ""){
    this.studentService.list(searchKey).subscribe(data =>{
      this.listStudent = data
    })
  }

  search() {
    this.getStudent(this.keyword)
  }

  remove(id:any) {
    this.studentService.delete(id).subscribe(data=>{
      this.getStudent()
    })
  }
}
