import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppLoginComponent } from "./auth/app-login.component";
import { AppSignupComponent } from "./auth/app-signup.component";
import { AppComponent } from "./app.component";
import { UserDashboardComponent } from "./user/user-dashboard/user-dashboard.component";
import { AuthGuard } from "guards/auth.guard";
import { UserGuard, UserChildGuard } from "guards/user.guard";
import { UserDataResolverService } from "./service/user-data-resolver.service";
import { NoteViewComponent } from "./user/note-view/note-view.component";
import { UserProfileComponent } from "./user/user-profile/user-profile.component";
import { UserProfileEditComponent } from "./user/user-profile-edit/user-profile-edit.component";
import { NewNoteComponent } from "./note/new-note/new-note.component";
import { NoteEditComponent } from "./user/note-edit/note-edit.component";

const routes: Routes = [
  {
    path: "auth/login",
    component: AppLoginComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "auth/signup",
    component: AppSignupComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "user",
    canActivateChild: [UserChildGuard],
    children: [
      {
        path: "dashboard",
        component: UserDashboardComponent,
        resolve: {
          user: UserDataResolverService
        }
      },
      {
        path: "note_view/:noteId",
        component: NoteViewComponent
      },
      {
        path: "note_edit/:noteId",
        component: NoteEditComponent
      },
      {
        path: "profile",
        component: UserProfileComponent
      },
      {
        path: "profile/edit",
        component: UserProfileEditComponent
      },
      {
        path: "note",
        children: [
          {
            path: "new-note",
            component: NewNoteComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
