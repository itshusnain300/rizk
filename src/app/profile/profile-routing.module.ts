import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ChangePasswordComponent } from "./change-password/change-password.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { EditProfileComponent } from "./edit-profile/edit-profile.component";
import { LayoutComponent } from "./layout/layout.component";
import { ResumeComponent } from "./resume/resume.component";




const routes: Routes = [


    { path: '', component: LayoutComponent , children: [
      {path: '', component: DashboardComponent},
      {path: 'edit-profile', component: EditProfileComponent},
     {path: 'resume', component: ResumeComponent},
     {path: 'change-password', component: ChangePasswordComponent},
    ] },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
