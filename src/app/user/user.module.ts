import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  userRoutes
} from './';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes),
  ],
  declarations: []
})
export class UserModule { }
