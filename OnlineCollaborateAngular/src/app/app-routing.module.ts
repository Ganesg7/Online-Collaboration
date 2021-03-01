import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterUserComponent } from './register-user/register-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { LoginUserComponent } from './login-user/login-user.component';
import {ActiveUserComponent} from './active-user/active-user.component';
import {BlogListComponent } from './blog-list/blog-list.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
const routes: Routes = [
  { path: '', redirectTo: 'login-user', pathMatch: 'full' },  
  { path: 'user-list', component: UserListComponent },  
  { path: 'register-user', component: RegisterUserComponent },
  { path: 'login-user' , component: LoginUserComponent} ,
  { path: 'active-user' , component: ActiveUserComponent},
  { path: 'blog-list' , component: BlogListComponent},
  { path: 'user-profile' , component: UserProfileComponent} 
  ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
