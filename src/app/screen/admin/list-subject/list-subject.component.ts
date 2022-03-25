import { Component, OnInit } from '@angular/core';
import {SubjectService} from "../../../services/subject/subject.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-subject',
  templateUrl: './list-subject.component.html',
  styleUrls: ['./list-subject.component.css']
})
export class ListSubjectComponent implements OnInit {
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

  remove(id: any) {
    this.subjectService.delete(id).subscribe(data =>{
      this.getSubjects()
    })
  }
}
