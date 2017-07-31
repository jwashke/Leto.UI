import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {
  NewUserComponent,
  UserService
} from './index';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
  ],
  declarations: [
    NewUserComponent
  ],
  providers: [
    UserService
  ]
})
export class UserModule { }
