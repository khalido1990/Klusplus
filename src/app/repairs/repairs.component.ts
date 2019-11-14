import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from  '@angular/forms';

@Component({
  selector: 'app-repairs',
  templateUrl: './repairs.component.html',
  styleUrls: ['./repairs.component.scss']
})
export class RepairsComponent implements OnInit {
  repairsForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.createRepairsForm();
  }
  createRepairsForm() {
    this.repairsForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      telNr: [''],
      date: [''],
      time: [''],
      message: ['']
    });
  }

  onSubmit() {
    console.log('Your form data : ', this.repairsForm.value );
  }
  ngOnInit() {
  }

}
