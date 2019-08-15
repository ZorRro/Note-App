import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { HttpModule } from "@angular/http";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { AuthService } from "./service/auth.service";
import { UserDataResolverService } from "./service/user-data-resolver.service";
import { TokenInterceptorService } from "./service/token-interceptor.service";
import { AppComponent } from "./app.component";
import { AppLoginComponent } from "./auth/app-login.component";
import { AppSignupComponent } from "./auth/app-signup.component";
import { UserDashboardComponent } from "./user/user-dashboard/user-dashboard.component";
import { NoteComponent } from "./note/note.component";
import { ShortenPipe } from './pipes/shorten.pipe';
import { NoteViewComponent } from './user/note-view/note-view.component';
@NgModule({
  declarations: [
    AppComponent,
    AppLoginComponent,
    AppSignupComponent,
    UserDashboardComponent,
    NoteComponent,
    ShortenPipe,
    NoteViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    UserDataResolverService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
