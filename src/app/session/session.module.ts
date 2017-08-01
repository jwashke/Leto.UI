import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import {
  SigninComponent,
  SessionService,
  SignoutComponent
} from './index';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    SigninComponent,
    SignoutComponent,
  ],
  providers: [
    SessionService
  ]
})
export class SessionModule { }
