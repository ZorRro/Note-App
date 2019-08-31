import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { HttpModule } from "@angular/http";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { AuthService } from "./services/auth.service";
import { UserDataResolverService } from "./services/user-data-resolver.service";
import { TokenInterceptorService } from "./services/token-interceptor.service";
import { AngularFontAwesomeModule } from "angular-font-awesome";
// import { QuillModule } from "ngx-quill";
import { CKEditorModule } from "ckeditor4-angular";

import { AppComponent } from "./app.component";
import { AppLoginComponent } from "./auth/app-login.component";
import { AppSignupComponent } from "./auth/app-signup.component";
import { UserDashboardComponent } from "./user/user-dashboard/user-dashboard.component";
import { NoteComponent } from "./note/note.component";
import { ShortenPipe } from "./pipes/shorten.pipe";
import { NoteViewComponent } from "./note/note-view/note-view.component";
import { UserProfileComponent } from "./user/user-profile/user-profile.component";
import { UserProfileEditComponent } from "./user/user-profile-edit/user-profile-edit.component";
import { NewNoteComponent } from "./note/new-note/new-note.component";
import { StripHTMLPipe } from "./pipes/strip-html.pipe";
import { KeepHtmlPipe } from "./pipes/keep-html.pipe";
import { NoteEditComponent } from "./note/note-edit/note-edit.component";
import { HomeComponent } from "./home/home.component";
import { NavComponent } from "./nav/nav.component";
import { TitleFilterPipe } from "./src/app/pipes/title-filter.pipe";
import { ActivateComponent } from './src/app/auth/activate/activate.component';
@NgModule({
  declarations: [
    AppComponent,
    AppLoginComponent,
    AppSignupComponent,
    UserDashboardComponent,
    NoteComponent,
    ShortenPipe,
    NoteViewComponent,
    UserProfileComponent,
    UserProfileEditComponent,
    NewNoteComponent,
    StripHTMLPipe,
    KeepHtmlPipe,
    NoteEditComponent,
    HomeComponent,
    NavComponent,
    TitleFilterPipe,
    ActivateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    // QuillModule.forRoot(),
    CKEditorModule,
    FormsModule,
    ReactiveFormsModule,
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
