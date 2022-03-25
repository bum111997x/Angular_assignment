import { Component, OnInit } from '@angular/core';
import {SubjectService} from "../../../services/subject/subject.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listSubject: Array<any> = []
  constructor(private SubjectService: SubjectService) { }

  ngOnInit(): void {
    this.getSubject()
  }

  getSubject(stringKeyWord:string = ""){
    this.SubjectService.list(stringKeyWord).subscribe(data => {
      this.listSubject = data
    })
  }

}
