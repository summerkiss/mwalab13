import { Component, OnInit } from '@angular/core';
import { StudentdbService }  from '../studentdb.service';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  providers:  [ StudentdbService ]
})
export class StudentComponent implements OnInit {
  students = [];
  constructor(private service: StudentdbService) { console.log("=====in=====")}

  ngOnInit() {
    this.students = this.service.getData();
  }

}
