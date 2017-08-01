import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { UserModule } from './user/user.module';
import { SessionModule } from './session/session.module';
import { AuthService } from './services/auth.service';
import { LocalStorageModule } from 'angular-2-local-storage';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LocalStorageModule.withConfig({
      prefix: 'leto',
      storageType: 'localStorage'
    }),
    UserModule,
    SessionModule   
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
