import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ResumeComponent } from './resume/resume.component';
import { NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfileRoutingModule } from './profile-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [DashboardComponent, LayoutComponent, EditProfileComponent, ChangePasswordComponent, ResumeComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    NgbNavModule,
    FormsModule,
    NgbModule
  ]
})
export class ProfileModule { }
