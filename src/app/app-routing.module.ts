import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { EmployerDetailComponent } from './employer-detail/employer-detail.component';
import { EmployerComponent } from './employer/employer.component';
import { HomeComponent } from './home/home.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { LayoutComponent } from './layout/layout.component';
import { WorksComponent } from './works/works.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      // { path: '', component: HomeComponent },
      { path: 'employee', component: EmployeeComponent },
      { path: 'employer', component: EmployerComponent },
      { path: 'how-it-works', component: WorksComponent },
      { path: 'home', component: HomeComponent },
      { path: 'job-details', component: JobDetailsComponent },
      { path: 'employer-details', component: EmployerDetailComponent },
      { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) },
      { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
    ],
  },
  { path: '**', redirectTo: '/layout', pathMatch: 'full' },
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
