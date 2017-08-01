import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { IUser } from '../../models/index';

@Injectable()
export class SessionService {
  private sessionUrl: string = 'http://localhost:54972/api/auth/';

  constructor(private http: Http) { }

  create(userLogin): Observable<IUser> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.sessionUrl, userLogin, options)
      .map((response: Response) => <IUser>response.json())
      .catch(error => this.handleError(error)); 
  }

  handleError(error: Response) {
    return Observable.throw(error.json().error || 'Server error');
  }
}