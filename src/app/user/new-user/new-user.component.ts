import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../index';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent {

  constructor(private userService: UserService, private router: Router) { }

  signup(formValues: any): void {
    console.log(formValues);
    this.userService.create(formValues).subscribe(user => {
      // store user in auth service
      console.log(user);
    })
    this.router.navigate(['/']);
  }

  cancel(): void {
    this.router.navigate(['/']);
  }
}
