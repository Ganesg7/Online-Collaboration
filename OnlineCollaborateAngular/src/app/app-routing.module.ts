import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterUserComponent } from './register-user/register-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { LoginUserComponent } from './login-user/login-user.component';
import {ActiveUserComponent} from './active-user/active-user.component';
import {BlogListComponent } from './blog-list/blog-list.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { NavUserComponent } from './nav-user/nav-user.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'home', component: HomeComponent},
  {path:'nav/:Id', component:NavComponent, 
  children: [
    { path: 'user-list', component: UserListComponent },
    { path: 'active-user' , component: ActiveUserComponent},
  { path: 'blog-list' , component: BlogListComponent},
  { path: 'user-profile/:Id' , component: UserProfileComponent}  
  ]
} ,
  {path:'nav-user/:Id', component:NavUserComponent,
   children:[
    { path: 'blog-list' , component: BlogListComponent},
    { path: 'user-profile/:Id' , component: UserProfileComponent}
   ]
},
  { path: 'register-user', component: RegisterUserComponent },
  { path: 'login-user' , component: LoginUserComponent} ,
   
  ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
