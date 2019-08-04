import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLoginComponent } from './auth/app-login.component';
import { AppSignupComponent } from './auth/app-signup.component';
import { AuthService } from './service/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    AppLoginComponent,
    AppSignupComponent,
    UserDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
