import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Observable } from 'rxjs/rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { IUser } from '../models/index';

@Injectable()
export class UserService {
  private userUrl: string = 'http://localhost:54972/api/users/';

  constructor(private http: Http) { }

  create(user): Observable<IUser> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    console.log(user);
    return this.http.post(this.userUrl, user, options).map((response: Response) => 
      <IUser>response.json()
    ).catch(error => this.handleError(error))
  }

  handleError(error: Response) {
    return Observable.throw(error.json().error || 'Server error');
  }
}