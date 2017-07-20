import { Injectable } from '@angular/core';

@Injectable()
export class StudentdbService {
  private students =[];

  constructor() {
    this.students = [{id:'1',name:'Asaad Saad',stuID:'12345',email:'asaad@mum.edu'},
      {id:'2',name:'Tina Xing',stuID:'12346',email:'tinaxing@mum.edu'}];
  }
  getData(){
    return this.students;
  }


}
