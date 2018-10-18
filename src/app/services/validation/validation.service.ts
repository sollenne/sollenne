import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class ValidationService {

  constructor() { }

  public markAsTouched = (group: FormGroup | FormArray) => {
    group.markAsTouched();
    for (const i in group.controls) {
      if (group.controls[i] instanceof FormControl) {
        group.controls[i].markAsTouched();
      } else {
        this.markAsTouched(group.controls[i]);
      }
    }
  }

  public checkForEmptyStrings = (obj, form): boolean => {
    for (const field in obj) {
      if (obj.hasOwnProperty(field)) {
        const control = form.get(field);
        if (control && control.value === '' && control.errors) {
          return true;
        }
      }
    }
  }
}
