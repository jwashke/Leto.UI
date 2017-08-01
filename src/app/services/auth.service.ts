import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';

import { IUser } from '../models/index';

@Injectable()
export class AuthService {
  private currentUser: any;

  constructor (private localStorageService: LocalStorageService) {
    this.currentUser = this.localStorageService.get("current_user");
  }

  saveUser(user: IUser): void {
    this.localStorageService.set('current_user', user);
    this.currentUser = user;
  }

  deleteUser(): void {
    this.currentUser = null;
    this.localStorageService.remove('current_user')
  }

  isAuthenticated(): boolean {
    return !!this.currentUser;
  }
}