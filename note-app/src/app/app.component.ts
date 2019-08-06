import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public authService: AuthService, private router: Router) {

  }
  title = 'note-app';

  handleLogout() {
    this.authService.doLogout();
    this.router.navigate(['/']);
  }
}
