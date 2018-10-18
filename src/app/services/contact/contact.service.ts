import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { throwError } from "rxjs/internal/observable/throwError";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(
    private http: HttpClient,
  ) { }

  public submitContactForm =  (): Observable<any> => {
    let path, body, options;
    return this.http
      .post(path, body, options)
      .map()
      .catch(this.handleError(error))
  }

private handleError = (error: any): Observable<any> => {
  const body = JSON.parse(error._body);
  if (body) {
    if (body.error) {
      switch (body.error.code) {
        case 1050:
          return ErrorObservable.throw({code: 1050, message: 'errors.system.error', responseBody: body});
        case 1030:
          return Observable.create({code: 1030, message: 'errors.redirect.challenge', responseBody: body});
        default:
          return;
      }
    } else {
      const err = {
        httpStatus: error.status,
        responseBody: body,
      };
      return throwError(err);
    }
  } else {
    return throwError('error');
  }
}
}
