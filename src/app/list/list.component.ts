import { Component, OnInit } from '@angular/core';

// import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  Marksform: boolean;
  studentform: boolean;
  // details = this.details()
  home = {
    firstName: "",
    secondName: "",
  }
  marks = {
    subject: "",
    marks: "",
  }
  studevtDataName: any;
  studevtDataNamelist: { FirstName: any; secondName: any; };
  marksDetails: {};
  dataArray = [];
  data: { this: any; };

  constructor(private formBuilder: FormBuilder) {
    this.studentform = true
    this.Marksform = false;

  }

  ngOnInit(): void {
    this.dataArray.push({
      subject: "",
      marks: "",
    })
  }
  addStudent(i) {
    this.studentform = false;
    this.Marksform = true;
    console.log(i.firstName, i.secondName);
    this.studevtDataName = {
      FirstName: i.firstName,
      secondName: i.secondName
    }
    console.log(this.studevtDataName)
  }
  addmarks(m) {
    this.marksDetails = {
      subject: m.subject,
      marks: m.marks
    }
    console.log(this.marksDetails)
  }

  addForm() {
    this.dataArray.push({
      subject: "",
      marks: "",
    });
  }
  onSubmit(){
   
   console.log(this.dataArray);
this.data =this.studevtDataName.push(this.dataArray)
console.log(this.data)
  }
  removeForm(i){
    this.dataArray.splice(i);
  }
}