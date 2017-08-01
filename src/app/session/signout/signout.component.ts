import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signout',
  template: '',
})
export class SignoutComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) { }
  
  ngOnInit() {
    this.authService.deleteUser();
    this.router.navigate(['/']);
  }
}