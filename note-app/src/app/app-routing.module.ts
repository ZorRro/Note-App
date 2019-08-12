import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppLoginComponent } from './auth/app-login.component';
import { AppSignupComponent } from './auth/app-signup.component';
import { AppComponent } from './app.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { AuthGuard } from 'guards/auth.guard';
import { UserGuard } from 'guards/user.guard';

const routes: Routes = [
  {path: 'auth/login', component: AppLoginComponent, canActivate: [AuthGuard]},
  {path: 'auth/signup', component: AppSignupComponent, canActivate: [AuthGuard]},
  {path: 'user/:id', component: UserDashboardComponent, canActivate: [UserGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
