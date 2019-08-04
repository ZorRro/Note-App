import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppLoginComponent } from './auth/app-login.component';
import { AppSignupComponent } from './auth/app-signup.component';
import { AppComponent } from './app.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';

const routes: Routes = [
  {path: 'auth/login', component: AppLoginComponent},
  {path: 'auth/signup', component: AppSignupComponent},
  {path: 'user/:id', component: UserDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
