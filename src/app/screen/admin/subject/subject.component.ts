import { Component, OnInit } from '@angular/core';
import {SubjectService} from "../../../services/subject/subject.service";

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  listSubjects:Array<any> = [];

  constructor(private subjectService: SubjectService) { }
  keyword: string = "";
  ngOnInit(): void {
    this.getSubjects()
  }

  getSubjects(searchKeyWord: string = ""){
    this.subjectService.list(searchKeyWord).subscribe(data =>{
      this.listSubjects = data
    })
  }

  search() {
    this.getSubjects(this.keyword)
  }

}
