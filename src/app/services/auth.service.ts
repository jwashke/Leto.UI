import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';

import { IUser } from '../models/index';

@Injectable()
export class AuthService {
  private currentUser: IUser;


}