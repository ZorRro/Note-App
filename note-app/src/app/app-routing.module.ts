import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppLoginComponent } from "./auth/app-login.component";
import { AppSignupComponent } from "./auth/app-signup.component";
import { AppComponent } from "./app.component";
import { UserDashboardComponent } from "./user/user-dashboard/user-dashboard.component";
import { AuthGuard } from "guards/auth.guard";
import { UserGuard, UserChildGuard } from "guards/user.guard";
import { UserDataResolverService } from "./services/user-data-resolver.service";
import { NoteViewComponent } from "./note/note-view/note-view.component";
import { UserProfileComponent } from "./user/user-profile/user-profile.component";
import { UserProfileEditComponent } from "./user/user-profile-edit/user-profile-edit.component";
import { NewNoteComponent } from "./note/new-note/new-note.component";
import { NoteEditComponent } from "./note/note-edit/note-edit.component";
import { HomeComponent } from "./home/home.component";
import { ActivateComponent } from "./auth/activate/activate.component";
import { environment } from "src/environments/environment";

const routes: Routes = [
  {
    path: "auth",
    children: [
      {
        path: "login",
        component: AppLoginComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "signup",
        component: AppSignupComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "activate",
        component: ActivateComponent
      },
      {
        path: "**",
        redirectTo: "login"
      }
    ]
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
          },
          {
            path: "view/:noteId",
            component: NoteViewComponent
          },
          {
            path: "edit/:noteId",
            component: NoteEditComponent
          }
        ]
      },
      {
        path: "**",
        redirectTo: "dashboard"
      }
    ]
  },
  {
    path: "**",
    component: HomeComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: environment.enableTracing })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
