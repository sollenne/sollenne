import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Icontact } from '../../../../interfaces/Icontact';
import { ValidationService } from '../../../../services/validation/validation.service';
import { ContactService } from '../../../../services/contact/contact.service';
import {Subscription} from "rxjs/internal/Subscription";

@Component({
  selector: 'app-home-contact',
  templateUrl: './home-contact.component.html',
  styleUrls: ['./home-contact.component.scss']
})

export class HomeContactComponent implements OnInit {
  public title: string;
  public contactForm: any;
  public name: string;
  public email: string;
  public message: string;
  public formErrors: any;
  public user:  Icontact;

  constructor(
    private validationService: ValidationService,
    private contactService: ContactService,
  ) {
    this.user = {
      name: '',
      email: '',
      message: '',
    }
  }

  ngOnInit() {
    this.title = 'Still ready to get started?';

    this.contactForm = new FormGroup({
      name: new FormControl('',
        [
          Validators.required,
          Validators.minLength(5),
        ]),
      email: new FormControl('',
        [
          Validators.required,
          Validators.email,
        ]),
      message: new FormControl('',
        [
          Validators.required,
          Validators.minLength(20),
          Validators.maxLength(280),
        ]),
    });
  }

  public onValueChanged = (): void => {
    this.formErrors = [];

    for (const field in this.user) {
      if (this.user.hasOwnProperty(field)) {
        const control = this.contactForm.get(field);

        if (control && control.touched && !control.valid) {
          if (field === 'name') {
            if (control.errors.required) {
              this.formErrors.push('Name can\'t be empty.');
            }

            if (control.errors.minlength) {
              this.formErrors.push('That name is too short, silly.');
            }
          }

          if (field === 'email') {
            if (control.errors.required) {
              this.formErrors.push('Email can\'t be empty.');
            }

            if (control.errors.email) {
              this.formErrors.push('That email address doesn\'t look right.');
            }
          }

          if (field === 'message') {
            if (control.errors.required) {
              this.formErrors.push('Message can\'t be empty.');
            }

            if (control.errors.minlength) {
              this.formErrors.push('Your message is too short.');
            }

            if (control.errors.maxlength) {
              this.formErrors.push('Your message is too loooooooooong.');
            }

          }
        }
      }
    }
  }

  public onSubmit = (): void => {

    this.validationService.markAsTouched(this.contactForm);

    if (this.validationService.checkForEmptyStrings(this.user, this.contactForm)) {
      this.onValueChanged();
      return;
    } else {
      this.submitForm();
    }
  }

  public submitForm = (): Subscription => {
    this.contactService.submitContactForm(this.user).subscribe(result);
  }
}


