import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { SessionService } from './session.service';
 
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {

  constructor(
    private router: Router, 
    private sessionService: SessionService, 
    private authService: AuthService) { }

  signin(formValues: string): void {
    this.sessionService.create(formValues).subscribe(user => {
      this.authService.saveUser(user);
      this.router.navigate(['/']);
    })
  }

  cancel(): void {
    this.router.navigate(['/']);
  }

}
