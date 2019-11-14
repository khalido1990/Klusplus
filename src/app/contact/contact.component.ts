import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from  '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.createRepairsForm();
  }
  createRepairsForm() {
    this.contactForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      telNr: [''],
      message: ['']
    });
  }

  onSubmit() {
    console.log('Your form data : ', this.contactForm.value );
  }
  ngOnInit() {
  }

}
