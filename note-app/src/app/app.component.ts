import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';
import { Router } from '@angular/router';
import { User } from './model/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public authService: AuthService, private router: Router) {
    this.authService.updateEvent.subscribe(user => {
      this.user = user;
    });
  }
  title = 'note-app';
  user: User;

  handleLogout() {
    this.authService.doLogout();
    this.router.navigate(['/']);
  }
}
